// TVA View: an alternate interface modelled on the TVA's analog control rooms in Loki
// (1960s office hardware, 1980s 8-bit CRT graphics, case files and card catalogues).
// Fan design: original artwork apart from TVmaze and TMDB art in case files, no official logos or characters. Shares state with app.js.
(() => {
const TK = "mcu-tva-view";
const BULLETINS = [
  "Bulletin: events are filed in the order they occur on the Sacred Timeline.",
  "Reminder: stamp each case once viewed. Unstamped cases remain pending review.",
  "Notice: branch timelines are monitored separately. Open a drawer in the Branch Registry.",
  "Advisory: estimated temporal coordinates are marked EST. on every case file.",
  "Bulletin: the Narrative order is a fan-filed alternative and does not replace the official record.",
  "Reminder: all records stay on this terminal unless the agent signs in.",
];
const MODES = [["story", "Story"], ["release", "Release"], ["my", "Mine"], ["narrative", "Narrative"]];
// The open case IS the classic view's open title (detailId in app.js), so both modes stay on the same one.
// With nothing open, the terminal still shows a case (the classic view's "up next") without selecting it:
// caseFor() says what is on screen; only a click, Prev/Next or a stamp makes it the open title.
let on = false, entered = null, query = "", lastCase = null, lastUni = null, slam = false;
// every visit starts in the classic view (so the tree's growth plays); TVA View opens only on request.
// The key earlier versions used to reopen it on load is cleared.
try { localStorage.removeItem(TK); } catch {}

const root = document.createElement("div");
root.id = "tva"; root.hidden = true;
document.body.appendChild(root);
const btn = document.createElement("button");
btn.id = "tvaBtn"; btn.type = "button";
document.body.appendChild(btn);

const pad = (n, w = 4) => String(n).padStart(w, "0");
const stamp = d => d ? new Date(d + "T00:00").toLocaleDateString("en-GB", {day:"2-digit", month:"short", year:"numeric"}).toUpperCase() : "UNRELEASED";
const story = u => entries(u).sort((a, b) => a.ord - b.ord);

// the ledger follows the chosen order; Narrative applies to the Sacred Timeline only
function ordered(u) {
  const all = entries(u), mode = S.mode === "narrative" && u.id !== "616" ? "story" : S.mode;
  if (mode === "release") return [...all].sort((a, b) => (a.rel || "9999").localeCompare(b.rel || "9999"));
  if (mode === "my") { const o = syncOrder(u, all); return [...all].sort((a, b) => o.indexOf(a.id) - o.indexOf(b.id)); }
  if (mode === "narrative") {
    const seq = NARRATIVE.items.filter(([r]) => r[0] !== "@").map(([t]) => all.find(e => e.id === slug(t))).filter(Boolean);
    return seq.concat(all.filter(e => !seq.includes(e)).sort((a, b) => a.ord - b.ord));
  }
  return [...all].sort((a, b) => a.ord - b.ord);
}

const EMBLEM = `<svg class="t-emblem" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 4"/><path d="M22 18h20l-8 14 8 14H22l8-14z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M27 43h10" stroke="currentColor" stroke-width="3"/></svg>`;

const PANES = [["mon", "Monitor"], ["led", "Ledger"], ["case", "Case"], ["reg", "Branches"]];
let pane = "mon";
const phone = () => matchMedia("(max-width:820px), (max-height:560px)").matches;
function setPane(p) {
  pane = p; root.dataset.pane = p;
  document.querySelectorAll("#tva .s-tabs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.pane === p));
}

function build() {
  root.innerHTML = `<div class="scr">
  <header class="s-top">
    <div class="s-brand">${EMBLEM}<div><b>TVA · Chronomonitoring terminal</b><span>Fan-made tribute · Local time: N/A</span></div></div>
    <div class="s-gauge" id="tGauge"></div>
    <div class="t-agent" id="tAgent"></div>
    <button type="button" class="s-exit" data-tact="exit">Exit TVA View</button>
  </header>
  <div class="s-cmd" role="region" aria-label="Terminal controls">
    <div class="tp-modes" id="tModes" role="group" aria-label="Order"><span>Order&gt;</span>${MODES.map(([m, l]) => `<button type="button" data-tmode="${m}">${l}</button>`).join("")}</div>
    <label class="s-q"><span>Query&gt;</span><input id="tQuery" type="search" placeholder="title_" autocomplete="off" aria-label="Search titles"></label>
    <label class="s-chk"><input type="checkbox" id="tHide"> Hide processed</label>
    <div class="s-step"><button type="button" data-step="-1" aria-label="Previous case">◀ Prev</button><button type="button" data-step="1" aria-label="Next case">Next ▶</button></div>
  </div>
  <section class="win w-mon" id="tScreen" aria-label="Chronomonitor"><h2 class="w-t">Chronomonitor 07</h2>
    <div class="crt-head" id="tHead"></div>
    <div class="crt-scroll"><svg id="tChart" viewBox="0 70 1000 225" preserveAspectRatio="xMidYMid meet" role="group" aria-label="Timeline monitor"></svg></div>
    <div class="crt-foot" id="tFoot"></div>
    <p class="crt-hint">Swipe sideways to see the whole timeline</p>
  </section>
  <section class="win w-reg" aria-label="Branch registry"><h2 class="w-t">Branch registry</h2><nav class="t-reg" id="tReg"></nav></section>
  <section class="win w-led" aria-label="Temporal ledger"><h2 class="w-t">Temporal ledger</h2><div class="lg-head" id="tLgHead"></div><ol class="lg" id="tLedger"></ol></section>
  <section class="win w-case" aria-label="Case file"><h2 class="w-t">Case file</h2><div class="t-case" id="tCase" aria-live="polite"></div></section>
  <footer class="s-status">
    <div class="t-ticker" aria-hidden="true"><div class="tk-track">${[...BULLETINS, ...BULLETINS].map(b => `<span>${esc(b)}</span>`).join("")}</div></div>
    <p class="t-legal">Unofficial fan project, not affiliated with or endorsed by Marvel Studios or The Walt Disney Company. All titles and characters are trademarks of their respective owners. Artwork from TVmaze and TMDB; everything else in this view is original.</p>
  </footer>
  <nav class="s-tabs" aria-label="Screens">${PANES.map(([p, l]) => `<button type="button" data-pane="${p}">${l}</button>`).join("")}</nav>
</div>`;
  setPane(pane);
}

function renderRegistry() {
  const groups = [["Primary record", unis().filter(u => !u.limb)], ...LIMBS.map(l => [l, unis().filter(u => u.limb === l)])].filter(([, us]) => us.length);
  let n = 0;
  $("#tReg").innerHTML = groups.map(([g, us]) => `<div class="reg-sec"><div class="reg-sector">Sector · ${esc(g)}</div>${us.map(u => {
    const [t, w] = stats(u), i = n++;
    return `<button type="button" class="drawer${u.id === S.sel ? " open" : ""}" data-u="${esc(u.id)}" aria-pressed="${u.id === S.sel}">
      <span class="dr-no">${pad(i + 1, 2)}</span><span class="dr-txt"><b>${esc(u.name)}</b><em>${esc(u.des)} · ${w}/${t}</em></span></button>`;
  }).join("")}</div>`).join("");
}

// label widths in chart units, measured once per name in the live SVG (VT323); estimated when not laid out
const labelW = new Map();
document.fonts?.ready.then(() => { labelW.clear(); layoutCache.key = null; });   // re-measure once the font is in
function labelWidths(texts) {
  const todo = texts.filter(s => !labelW.has(s));
  if (todo.length) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("class", "c-measure"); $("#tChart").appendChild(t);
    for (const s of todo) { t.textContent = s.toUpperCase(); const w = t.getComputedTextLength(); if (w) labelW.set(s, w); }
    t.remove();
  }
  return texts.map(s => Math.max(labelW.get(s) || 0, s.length * 8.4));
}

// Branches diverge above the line in 8-bit steps, like the TVA's chronomonitor plots. Each one is placed by
// search, not by a fixed rule: try rungs from the lowest up (and both directions), and take the first
// where its label touches no other branch's line or label and its lines cross no other label. Labels start
// far enough past their corner that a diagonal climbing on from the same fork passes to their left.
let layoutCache = {key:null, placed:[]};
function placeBranches(forks, Y) {
  const placed = [], wide = labelWidths(forks.map(f => "Branch · " + f.b.name));
  const inBox = (bx, px, py) => px >= bx[0] - 3 && px <= bx[2] + 3 && py >= bx[1] - 3 && py <= bx[3] + 3;
  const segHits = (bx, [x1, y1, x2, y2]) => {
    const n = Math.ceil(Math.hypot(x2 - x1, y2 - y1) / 3);
    for (let i = 0; i <= n; i++) if (inBox(bx, x1 + (x2 - x1) * i / n, y1 + (y2 - y1) * i / n)) return true;
    return false;
  };
  const boxHits = (p, q) => p[0] < q[2] + 6 && q[0] < p[2] + 6 && p[1] < q[3] + 4 && q[1] < p[3] + 4;
  const layout = (x, dir, r, w) => {
    const h = 40 + r * 34, ex = x + dir * h, lx = ex + dir * 34, end = ex + dir * (34 + w + 12);
    const box = dir > 0 ? [lx, Y - h - 26, lx + w, Y - h - 4] : [lx - w, Y - h - 26, lx, Y - h - 4];
    return {x, dir, h, ex, lx, end, box, segs:[[x, Y, ex, Y - h], [ex, Y - h, end, Y - h]], fits:Math.min(ex, end) >= 4 && Math.max(ex, end) <= 996};
  };
  const clear = L => L.fits && placed.every(o => !boxHits(L.box, o.box) && !o.segs.some(sg => segHits(L.box, sg)) && !L.segs.some(sg => segHits(o.box, sg)));
  forks.forEach(({b, x, dir}, k) => {
    let L = null;
    for (let r = 0; r < 10 && !L; r++) for (const d of [dir, -dir]) { const c = layout(x, d, r, wide[k]); if (clear(c)) { L = c; break; } }
    placed.push({b, ...(L || layout(x, dir, placed.length, wide[k]))});   // ponytail: no room at all, stack and overlap
  });
  return placed;
}

function renderMonitor(boot) {
  const u = uni(S.sel), es = story(u), n = es.length, Y = 236, X0 = 40, X1 = 960, shown = caseFor(u);
  const X = i => n <= 1 ? 500 : X0 + (X1 - X0) * i / (n - 1);
  let g = "", lastYear = null, lastLbl = -1e9;
  const forks = [];
  g += `<path class="c-line" d="M${X0 - 30} ${Y}H${X1 + 30}"/>`;
  es.forEach((e, i) => {
    const x = Math.round(X(i)), yn = yearNum(e.y);
    if (yn !== Infinity && yn !== lastYear && x - lastLbl > 58) { g += `<path class="c-tick" d="M${x} ${Y + 10}v10"/><text class="c-yr" x="${x}" y="${Y + 40}" text-anchor="middle">${yn}</text>`; lastLbl = x; }
    if (yn !== Infinity) lastYear = yn;
    if (u.id === "616") unis().filter(b => b.at === e.id).forEach(b => forks.push({b, x, dir:x > 760 ? -1 : 1}));
    g += `<g class="c-node${S.watched[e.id] ? " done" : ""}${e.id === shown ? " cur" : ""}" data-case="${esc(e.id)}" tabindex="0" role="button" aria-label="${esc(e.t)}"><rect class="c-hit" x="${x - 8}" y="${Y - 12}" width="16" height="24"/><rect x="${x - 4}" y="${Y - 4}" width="8" height="8"/></g>`;
  });
  forks.sort((p, q) => p.x - q.x);
  const key = u.id + "|" + forks.map(f => `${f.b.id}:${f.x}:${f.dir}`).join(",");
  if (layoutCache.key !== key) layoutCache = {key, placed:placeBranches(forks, Y)};   // same branches, same layout
  let labels = "";
  for (const {b, x, ex, h, lx, end, dir} of layoutCache.placed) {
    g += `<g class="c-branch" data-u="${esc(b.id)}" tabindex="0" role="button" aria-label="Open branch ${esc(b.name)}"><path d="M${x} ${Y}L${ex} ${Y - h}H${end}"/><rect x="${ex - 4}" y="${Y - h - 4}" width="8" height="8"/></g>`;
    labels += `<g class="c-branch c-lbl" data-u="${esc(b.id)}" aria-hidden="true"><text x="${lx}" y="${Y - h - 10}" text-anchor="${dir > 0 ? "start" : "end"}">Branch · ${esc(b.name)}</text></g>`;
  }
  g += labels;   // labels last, so no line is ever drawn over one
  // the monitor grows upward when the branches need more height than its default frame
  const top = Math.min(70, ...layoutCache.placed.map(o => o.box[1] - 8));
  $("#tChart").setAttribute("viewBox", `0 ${top} 1000 ${295 - top}`);
  const cur = es.find(e => e.id === shown);
  if (cur) { const x = Math.round(X(es.indexOf(cur))); g += `<path class="c-cursor" d="M${x} ${Y - 30}V${Y - 14}M${x - 6} ${Y - 20}L${x} ${Y - 14}L${x + 6} ${Y - 20}"/>`; }
  $("#tChart").innerHTML = g;
  const [t, w] = stats(u);
  const status = u.id === "616" ? "Sacred Timeline · stable" : u.fork != null ? `Branched ${u.fork} · monitoring` : "Separate reality · monitoring";
  $("#tHead").innerHTML = `<span>▮ Monitoring: ${esc(u.name)}</span><span>${esc(u.des)}</span><span>${esc(status)}</span>`;
  $("#tFoot").innerHTML = `<span>Events ${pad(t, 3)}</span><span>Processed ${pad(w, 3)}</span><span>${cur ? "Cursor: " + esc(cur.t) : "Select an event"}</span>`;
  if (boot) { const s = $("#tScreen"); s.classList.remove("boot"); void s.offsetWidth; s.classList.add("boot"); }
}

function renderGauge() {
  const u = uni(S.sel), [t, w] = stats(u);
  const ids = new Set(unis().flatMap(x => entries(x).map(e => e.id))), all = [...ids].filter(id => S.watched[id]).length;
  // 8-bit segment bar: 12 cells, filled in whole cells
  const bar = (a, b) => `<span class="gauge" aria-hidden="true"><i style="width:${b ? (a ? Math.max(1, Math.round(a / b * 12)) : 0) / 12 * 100 : 0}%"></i></span>`;
  $("#tGauge").innerHTML = `<div class="g-row"><span>Branch</span>${bar(w, t)}<b>${pad(w, 3)}/${pad(t, 3)}</b></div>
    <div class="g-row"><span>All</span>${bar(all, ids.size)}<b>${pad(all, 3)}/${pad(ids.size, 3)}</b></div>`;
  document.querySelectorAll("#tModes [data-tmode]").forEach(b => b.setAttribute("aria-pressed", b.dataset.tmode === S.mode));
  $("#tHide").checked = S.hideSeen;
}

function renderLedger() {
  const u = uni(S.sel), list = ordered(u), q = query.toLowerCase(), shown = caseFor(u), pos = new Map(list.map((e, i) => [e.id, i + 1]));
  const rows = list.filter(e => (!q || e.t.toLowerCase().includes(q)) && !(S.hideSeen && S.watched[e.id]));
  const modeName = (MODES.find(([m]) => m === (S.mode === "narrative" && u.id !== "616" ? "story" : S.mode)) || MODES[0])[1];
  $("#tLgHead").innerHTML = `<span>Temporal ledger · ${esc(u.name)}</span><span>Order: ${modeName} · ${rows.length} of ${list.length}</span>`;
  $("#tLedger").innerHTML = rows.map(e => {
    const i = pos.get(e.id), seen = S.watched[e.id];
    return `<li class="${seen ? "done" : ""}${e.id === shown ? " cur" : ""}"><button type="button" data-case="${esc(e.id)}"><span class="lg-no">${pad(i)}</span><span class="lg-t">${esc(e.t)}</span><span class="lg-y">${esc(e.y || "?")}${e.c === "e" ? " est." : ""}</span><span class="lg-r">${stamp(e.rel)}</span><span class="lg-s">${seen ? "Processed" : "Pending"}</span></button></li>`;
  }).join("") || `<li class="lg-empty">No records match this query.</li>`;
}

function renderCase() {
  const u = uni(S.sel), all = story(u);
  if (!all.length) { $("#tCase").innerHTML = `<div class="folder"><div class="paper"><p>No cases filed in this branch yet.</p></div></div>`; return; }
  const shown = caseFor(u), e = all.find(x => x.id === shown), pos = all.indexOf(e) + 1, seen = S.watched[e.id], soon = e.rel && e.rel > TODAY;
  const also = unis().filter(x => x.id !== u.id && entries(x).some(y => y.id === e.id));
  const ni = u.id === "616" ? NARRATIVE.items.findIndex(([t]) => t[0] !== "@" && slug(t) === e.id) : -1, nn = ni >= 0 ? NARRATIVE.items[ni] : null;
  const fresh = lastCase !== shown || lastUni !== u.id;
  lastCase = shown; lastUni = u.id;
  const slamNow = slam; slam = false;
  keepOpen($("#tCase"), e.id, ".pp-eps", () => $("#tCase").innerHTML = `<div class="folder${fresh ? " deliver" : ""}">
    <div class="folder-tab">Case № ${pad(pos)} / ${pad(all.length)}</div>
    <div class="paper k-${e.k}">
      <div class="pp-head"><span>Form TV-1185 · Event record</span><span>${esc(u.des)}</span></div>
      ${artImg(e.id, "pp-photo")}
      <h3 class="pp-title">${esc(e.t)}</h3>
      ${synOf(e.id) ? `<p class="pp-syn"><b>Summary</b> ${esc(synOf(e.id))}</p>` : ""}
      <dl class="pp-fields">
        <div><dt>Classification</dt><dd>${TYPE[e.k] || "Title"}</dd></div>
        <div><dt>Temporal coordinates</dt><dd>${esc(e.y || "Unknown")}${e.c === "e" ? " (est.)" : ""}</dd></div>
        <div><dt>${soon ? "Scheduled release" : "Entered record"}</dt><dd>${stamp(e.rel)}</dd></div>
        <div><dt>Position on timeline</dt><dd>${pos} of ${all.length}</dd></div>
        ${nn ? `<div><dt>Narrative order</dt><dd>#${ni + 1}${nn[1] ? " · optional" : ""}</dd></div>` : ""}
        <div><dt>Branch</dt><dd>${esc(u.name)}</dd></div>
      </dl>
      ${nn && nn[2] ? `<p class="pp-note">Advisory: ${esc(nn[2])}</p>` : ""}
      ${also.length ? `<p class="pp-also">Cross-filed under ${also.map(x => `<button type="button" class="pp-link" data-u="${esc(x.id)}">${esc(x.name)}</button>`).join(", ")}</p>` : ""}
      ${epList(e.id, "pp-eps")}
      <div class="stamp ${seen ? "ok" : "pend"}${slamNow ? " slam" : ""}">${seen ? "Processed" : "Pending review"}</div>
      <div class="pp-act"><button type="button" class="stampbtn" data-tact="stamp">${seen ? "Revoke stamp" : "Stamp as processed"}</button></div>
    </div>
  </div>`);
}

function renderAgent() {
  const name = document.querySelector("#account .acct-name")?.textContent, gbtn = document.querySelector("#account .gbtn");
  $("#tAgent").innerHTML = name ? `<span>Agent</span><b>${esc(name)}</b>` : gbtn ? `<button type="button" class="t-login" data-tact="login">Agent sign-in</button>` : `<span>Agent</span><b>Guest terminal</b>`;
}

const caseFor = u => {
  const all = story(u);
  // same title as the classic view's Up next, Films / Series filter included
  return all.some(e => e.id === detailId) ? detailId : (upNext(u, entries(u).filter(kindOk)) || all[0])?.id ?? null;
};
function render(boot) {
  if (!on) return;
  renderRegistry(); renderGauge(); renderLedger(); renderCase(); renderMonitor(boot); renderAgent();
}

function pick(id) {
  if (id === S.sel) return;
  S.sel = id; detailId = null; editing = null; confirming = null;
  try { history.replaceState(null, "", "#" + id); } catch {}
  renderPanel();          // keeps the classic view in step and saves; onRender redraws the TVA screens
  render(true);
  if (phone()) setPane("mon");
}

function openCase(id) {
  detailId = id;
  render(false);
  revealCase();
}
// keep the current row visible inside the ledger box only; the page itself never moves
function revealCase() {
  const lg = $("#tLedger"), li = lg.querySelector("li.cur");
  if (li) {
    const top = li.offsetTop - lg.offsetTop, bottom = top + li.offsetHeight;
    if (top < lg.scrollTop) lg.scrollTop = top;
    else if (bottom > lg.scrollTop + lg.clientHeight) lg.scrollTop = bottom - lg.clientHeight;
  }
}

function step(d) {
  const u = uni(S.sel), list = ordered(u), shown = caseFor(u), i = list.findIndex(e => e.id === shown);
  const next = list[Math.min(list.length - 1, Math.max(0, (i < 0 ? 0 : i) + d))];
  if (next) openCase(next.id);
}

// CRT power-off plays before the terminal is torn down; power-on plays as it appears
let closing = false;
function setOn(v) {
  if (closing) return;
  const scr = root.querySelector(".scr");
  if (!v && on && scr && !REDUCED) {
    closing = true;
    scr.classList.remove("crt-on");
    scr.classList.add("crt-off");
    setTimeout(() => { closing = false; power(false); }, 600);
    return;
  }
  power(v);
}

function power(v) {
  on = v;
  document.body.classList.toggle("tva-on", on);
  $(".app").hidden = on;
  root.hidden = !on;
  btn.textContent = on ? "Exit TVA View" : "TVA View";
  btn.setAttribute("aria-pressed", on);
  if (on) {
    const had = !!detailId;   // a title was open in the classic view: phones land on its case file
    entered = detailId; query = "";   // the search box is rebuilt empty, so the filter starts empty too
    build(); lastCase = null; render(true); revealCase(); root.querySelector(".scr").classList.add("crt-on");
    if (phone() && had) setPane("case");
  } else {
    root.innerHTML = ""; renderAll();
    // a different title was opened in the terminal: bring its card into view; otherwise leave the page be
    if (detailId && detailId !== entered) $("#detail .detail")?.scrollIntoView({block:"center"});
  }
}

btn.addEventListener("click", () => setOn(!on));
// a branch is drawn as two groups (line, then its label on top); pointing at or focusing either lights both
const heat = (e, v) => {
  const id = e.target.closest?.("#tChart .c-branch")?.dataset.u;
  if (id) document.querySelectorAll(`#tChart .c-branch[data-u="${CSS.escape(id)}"]`).forEach(g => g.classList.toggle("hot", v));
};
root.addEventListener("pointerover", e => heat(e, true));
root.addEventListener("pointerout", e => heat(e, false));
root.addEventListener("focusin", e => heat(e, true));
root.addEventListener("focusout", e => heat(e, false));
root.addEventListener("click", e => {
  const c = e.target.closest("[data-case]");
  if (c) { openCase(c.dataset.case); if (phone()) setPane("case"); return; }
  const pn = e.target.closest(".s-tabs [data-pane]");
  if (pn) { setPane(pn.dataset.pane); return; }
  const u = e.target.closest("[data-u]");
  if (u) { pick(u.dataset.u); return; }
  const m = e.target.closest("[data-tmode]");
  if (m) { S.mode = m.dataset.tmode; renderPanel(); return; }
  const s = e.target.closest("[data-step]");
  if (s) { step(+s.dataset.step); return; }
  const a = e.target.closest("[data-tact]");
  if (a?.dataset.tact === "stamp") {
    detailId = caseFor(uni(S.sel));   // stamping a case also opens it
    const id = detailId, t = entries(uni(S.sel)).find(x => x.id === id)?.t || "Case", was = !!S.watched[id];
    slam = !was;
    withUndo(was ? `Stamp revoked: “${t}”` : `Processed: “${t}”`, () => { was ? delete S.watched[id] : S.watched[id] = true; });
  }
  else if (a?.dataset.tact === "login") document.querySelector("#account .gbtn")?.click();
  else if (a?.dataset.tact === "exit") setOn(false);
});
root.addEventListener("keydown", e => {
  const g = e.target.closest("g[data-case], g[data-u]");
  if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); g.dataset.case ? openCase(g.dataset.case) : pick(g.dataset.u); }
});
let typing;
root.addEventListener("input", e => {
  if (e.target.id !== "tQuery") return;
  const v = e.target.value.trim();
  clearTimeout(typing); typing = setTimeout(() => { if (on) { query = v; renderLedger(); } }, 120);   // TVA may have closed meanwhile
});
root.addEventListener("change", e => { if (e.target.id === "tHide") { S.hideSeen = e.target.checked; renderPanel(); } });
document.addEventListener("keydown", e => {
  if (!on || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.metaKey || e.ctrlKey || e.altKey) return;
  const arrows = !!e.target.closest?.("#tLedger");   // arrows step only in the ledger, so they still scroll everywhere else
  if (e.key === "j" || (arrows && e.key === "ArrowDown")) { e.preventDefault(); step(1); }
  else if (e.key === "k" || (arrows && e.key === "ArrowUp")) { e.preventDefault(); step(-1); }
});


// redraw whenever the shared state changes (watch marks, undo, sync from another device)
window.mcuApp.onRender = () => render(false);
// the agent badge follows Google sign-in, which loads after this script
new MutationObserver(() => on && renderAgent()).observe($("#account"), {childList:true, subtree:true, characterData:true});
btn.textContent = "TVA View";
btn.setAttribute("aria-pressed", "false");
})();
