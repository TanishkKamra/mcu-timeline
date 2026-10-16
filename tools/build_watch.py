"""Where-to-watch data for the site, refreshed on every publish.

  python tools/build_watch.py            # re-pull providers from TMDB, then build
  python tools/build_watch.py --offline  # rebuild from the last pull (tools/.cache/watch_raw.json)

Run tools/build_upcoming.py first, so newly announced films get where-to-watch data too.

Writes public/watch/index.js (service names + search links, TMDB ids, time zone -> country),
public/watch/<CC>.js (ranked services per title for that country) and public/watch/logo/<id>.webp.
Data: TMDB watch providers, which come from JustWatch (credit both on the page)."""
import io, json, os, sys, time, urllib.request, urllib.parse
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "public", "watch")
CACHE = os.path.join(HERE, ".cache")
os.makedirs(os.path.join(OUT, "logo"), exist_ok=True); os.makedirs(CACHE, exist_ok=True)
# the TMDB key never lives in the repo: TMDB_TOKEN environment variable, or the file ~/.tmdb_token
TOK = os.environ.get("TMDB_TOKEN") or open(os.path.expanduser("~/.tmdb_token")).read().strip()

def api(path, **q):
    req = urllib.request.Request("https://api.themoviedb.org/3" + path + ("?" + urllib.parse.urlencode(q) if q else ""), headers={"Authorization": "Bearer " + TOK})
    return json.load(urllib.request.urlopen(req, timeout=30))

ids = json.load(open(os.path.join(HERE, "tmdb_ids.json")))
# films added automatically by build_upcoming.py
if os.path.exists(os.path.join(HERE, "upcoming.json")):
    for u in json.load(open(os.path.join(HERE, "upcoming.json"), encoding="utf-8")): ids.setdefault(u["slug"], [u.get("kind", "movie"), u["tmdb"]])
if "--offline" not in sys.argv:
    raw = {}
    for kind, i in sorted({tuple(v) for v in ids.values()}):
        raw[f"{kind}:{i}"] = api(f"/{kind}/{i}/watch/providers")["results"]; time.sleep(.1)
    json.dump(raw, open(os.path.join(CACHE, "watch_raw.json"), "w"))
raw = json.load(open(os.path.join(CACHE, "watch_raw.json")))

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
    for cc, d in raw.get(f"{kind}:{i}", {}).items():
        seen, rows = set(), []
        for t in ORDER:
            for p in sorted(d.get(t, []), key=lambda p: p.get("display_priority", 999)):
                pid = p["provider_id"]
                if pid in seen: continue
                seen.add(pid); rows.append([pid, ORDER.index(t)])
                providers.setdefault(pid, {"name": p["provider_name"], "logo": p.get("logo_path")})
        if rows: per_cc.setdefault(cc, {})[slug] = rows

# logos, self-hosted (small, square, rounded by CSS)
for pid, p in providers.items():
    path = os.path.join(OUT, "logo", f"{pid}.webp")
    if os.path.exists(path) or not p["logo"]: continue
    try:
        data = urllib.request.urlopen("https://image.tmdb.org/t/p/w92" + p["logo"], timeout=30).read()
        Image.open(io.BytesIO(data)).convert("RGB").resize((56, 56), Image.LANCZOS).save(path, "WEBP", quality=80)
    except Exception as e:
        print("logo failed", pid, e)

# time zone -> country, from the IANA tz database (zone.tab, plus the old names browsers still report)
def fetch(url): return urllib.request.urlopen(url, timeout=30).read().decode("utf-8")
tz = {}
for line in fetch("https://raw.githubusercontent.com/eggert/tz/main/zone.tab").splitlines():
    if line and not line.startswith("#"):
        cc, _, zone = line.split("\t")[:3]; tz[zone] = cc
for line in fetch("https://raw.githubusercontent.com/eggert/tz/main/backward").splitlines():
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
open(os.path.join(OUT, "index.js"), "w", encoding="utf-8", newline="\n").write(head + "const WATCH = " + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ";\n")
for cc, rows in per_cc.items():
    open(os.path.join(OUT, f"{cc}.js"), "w", encoding="utf-8", newline="\n").write(
        head + f"WATCH[{json.dumps(cc)}] = " + json.dumps(rows, separators=(",", ":")) + ";\n")
print(len(per_cc), "countries,", len(providers), "services,", len(tz), "time zones; IN titles:", len(per_cc.get("IN", {})))
