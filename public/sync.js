// Optional Google sign-in: keeps a signed-in visitor's progress in Firestore under their own uid.
// Without a Firebase config the site works exactly as before, saving to this browser only.
import { FIREBASE } from "./firebase-config.js";

const app = window.mcuApp, box = document.getElementById("account");
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const G = `<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;

// view settings stay per device; progress and edits travel
const pick = s => ({watched:s.watched, edits:s.edits, removed:s.removed, order:s.order, cItems:s.cItems, cUnis:s.cUnis});

if (FIREBASE && app && box) start().catch(() => { box.hidden = true; });

async function start() {
  const [{ initializeApp }, A, F] = await Promise.all(["firebase-app.js", "firebase-auth.js", "firebase-firestore.js"].map(f => import(SDK + f)));
  const fb = initializeApp(FIREBASE), auth = A.getAuth(fb), db = F.getFirestore(fb);
  let ref = null, unsub = null, timer = null, confirmDel = false, status = "Synced";

  const render = () => {
    const u = auth.currentUser;
    box.hidden = false;
    box.innerHTML = !u
      ? `<button type="button" class="gbtn" data-acct="in">${G}Sign in with Google</button><span class="acct-note">Sync your progress across devices</span>`
      : `${u.photoURL ? `<img src="${esc(u.photoURL)}" alt="" referrerpolicy="no-referrer">` : ""}<span class="acct-name">${esc(u.displayName || u.email || "Signed in")}</span><span class="acct-note" aria-live="polite">${esc(status)}</span>
         ${confirmDel
           ? `<span class="acct-q">Delete your synced progress? This device keeps its copy.</span><button type="button" class="link warn" data-acct="del-yes">Delete</button><button type="button" class="link" data-acct="del-no">Keep</button>`
           : `<button type="button" class="link" data-acct="out">Sign out</button><button type="button" class="link" data-acct="del">Delete synced data</button>`}`;
  };

  async function push() {
    if (!ref) return;
    const s = app.get();
    try {
      await F.setDoc(ref, { data: JSON.stringify(pick(s)), updatedAt: s.updatedAt || Date.now() });
      status = "Synced";
    } catch { status = "Not synced, retrying on your next change"; }
    render();
  }
  app.onSave = () => { if (!ref) return; status = "Saving…"; render(); clearTimeout(timer); timer = setTimeout(push, 1200); };

  box.addEventListener("click", async e => {
    const act = e.target.closest("[data-acct]")?.dataset.acct;
    if (act === "in") {
      try { await A.signInWithPopup(auth, new A.GoogleAuthProvider()); }
      catch (err) {
        if (!/popup-closed|cancelled-popup/.test(err.code || "")) app.toast(err.code === "auth/popup-blocked" ? "Your browser blocked the sign-in window. Allow pop-ups for this site and try again." : "Sign-in didn't work. Try again in a moment.");
      }
    }
    else if (act === "out") { await A.signOut(auth); app.toast("Signed out. Your progress is still saved on this device."); }
    else if (act === "del") { confirmDel = true; render(); box.querySelector('[data-acct="del-no"]').focus(); }
    else if (act === "del-no") { confirmDel = false; render(); }
    else if (act === "del-yes") {
      confirmDel = false;
      try { await F.deleteDoc(ref); await A.signOut(auth); app.toast("Synced data deleted and signed out."); }
      catch { app.toast("Couldn't delete right now. Try again."); render(); }
    }
  });

  A.onAuthStateChanged(auth, async user => {
    unsub?.(); unsub = null; ref = null; clearTimeout(timer);
    if (!user) { render(); return; }
    status = "Syncing…"; render();
    ref = F.doc(db, "users", user.uid);
    try {
      const snap = await F.getDoc(ref), local = app.get();
      if (snap.exists()) {
        const r = snap.data(), remote = { ...JSON.parse(r.data), updatedAt: r.updatedAt };
        // the newer copy wins; watch marks from both are kept
        const base = (local.updatedAt || 0) > remote.updatedAt ? pick(local) : remote;
        app.set({ ...local, ...base, watched: { ...remote.watched, ...local.watched }, updatedAt: Math.max(local.updatedAt || 0, remote.updatedAt) });
      }
      await push();
      // live updates from the same account on other devices or tabs
      unsub = F.onSnapshot(ref, s => {
        if (s.metadata.hasPendingWrites || !s.exists()) return;
        const r = s.data();
        if (r.updatedAt > (app.get().updatedAt || 0)) { app.set({ ...app.get(), ...JSON.parse(r.data), updatedAt: r.updatedAt }); status = "Synced"; render(); }
      });
    } catch { status = "Couldn't reach sync. Progress still saves on this device."; render(); }
  });
}
