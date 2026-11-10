# MCU Timeline Sandbox

Live at **https://sacredtimeline.web.app**

Every Marvel film and series on one tree (Yggdrasil): 24 universes in Marvel's official story order, with watch tracking, search (Ctrl/Cmd K) and your own branches. Static site: plain HTML, CSS and JavaScript, no build step, no analytics or ads. Every visitor's browser loads the fonts from Google Fonts and the optional sign-in's scripts from Google (Firebase); nothing about a visitor is stored anywhere unless they sign in. Progress is saved in the visitor's browser; signing in with Google (optional) also syncs it through Firebase, where `firestore.rules` lets each user read and write only their own record.

Layout: `public/` is the site (deployed to Firebase Hosting with `firebase deploy`), `docs/` redirects the old GitHub Pages link. Run locally: `python -m http.server` inside `public/`. The data tools in `tools/` need Python 3 with Pillow (`pip install -r tools/requirements.txt`).

Daily refresh: `.github/workflows/refresh.yml` runs `tools/build_upcoming.py` and `tools/build_watch.py` every morning (07:00 IST) and deploys Hosting when the result differs from the live site. It deploys the code on `main`, so push every live change to `main`. It needs the repository secret `TMDB_TOKEN` and a keyless Google sign-in (Workload Identity Federation) set up once from Google Cloud Shell:

```bash
P=mcu-yggdrasil-tk; N=1082620807275; SA=site-refresh@$P.iam.gserviceaccount.com
gcloud config set project $P
gcloud services enable iamcredentials.googleapis.com sts.googleapis.com
gcloud iam workload-identity-pools create github --location=global --display-name="GitHub Actions"
gcloud iam workload-identity-pools providers create-oidc mcu-timeline --location=global --workload-identity-pool=github   --issuer-uri=https://token.actions.githubusercontent.com   --attribute-mapping="google.subject=assertion.sub,attribute.repository_id=assertion.repository_id"   --attribute-condition="assertion.repository_id=='1420160179' && assertion.repository_owner_id=='144296237' && assertion.ref=='refs/heads/main' && assertion.workflow_ref.startsWith('TanishkKamra/mcu-timeline/.github/workflows/refresh.yml@')"
gcloud iam service-accounts create site-refresh --display-name="Daily data refresh (GitHub Actions)"
gcloud projects add-iam-policy-binding $P --member=serviceAccount:$SA --role=roles/firebasehosting.admin --condition=None
gcloud iam service-accounts add-iam-policy-binding $SA --role=roles/iam.workloadIdentityUser   --member="principalSet://iam.googleapis.com/projects/$N/locations/global/workloadIdentityPools/github/attribute.repository_id/1420160179"
```

Unofficial fan project. Not affiliated with or endorsed by Marvel Studios or The Walt Disney Company. All titles and characters are trademarks of their respective owners.

## License

Code: all rights reserved, see [LICENSE](LICENSE). Artwork and Marvel names are not covered and belong to their owners.󠁻󠁴󠁫󠁰󠀭󠁥󠁣󠁢󠀳󠀶󠁤󠀸󠁥󠁦󠁦󠀭󠀷󠀱󠀴󠀸󠀵󠁢󠁽
