"""Announced Marvel films, series and new seasons from TMDB, added to the site automatically.
Run before every publish:

  python tools/build_upcoming.py
  python tools/build_watch.py

What it finds:
  * films and new series from Marvel's TMDB companies with a future (or not yet set) release date,
    leaving out preschool shows and anything not made with Marvel;
  * new seasons of shows the site already lists.
Each goes into the universe it belongs to (Marvel Studios -> Sacred Timeline, Spider-Verse films -> The
Spider-Verse, Sony's live-action Spider-Man films -> Sony's Spider-Man Universe, a new season -> its show's
universe). It writes public/upcoming.js (title, kind, universe, release date, TMDB overview) plus key art in
public/art/. The site adds these at the end of their universe as estimated placements; once a title is placed
by hand in app.js it drops out on the next run. Titles found once are kept after release (tools/upcoming.json),
so nothing vanishes the day it comes out. The TMDB key comes from TMDB_TOKEN or ~/.tmdb_token, never the repo."""
import datetime, io, json, os, re, shutil, subprocess, sys, time, urllib.parse, urllib.request
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8", errors="replace")   # titles in any script print on any console
HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(HERE, "..", "public")
TOK = os.environ.get("TMDB_TOKEN") or open(os.path.expanduser("~/.tmdb_token")).read().strip()
STATE = os.path.join(HERE, "upcoming.json")
# Ids are permanent. An auto-added title keeps the id (slug) it got on its first run even if TMDB renames it,
# because watch marks, removals and edits are stored under that id. When a title is later placed by hand
# under a different id, aliases.json records old id -> new id and the site moves the marks across on load.
ALIASES = os.path.join(HERE, "aliases.json")
MARVEL = {420: "Marvel Studios", 7505: "Marvel Entertainment", 13252: "Marvel Animation", 38679: "Marvel Television",
          19551: "Marvel Enterprises", 108634: "Marvel Films"}
SONY_ANIM, COLUMBIA, SONY = 2251, 5, 34          # Sony Pictures Animation, Columbia Pictures, Sony Pictures
KIDS_NETWORKS = {"Disney Junior"}

def api(path, **q):
    req = urllib.request.Request("https://api.themoviedb.org/3" + path + ("?" + urllib.parse.urlencode(q) if q else ""), headers={"Authorization": "Bearer " + TOK})
    for _ in range(3):
        try: return json.load(urllib.request.urlopen(req, timeout=30))
        except Exception as e: err = e; time.sleep(2)
    raise err

slug = lambda t: re.sub(r"[^a-z0-9]+", "", t.lower())
def write(path, text):
    """Write a file whole or not at all: an interrupted run never leaves half a file for the site to load."""
    text = text.replace("</", r"<\/")   # a value can never close a <script> (same string in JS)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8", newline="\n") as f: f.write(text)
    os.replace(tmp, path)

norm = lambda t: re.sub(r"[^a-z0-9]", "", t.lower().replace("marvel's", ""))

# every title the site lists by hand, with its kind and universe.
# The node snippet evals only the UNIS literal cut from this project's own app.js, nothing external.
site = json.loads(subprocess.run(["node", "-e", r'''
const src=require("fs").readFileSync(process.argv[1],"utf8"); const end=src.indexOf("\n];",src.indexOf("const UNIS"))+3;
eval(src.slice(0,end).replace("const UNIS","global.UNIS"));
console.log(JSON.stringify(UNIS.flatMap(u=>u.items.filter(Array.isArray).map(it=>[it[0], it[1], u.id]))));''', os.path.join(PUB, "app.js")],
    capture_output=True, text=True, check=True).stdout)
by_slug = {slug(t): (t, k, u) for t, k, u in site}
site_norms = {norm(t) for t, _, _ in site}
hand = json.load(open(os.path.join(HERE, "tmdb_ids.json")))
hand_ids = {(v[0], v[1]) for v in hand.values()}
hand_slug = {}
for s_, v in hand.items(): hand_slug.setdefault((v[0], v[1]), s_)
def load(path, default, ok):
    """Last run's file, or stop with a clear message if it is damaged: carrying on would lose the permanent ids."""
    if not os.path.exists(path): return default
    try: v = json.load(open(path, encoding="utf-8"))
    except ValueError as e: sys.exit(f"{os.path.basename(path)} is damaged ({e}). Restore it from a backup, then run again.")
    if not ok(v): sys.exit(f"{os.path.basename(path)} has the wrong shape. Restore it from a backup, then run again.")
    return v
aliases = load(ALIASES, {}, lambda v: isinstance(v, dict) and all(isinstance(k, str) and isinstance(x, str) for k, x in v.items()))

today = datetime.date.today().isoformat()
state = {(f.get("kind", "movie"), f["tmdb"], f.get("season")): f for f in load(STATE, [], lambda v: isinstance(v, list) and all(
    isinstance(f, dict) and isinstance(f.get("tmdb"), int) and isinstance(f.get("slug"), str) and re.fullmatch(r"[a-z0-9]+", f["slug"])
    and isinstance(f.get("t"), str) for f in v))}   # an id is letters and digits only: it names art files

def art_from_tmdb(kind, i, s):
    try:
        ims = [b for b in api(f"/{kind}/{i}/images", include_image_language="null,en").get("backdrops") or [] if isinstance(b.get("file_path"), str)]
        ims.sort(key=lambda b: (b.get("iso_639_1") is not None, -(b.get("vote_average") or 0), -(b.get("vote_count") or 0)))
        return bool(ims) and save_art(ims[0]["file_path"], s)
    except Exception as e:   # no picture this time: the title still goes on the site, and gets art on a later run
        print(f"  warning: art for {kind} {i} failed: {e}"); return False

def save_art(path, s):
    im = Image.open(io.BytesIO(urllib.request.urlopen("https://image.tmdb.org/t/p/w1280" + path, timeout=60).read())).convert("RGB")
    for W in (960, 480, 160):
        H = W * 9 // 16; k = max(W / im.width, H / im.height)
        r = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
        r = r.crop(((r.width - W) // 2, (r.height - H) // 2, (r.width - W) // 2 + W, (r.height - H) // 2 + H))
        r.save(os.path.join(PUB, "art", s + ("" if W == 960 else f"-{W}") + ".webp"), "WEBP", quality=72, method=6)
    return True

def copy_art(src, dst):
    ok = False
    for suf in ("", "-480", "-160"):
        a = os.path.join(PUB, "art", src + suf + ".webp")
        if os.path.exists(a): shutil.copyfile(a, os.path.join(PUB, "art", dst + suf + ".webp")); ok = True
    return ok

out, used = [], set()
def add(entry):
    out.append(entry); used.add(entry["slug"])
    print(f"  {entry['rel'] or 'undated   '}  {entry['t']}  -> {entry['u']}  ({entry['kind']} {entry['tmdb']}){'' if entry['art'] else '  (no art yet)'}")

# 1. new films and series
cands = {}
for c in MARVEL:
    for kind, f in (("movie", "primary_release_date.gte"), ("tv", "first_air_date.gte")):
        try:
            for page in range(1, 6):
                r = api(f"/discover/{kind}", with_companies=c, page=page, **{f: today})
                for x in r.get("results", []): cands[(kind, x["id"])] = 1
                if page >= r.get("total_pages", 1): break
            # announced but undated (planned / in production): the most popular titles without a date
            for page in range(1, 3):
                r = api(f"/discover/{kind}", with_companies=c, page=page, sort_by="popularity.desc")
                for x in r.get("results", []):
                    if not (x.get("release_date") or x.get("first_air_date")): cands[(kind, x["id"])] = 1
        except Exception as e:
            print(f"  warning: TMDB search for company {c} ({kind}) failed, continuing: {e}")
cands.update({(k, i): 1 for (k, i, s) in state if s is None})
print("Films and series:")
for kind, i in sorted(cands):
    prev = state.get((kind, i, None))
    if (kind, i) in hand_ids:                                                   # placed by hand: the hand entry wins
        if prev and prev["slug"] != hand_slug[(kind, i)]: aliases[prev["slug"]] = hand_slug[(kind, i)]
        continue
    try: d = api(f"/{kind}/{i}"); time.sleep(.08)
    except Exception as e:
        # TMDB failed for this title: keep last run's entry, so it doesn't vanish from the site
        print(f"  warning: TMDB lookup failed for {kind} {i}, {'kept as last run' if prev else 'skipped'}: {e}")
        if prev: add(prev)
        continue
    comps = {c.get("id") for c in d.get("production_companies") or []}
    nets = {n.get("name") for n in d.get("networks") or []}
    genres = {g.get("name") for g in d.get("genres") or []}
    if not comps & set(MARVEL) or nets & KIDS_NETWORKS or "Kids" in genres: continue
    if d.get("status") == "Canceled":
        if prev:
            print(f"  kept (canceled on TMDB, but listed before): {prev['t']}"); add(prev)
        continue
    title, rel = d.get("title") or d.get("name") or "", d.get("release_date") or d.get("first_air_date") or ""
    if not title: continue
    if "spider-verse" in title.lower(): u = "verse"
    elif 420 in comps: u = "616"
    elif comps & {COLUMBIA, SONY} and "spider" in title.lower(): u = "ssu"
    else:
        print(f"  skipped (no universe for it): {title}"); continue
    if norm(title) in site_norms: title = f"{title} ({rel[:4] or 'TBA'})"     # same name as a listed title
    s = prev["slug"] if prev else slug(title)                                    # first id is kept for good
    if not prev and (not s or s in aliases or s in used):                      # no usable letters, or a retired / taken id
        s = f"tmdb{kind[0]}{i}"
        while s in by_slug or s in aliases or s in used: s += "x"               # even that is taken (a title named "tmdbm200")
    if s in by_slug: continue
    k = ("A" if "Animation" in genres else "F") if kind == "movie" else ("A" if "Animation" in genres else "S")
    add({"kind": kind, "tmdb": i, "season": None, "t": title, "slug": s, "k": k, "u": u, "rel": rel,
         "syn": (d.get("overview") or "").strip(), "art": art_from_tmdb(kind, i, s)})

# 2. new seasons of shows already listed
print("New seasons:")
for i in sorted({v[1] for v in hand.values() if v[0] == "tv"}):
    try: d = api(f"/tv/{i}"); time.sleep(.08)
    except Exception as e:
        print(f"  warning: TMDB lookup failed for tv {i}, keeping its seasons from last run: {e}")
        for (k_, i_, n_), f_ in state.items():
            if k_ == "tv" and i_ == i and n_ is not None: add(f_)
        continue
    listed = [s for s, v in hand.items() if v == ["tv", i] and s in by_slug]
    seasons = [(int(m.group(2)), by_slug[s]) for s in listed if (m := re.match(r"(.*) \(Season (\d+)\)$", by_slug[s][0]))]
    if not seasons: continue                                                    # single-entry show (whole run in one title)
    top, (top_title, k, u) = max(seasons)
    base = re.sub(r" \(Season \d+\)$", "", top_title)
    for sn in d.get("seasons") or []:
        n = sn.get("season_number")
        if not isinstance(n, int): continue
        if n <= top: continue
        t = f"{base} (Season {n})"; prev = state.get(("tv", i, n))
        if slug(t) in by_slug:                                                  # placed by hand now
            if prev and prev["slug"] != slug(t): aliases[prev["slug"]] = slug(t)
            continue
        s = prev["slug"] if prev else slug(t)
        add({"kind": "tv", "tmdb": i, "season": n, "t": t, "slug": s, "k": k, "u": u, "rel": sn.get("air_date") or "",
             "syn": (sn.get("overview") or d.get("overview") or "").strip(), "art": copy_art(slug(top_title), s)})

out.sort(key=lambda f: (f["rel"] or "9999", f["t"]))
def loops(a):   # an id move must never point back to itself, directly or through others
    seen, n = {a}, aliases.get(a)
    while n is not None:
        if n in seen: return True
        seen.add(n); n = aliases.get(n)
    return False
for a in [a for a in aliases if loops(a)]: print("  dropped looping id move:", a, "->", aliases.pop(a))
# upcoming.js first: if it can't be written, the state files stay as they were and the next run redoes it
write(os.path.join(PUB, "upcoming.js"),
    "// Announced Marvel films, series and seasons from TMDB not yet placed by hand. Built by tools/build_upcoming.py; do not edit.\n"
    "// Each: {t: title, slug, k: kind, u: universe id, tv: a series or season, rel: release date, syn: TMDB overview, art: banner in art/}\n"
    "const UPCOMING = " + json.dumps([{**{x: f[x] for x in ("t", "slug", "k", "u", "rel", "syn", "art")}, "tv": f["kind"] == "tv"} for f in out], ensure_ascii=False) + ";\n"
    "// old id -> new id for titles that were auto-added and later placed by hand (marks move across on load)\n"
    "const UP_ALIASES = " + json.dumps(aliases, ensure_ascii=False, sort_keys=True) + ";\n")
write(ALIASES, json.dumps(aliases, ensure_ascii=False, indent=1, sort_keys=True))
write(STATE, json.dumps(out, ensure_ascii=False, indent=1))
if aliases: print("id moves:", aliases)
print(len(out), "auto-added titles")
