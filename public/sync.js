// Optional Google sign-in: keeps a signed-in visitor's progress in Firestore under their own uid.
// Without a Firebase config the site works exactly as before, saving to this browser only.
//
// The cloud copy and this device's copy merge entry by entry (state.js), so nothing is lost when two
// devices or tabs change different titles. Writes only start once the first read has succeeded, so a
// failed read can never overwrite the cloud copy, and a read that fails is retried until it works.
import { FIREBASE } from "./firebase-config.js";

const app = window.mcuApp, box = document.getElementById("account");
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
const UID_KEY = "mcu-sync-uid";      // where older versions kept the account this browser's progress belongs to (now in the saved state)
const MAX_CHARS = 240000, MAX_BYTES = 900000;   // under the database rule (250,000) and Firestore's 1 MiB per document
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const G = `<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
const store = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} };
const stored = k => { try { return localStorage.getItem(k); } catch { return null; } };

if (FIREBASE && app && box) start().catch(() => { box.hidden = true; });

async function start() {
  const [{ initializeApp }, A, F] = await Promise.all(["firebase-app.js", "firebase-auth.js", "firebase-firestore.js"].map(f => import(SDK + f)));
  const fb = initializeApp(FIREBASE), auth = A.getAuth(fb), db = F.getFirestore(fb);
  let ref = null, unsub = null, timer = null, retry = null, armed = false, loading = false, gen = 0, wait = 2000, lastSent = null;
  let confirmDel = false, status = "Synced";

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
  const say = s => { status = s; render(); };
  const OFFLINE = "Offline. Progress saves on this device and syncs when you're back online.";

  // stop everything for the current account: pending write, retry, live listener, and any read still in flight
  const stop = () => { unsub?.(); unsub = null; clearTimeout(timer); clearTimeout(retry); armed = false; loading = false; ref = null; gen++; lastSent = null; };

  async function push() {
    clearTimeout(timer);
    if (!ref || !armed) return;
    const data = JSON.stringify(app.synced()), g = gen;
    if (data === lastSent) return say("Synced");
    if (data.length > MAX_CHARS || new TextEncoder().encode(data).length > MAX_BYTES)
      return say("Too much to sync. Your progress still saves on this device.");
    if (!navigator.onLine) return say(OFFLINE);   // the "online" listener sends it when the connection is back
    try {
      // updatedAt is only a record of when; merging uses the per-entry stamps inside data
      await F.setDoc(ref, { data, updatedAt: Date.now() });
      if (g === gen) { lastSent = data; say("Synced"); }
    } catch (err) {
      if (g !== gen) return;
      if (err?.code === "permission-denied") return say("Sync was refused. Check this device's date and time, then make any change to try again.");
      say("Not synced yet, retrying…");
      timer = setTimeout(push, 15000);
    }
  }
  app.onSave = () => {
    if (!ref) return;
    if (!armed) return say("Saved on this device. Syncing when the connection is back…");   // goes up with the first successful read
    say(navigator.onLine ? "Saving…" : OFFLINE);
    clearTimeout(timer); timer = setTimeout(push, 1200);
  };

  // read the cloud copy, merge it in, then start writing and listening. Retries with backoff until it works.
  async function load() {
    if (loading) return;                           // one read at a time (the retry timer and "online" can both ask)
    const g = gen;
    clearTimeout(retry); loading = true;
    say("Syncing…");
    try {
      const snap = await F.getDoc(ref);
      if (g !== gen) return;                       // signed out or switched account meanwhile
      let ahead = Object.keys(app.synced().stamps).length > 0;   // no cloud copy yet: create one only if there's progress
      if (snap.exists()) {
        const raw = snap.data().data;
        let r = null; try { r = JSON.parse(raw); } catch {}
        if (r) { ahead = app.merge(r); lastSent = raw; } else ahead = true;   // a damaged copy is replaced by this device's
      }
      armed = true; wait = 2000;
      // live updates from the same account on other devices; attached only once the first read worked
      unsub = F.onSnapshot(ref, s => {
        if (g !== gen || s.metadata.hasPendingWrites || !s.exists()) return;
        const raw = s.data().data;
        let r; try { r = JSON.parse(raw); } catch { return; }
        if (raw === lastSent) return;
        if (app.merge(r)) push(); else { lastSent = raw; say("Synced"); }
      }, () => { if (g === gen) { unsub = null; armed = false; retry = setTimeout(load, wait); } });
      if (ahead) await push(); else say("Synced");   // nothing new here: no write
    } catch {
      if (g !== gen) return;
      say(navigator.onLine ? "Couldn't reach sync. Progress still saves on this device; retrying…" : OFFLINE);
      retry = setTimeout(load, wait); wait = Math.min(wait * 2, 60000);
    } finally { if (g === gen) loading = false; }
  }
  addEventListener("online", () => { if (!ref) return; if (armed) push(); else load(); });
  // the tab is being closed or hidden: send a change still waiting for its debounce now
  addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && armed && timer) push(); });

  box.addEventListener("click", async e => {
    const act = e.target.closest("[data-acct]")?.dataset.acct;
    if (act === "in") {
      try { await A.signInWithPopup(auth, new A.GoogleAuthProvider()); }
      catch (err) {
        if (!/popup-closed|cancelled-popup/.test(err.code || "")) app.toast(err.code === "auth/popup-blocked" ? "Your browser blocked the sign-in window. Allow pop-ups for this site and try again." : err.code === "auth/unauthorized-domain" ? "Sign-in isn't enabled for this address yet (auth/unauthorized-domain)." : `Sign-in didn't work (${err.code || err.message}). Try again in a moment.`);
      }
    }
    else if (act === "out") {
      if (armed && timer) await Promise.race([push(), new Promise(r => setTimeout(r, 3000))]);   // send a pending change first
      await A.signOut(auth); app.toast("Signed out. Your progress is still saved on this device.");
    }
    else if (act === "del") { confirmDel = true; render(); box.querySelector('[data-acct="del-no"]').focus(); }
    else if (act === "del-no") { confirmDel = false; render(); }
    else if (act === "del-yes") {
      confirmDel = false;
      if (!navigator.onLine) { render(); return app.toast("You're offline. Connect, then delete your synced data."); }
      say("Deleting…");
      const r = ref;
      stop();                                       // no pending write may recreate the copy after it's deleted
      try { await F.deleteDoc(r); await A.signOut(auth); app.toast("Synced data deleted and signed out."); }
      catch { app.toast("Couldn't delete right now. Try again."); if (auth.currentUser) { ref = r; load(); } }
    }
  });

  A.onAuthStateChanged(auth, user => {
    stop();
    if (!user) return render();
    // this browser's progress belongs to the account that last signed in here (kept in the saved state, so every
    // tab and a browser that can't store anything agree); a different account starts from its own cloud copy
    if (app.claim(user.uid, stored(UID_KEY))) app.toast("Signed in to a different account. Showing that account's progress.");
    store(UID_KEY, null);
    ref = F.doc(db, "users", user.uid);
    load();
  });
}
