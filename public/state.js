// The visitor's saved state: its shape, validation, and the merge used by sync between tabs and devices.
// Loaded after upcoming.js (for UP_ALIASES) and before app.js.
//
// Synced progress is a set of entries: one per watch mark, removed title, edited title, universe's custom
// order, added title and added universe. Each entry carries a stamp of when the visitor last
// changed it. Two copies (two tabs, or this device and the cloud) merge entry by entry: the later change to
// each entry wins and nothing else is touched. Stamps only move on the visitor's own actions (touch), never
// when the page fills in defaults, so opening the site on a new device can't overwrite anything.

// owner: the account this browser's progress belongs to (null until someone signs in here)
const DEF = () => ({sel:"616", mode:"story", kind:"all", hideSeen:false, owner:null, watched:{}, edits:{}, removed:[], order:{}, cItems:{}, cUnis:[], stamps:{}});
const isObj = v => !!v && typeof v === "object" && !Array.isArray(v);
// ids are used as keys of plain objects: one named like a built-in ("constructor", "toString"...) would read
// back as a function, so such ids are dropped
const safeId = k => typeof k === "string" && !(k in Object.prototype);
const own = o => Object.keys(o).filter(safeId);
// a universe or added title's own id: also non-empty, short, and without ":" (entry keys are split on it)
const idOk = k => safeId(k) && k.length > 0 && k.length <= 64 && !k.includes(":");
// Stamps from other copies are kept as they are (a device's clock may be off; the newest change still wins).
// Only an impossible one, over a year ahead or too big to add 1 to, drops to the lowest, so any real change beats it.
const sane = t => t <= Date.now() + 366 * 864e5 && t < 2 ** 52 ? t : 2;
const str = v => typeof v === "string" ? v : v == null ? "" : String(v);

// A clean copy of whatever was stored (this browser, the cloud, another tab). Each field that has the wrong
// shape falls back to its default on its own, so one bad value can never stop the site loading.
// legacy: the stamp given to entries saved before stamps existed (0 = none).
function clean(raw, legacy = 0) {
  const s = isObj(raw) ? raw : {}, o = DEF();
  if (typeof s.sel === "string") o.sel = s.sel;
  if (["story", "release", "my", "narrative"].includes(s.mode)) o.mode = s.mode;
  if (["all", "film", "series"].includes(s.kind)) o.kind = s.kind;
  o.hideSeen = s.hideSeen === true;
  if (typeof s.owner === "string") o.owner = s.owner;
  if (isObj(s.watched)) for (const id of own(s.watched)) if (s.watched[id]) o.watched[id] = true;
  if (Array.isArray(s.removed)) o.removed = [...new Set(s.removed.filter(k => typeof k === "string"))];
  if (isObj(s.edits)) for (const k of own(s.edits)) { const e = s.edits[k]; if (isObj(e) && typeof e.t === "string") o.edits[k] = {t:e.t, y:str(e.y)}; }
  if (isObj(s.order)) for (const u of own(s.order)) if (idOk(u) && Array.isArray(s.order[u])) o.order[u] = s.order[u].filter(x => typeof x === "string");
  if (isObj(s.cItems)) for (const u of own(s.cItems)) if (idOk(u) && Array.isArray(s.cItems[u]))
    o.cItems[u] = s.cItems[u].filter(e => isObj(e) && idOk(e.id) && typeof e.t === "string")
      .map(e => ({id:e.id, t:e.t, k:str(e.k) || "F", rel:str(e.rel), y:str(e.y)}));
  if (Array.isArray(s.cUnis)) o.cUnis = s.cUnis.filter(u => isObj(u) && idOk(u.id) && typeof u.name === "string")
    .map(u => ({id:u.id, limb:"Your universes", name:u.name, label:str(u.label || u.name).slice(0, 18), des:str(u.des) || "Unnumbered",
      fork:Number.isFinite(u.fork) ? u.fork : null, note:str(u.note), items:[]}));
  if (isObj(s.stamps)) {
    const keep = (k, v) => { o.stamps[k] = Math.max(o.stamps[k] || 0, v); };   // the larger, whichever key comes first
    for (const k of own(s.stamps)) {
      const t = s.stamps[k];
      if (!Number.isFinite(t) || t <= 0) continue;
      if (/^i:[^:]+$/.test(k)) { for (const e of o.cItems[k.slice(2)] || []) keep(k + ":" + e.id, sane(t)); }   // one stamp per universe (earlier format): give it to each title
      else keep(k, sane(t));
    }
  }
  else if (legacy) for (const k of Object.keys(stateMap(o))) o.stamps[k] = legacy;
  return migrateIds(o);
}

// state -> {entry key: value}, and back. Keys: w:id, r:uni:id, e:uni:id, o:uni, i:uni:id, u:uni
function stateMap(s) {
  const m = {};
  for (const id of own(s.watched)) if (s.watched[id]) m["w:" + id] = true;
  for (const k of s.removed) m["r:" + k] = true;
  for (const k of own(s.edits)) m["e:" + k] = s.edits[k];
  for (const u of own(s.order)) m["o:" + u] = s.order[u];
  for (const u of own(s.cItems)) if (Array.isArray(s.cItems[u])) for (const e of s.cItems[u]) m["i:" + u + ":" + e.id] = e;
  for (const u of s.cUnis) m["u:" + u.id] = u;
  return m;
}
function fromMap(m, s) {
  Object.assign(s, {watched:{}, removed:[], edits:{}, order:{}, cItems:{}, cUnis:[]});
  for (const k of Object.keys(m).sort()) {   // sorted, so added universes and titles keep their creation order (ids are "u" / "c" + time)
    const v = m[k], i = k.indexOf(":"), id = k.slice(i + 1);
    if (v === undefined) continue;
    switch (k.slice(0, i)) {
      case "w": s.watched[id] = true; break;
      case "r": s.removed.push(id); break;
      case "e": s.edits[id] = v; break;
      case "o": s.order[id] = v; break;
      case "i": { const u = id.slice(0, id.indexOf(":")); (Object.hasOwn(s.cItems, u) ? s.cItems[u] : (s.cItems[u] = [])).push(v); break; }
      case "u": s.cUnis.push(v); break;
    }
  }
  return s;
}
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// A new stamp is later than every stamp this copy has seen, so a device whose clock runs slow still wins
// with its newest change, and one far-future stamp can't block later changes.
const nextStamp = s => { let t = Date.now(); for (const k in s.stamps) if (s.stamps[k] > t) t = s.stamps[k]; return t + 1; };

// Run fn (which changes s, often in place) as a visitor action: stamp every entry it changed.
// Compared as JSON text, so a change made inside an existing array or object counts too.
// Returns copies of the changed entries' old values, which is all Undo needs.
const textMap = s => { const m = stateMap(s); for (const k in m) m[k] = JSON.stringify(m[k]); return m; };
function touch(s, fn) {
  const a = textMap(s); fn(); const b = textMap(s), t = nextStamp(s), old = {};
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) if (a[k] !== b[k]) { s.stamps[k] = t; old[k] = a[k] === undefined ? undefined : JSON.parse(a[k]); }
  return old;
}

// Undo an action: put back its entries' old values, except entries changed again since (in another tab or on
// another device), which keep their newer value. after: the entries' values (as JSON) right after the action.
function revert(s, old, after) {
  return touch(s, () => {
    const m = stateMap(s), now = textMap(s);
    for (const k in old) if (now[k] === after[k]) m[k] = old[k];
    fromMap(m, s);
  });
}

// Merge copy r into s, entry by entry. changed: s took something from r. ahead: s has something r lacks.
function merge(s, r) {
  const L = stateMap(s), R = stateMap(r), ls = s.stamps, rs = r.stamps, out = {};
  let changed = false, ahead = false;
  for (const k of new Set([...Object.keys(L), ...Object.keys(R), ...Object.keys(ls), ...Object.keys(rs)])) {
    const lt = ls[k] || 0, rt = rs[k] || 0, diff = !same(L[k], R[k]);
    // the later stamp wins; equal stamps with different values (not expected) settle on the larger value, so both copies agree
    const takeR = rt > lt || (rt === lt && rt > 0 && diff && JSON.stringify(R[k] ?? null) > JSON.stringify(L[k] ?? null));
    if (takeR) { out[k] = R[k]; ls[k] = rt; changed ||= diff; }
    else { out[k] = L[k]; ahead ||= lt > rt || (lt > 0 && diff); }
  }
  if (changed) fromMap(out, s);
  return {changed, ahead};
}

// What goes to the cloud: the entries the visitor has changed, with their stamps. View settings stay per device.
// ponytail: stamps of deleted entries are kept forever (about 30 characters each), so a copy only outgrows the
// cloud limit after many thousands of changes; prune old tombstones if that ever happens.
function synced(s) {
  const m = stateMap(s);
  for (const k of Object.keys(m)) if (!s.stamps[k]) delete m[k];
  return {...fromMap(m, {}), stamps:s.stamps};
}

// A title that was auto-added and later placed by hand changes id: move its watch mark, removal, edits,
// custom order position and their stamps to the new id (UP_ALIASES from upcoming.js).
function migrateIds(s) {
  const map = typeof UP_ALIASES !== "undefined" ? UP_ALIASES : {};
  if (!Object.keys(map).length) return s;
  const to = id => { let n = id; for (let hop = 0; map[n] && hop < 10; hop++) n = map[n]; return n; };
  const key = k => { const i = String(k).indexOf(":"); return i < 0 ? k : k.slice(0, i + 1) + to(k.slice(i + 1)); };
  for (const id of Object.keys(s.watched)) { const n = to(id); if (n !== id) { s.watched[n] ||= s.watched[id]; delete s.watched[id]; } }
  s.removed = [...new Set(s.removed.map(key))];
  const ed = {};   // if both the old and the new id have edits, the new id's win
  for (const [k, v] of Object.entries(s.edits)) { const n = key(k); if (n === k || !(n in ed)) ed[n] = v; }
  s.edits = ed;
  for (const u in s.order) s.order[u] = [...new Set(s.order[u].map(to))];
  const st = {};
  for (const [k, t] of Object.entries(s.stamps)) {
    const n = k[0] === "w" ? "w:" + to(k.slice(2)) : k[0] === "r" || k[0] === "e" ? k.slice(0, 2) + key(k.slice(2)) : k;
    st[n] = Math.max(st[n] || 0, t);
  }
  s.stamps = st;
  return s;
}
