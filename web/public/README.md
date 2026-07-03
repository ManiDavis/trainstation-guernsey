# Static site assets (`web/public/`)

Files here are served from the site root (e.g. `web/public/logo.png` → `/logo.png`).

The site prefers images managed in Sanity, but falls back to these baked-in
files so the brand mark and hero always render — even if the CMS isn't
connected yet. Keep these in place as the safety net.

| File            | Used by                        | Notes                                  |
|-----------------|--------------------------------|----------------------------------------|
| `logo.png`      | Navbar + Footer (`navLogo`)    | The TrainStation roundel. **Add this.** |
| `gym-hero.jpg`  | Hero background (`heroImage`)  | Gym interior photo. **Add this.**       |
| `favicon.svg`   | Browser tab icon               | Provided.                              |

To override any of these live without a redeploy, upload the image into the
matching field in Sanity Studio (`navLogo` / `heroImage`) and publish.
