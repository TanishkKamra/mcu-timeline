# MCU Timeline Sandbox

Live at **https://sacredtimeline.web.app**

Every Marvel film and series on one tree (Yggdrasil): 24 universes in Marvel's official story order, with watch tracking, search (Ctrl/Cmd K) and your own branches. Static site: plain HTML, CSS and JavaScript, no build step, no analytics or ads. Every visitor's browser loads the fonts from Google Fonts and the optional sign-in's scripts from Google (Firebase); nothing about a visitor is stored anywhere unless they sign in. Progress is saved in the visitor's browser; signing in with Google (optional) also syncs it through Firebase, where `firestore.rules` lets each user read and write only their own record.

Layout: `public/` is the site (deployed to Firebase Hosting with `firebase deploy`), `docs/` redirects the old GitHub Pages link. Run locally: `python -m http.server` inside `public/`. The data tools in `tools/` need Python 3 with Pillow (`pip install -r tools/requirements.txt`).

Unofficial fan project. Not affiliated with or endorsed by Marvel Studios or The Walt Disney Company. All titles and characters are trademarks of their respective owners.

## License

Code: MIT, see [LICENSE](LICENSE). Artwork and Marvel names are not covered and belong to their owners.
