"""Where-to-watch data for the site, refreshed on every publish.

  python tools/build_watch.py            # re-pull providers from TMDB, then build
  python tools/build_watch.py --offline  # rebuild from the last pull (tools/.cache/watch_raw.json)

Run tools/build_upcoming.py first, so newly announced films get where-to-watch data too.

Writes public/watch/index.js (service names + search links, TMDB ids, time zone -> country),
public/watch/<CC>.js (ranked services per title for that country) and public/watch/logo/<id>.webp.
Data: TMDB watch providers, which come from JustWatch (credit both on the page)."""
import glob, io, json, os, re, sys, time, urllib.request, urllib.parse
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "public", "watch")
CACHE = os.path.join(HERE, ".cache")
os.makedirs(os.path.join(OUT, "logo"), exist_ok=True); os.makedirs(CACHE, exist_ok=True)
# the TMDB key never lives in the repo: TMDB_TOKEN environment variable, or the file ~/.tmdb_token
TOK = os.environ.get("TMDB_TOKEN") or open(os.path.expanduser("~/.tmdb_token")).read().strip()
TZ_REF = "2025b"   # IANA tz database release the time zone -> country table is built from (pinned, so a run is repeatable)
def write(path, text):
    """Write a file whole or not at all: an interrupted run never leaves half a file for the site to load."""
    text = text.replace("</", r"<\/")   # a value can never close a <script> (same string in JS)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f: f.write(text)
    os.replace(tmp, path)


def api(path, **q):
    req = urllib.request.Request("https://api.themoviedb.org/3" + path + ("?" + urllib.parse.urlencode(q) if q else ""), headers={"Authorization": "Bearer " + TOK})
    for n in range(3):   # a busy (429) or failing TMDB gets two more tries
        try: return json.load(urllib.request.urlopen(req, timeout=30))
        except Exception as e: err = e; time.sleep(2 * (n + 1))
    raise err

def load_cache(path):
    try: v = json.load(open(path))
    except (OSError, ValueError) as e: sys.exit(f"The provider cache can't be read ({e}). Run without --offline to pull it again.")
    if not isinstance(v, dict): sys.exit("The provider cache has the wrong shape. Run without --offline to pull it again.")
    return v

ids = json.load(open(os.path.join(HERE, "tmdb_ids.json")))
# films added automatically by build_upcoming.py
if os.path.exists(os.path.join(HERE, "upcoming.json")):
    for u in json.load(open(os.path.join(HERE, "upcoming.json"), encoding="utf-8")): ids.setdefault(u["slug"], [u.get("kind", "movie"), u["tmdb"]])
if "--offline" not in sys.argv:
    try: old = load_cache(os.path.join(CACHE, "watch_raw.json"))
    except SystemExit: old = {}
    raw = {}
    for kind, i in sorted({tuple(v) for v in ids.values()}):
        try: raw[f"{kind}:{i}"] = api(f"/{kind}/{i}/watch/providers").get("results") or {}
        except Exception as e:   # one failed title keeps its last data instead of stopping the run
            print(f"warning: providers for {kind} {i} failed, keeping last run's: {e}"); raw[f"{kind}:{i}"] = old.get(f"{kind}:{i}", {})
        time.sleep(.1)
    write(os.path.join(CACHE, "watch_raw.json"), json.dumps(raw))
raw = load_cache(os.path.join(CACHE, "watch_raw.json"))

# where each service's button goes: its own search for the title ({q}); others fall back to a web search
SEARCH = {
    8: "https://www.netflix.com/search?q={q}",
    9: "https://www.primevideo.com/search/?phrase={q}", 119: "https://www.primevideo.com/search/?phrase={q}",
    10: "https://www.primevideo.com/search/?phrase={q}", 2100: "https://www.primevideo.com/search/?phrase={q}",
    2: "https://tv.apple.com/search?term={q}", 350: "https://tv.apple.com/search?term={q}",
    337: "https://www.disneyplus.com/search?q={q}", 122: "https://www.disneyplus.com/search?q={q}",
    2336: "https://www.hotstar.com/in/explore?search_query={q}",
    192: "https://www.youtube.com/results?search_query={q}",
    3: "https://play.google.com/store/search?q={q}&c=movies",
}
KIND = {"free": "Free", "flatrate": "Stream", "ads": "Free with ads", "rent": "Rent", "buy": "Buy"}
ORDER = ["free", "flatrate", "ads", "rent", "buy"]   # best first: no cost, then your subscription, then pay per title

providers, per_cc = {}, {}
for slug, (kind, i) in ids.items():
    got = raw.get(f"{kind}:{i}")
    for cc, d in (got if isinstance(got, dict) else {}).items():
        if not re.fullmatch(r"[A-Z]{2}", cc) or not isinstance(d, dict): continue
        seen, rows = set(), []
        for t in ORDER:
            offers = d.get(t) if isinstance(d.get(t), list) else []
            for p in sorted((p for p in offers if isinstance(p, dict)), key=lambda p: p["display_priority"] if isinstance(p.get("display_priority"), int) else 999):
                pid = p.get("provider_id")
                if not isinstance(pid, int) or pid in seen: continue
                seen.add(pid); rows.append([pid, ORDER.index(t)])
                providers.setdefault(pid, {"name": str(p.get("provider_name") or pid), "logo": p.get("logo_path")})
        if rows: per_cc.setdefault(cc, {})[slug] = rows

# logos, self-hosted (small, square, rounded by CSS)
for pid, p in providers.items():
    path = os.path.join(OUT, "logo", f"{pid}.webp")
    if os.path.exists(path) or not isinstance(p["logo"], str) or not re.fullmatch(r"/[A-Za-z0-9_.-]+", p["logo"]): continue
    try:
        data = urllib.request.urlopen("https://image.tmdb.org/t/p/w92" + p["logo"], timeout=30).read()
        Image.open(io.BytesIO(data)).convert("RGB").resize((56, 56), Image.LANCZOS).save(path, "WEBP", quality=80)
    except Exception as e:
        print("logo failed", pid, e)

# time zone -> country, from the IANA tz database (zone.tab, plus the old names browsers still report)
def fetch(url): return urllib.request.urlopen(url, timeout=30).read().decode("utf-8")
tz = {}
for line in fetch(f"https://raw.githubusercontent.com/eggert/tz/{TZ_REF}/zone.tab").splitlines():
    parts = line.split("\t")
    if line.startswith("#") or len(parts) < 3 or not re.fullmatch(r"[A-Z]{2}", parts[0]): continue
    tz[parts[2]] = parts[0]
if not tz: sys.exit("The time zone table didn't download properly. The site's files were left as they are.")
for line in fetch(f"https://raw.githubusercontent.com/eggert/tz/{TZ_REF}/backward").splitlines():
    parts = line.split()
    if len(parts) >= 3 and parts[0] == "Link" and parts[1] in tz: tz[parts[2]] = tz[parts[1]]

index = {
    "kinds": [KIND[t] for t in ORDER],
    "providers": {pid: [p["name"], SEARCH.get(pid, ""), int(os.path.exists(os.path.join(OUT, "logo", f"{pid}.webp")))] for pid, p in providers.items()},
    "ids": {slug: ("m" if kind == "movie" else "t") + str(i) for slug, (kind, i) in ids.items()},
    "countries": sorted(per_cc),
    "tz": tz,
}
head = "// Where to watch, built by build_watch.py from TMDB watch-provider data (powered by JustWatch). Do not edit by hand.\n"
if not per_cc: sys.exit("No where-to-watch data at all (TMDB unreachable?). The site's files were left as they are.")
for cc, rows in per_cc.items():
    write(os.path.join(OUT, f"{cc}.js"), head + f"WATCH[{json.dumps(cc)}] = " + json.dumps(rows, separators=(",", ":")) + ";\n")
# countries that no longer have any data: remove their old files so they don't ship
for f in glob.glob(os.path.join(OUT, "*.js")):
    cc = os.path.basename(f)[:-3]
    if cc != "index" and cc not in per_cc: os.remove(f); print("removed stale", os.path.basename(f))
write(os.path.join(OUT, "index.js"), head + "const WATCH = " + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ";\n")
print(len(per_cc), "countries,", len(providers), "services,", len(tz), "time zones; IN titles:", len(per_cc.get("IN", {})))
