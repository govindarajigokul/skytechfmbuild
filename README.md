# Skytech FM website (recovered source)

Source code rebuilt from the production build in https://github.com/govindarajigokul/skytechfmbuild,
using the original sources embedded in its source maps (`*.js.map` / `*.css.map`).

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build -> build/
```

Docker (builds from source, serves with nginx on port 80):

```bash
docker build -t skytechfm .
docker run -p 8080:80 skytechfm
```

## SEO
- Default meta tags, Open Graph/Twitter cards and LocalBusiness JSON-LD: `public/index.html`
- Per-page title/description/keywords: `src/seo/seoConfig.js` (applied on every route change by `src/seo/Seo.js`)
- `public/sitemap.xml` and `public/robots.txt` — add new pages to the sitemap when you add routes.

## Recovery notes
- All files under `src/` (components, pages, css, App.js, index.js) are the original source, verbatim.
- Images under `src/assets/` were matched back to their original paths from the hashed files in `static/media/`.
  `assets/slides/1.png` was ambiguous (no longer used by the live bundle) and was set to the same image as `assets/icon/*/1.png`.
- `assets/land6.jpg`, `assets/land8.jpg`, `assets/9.jpg` are only referenced in commented-out CSS and were not in the build.
- `package.json` was reconstructed; versions are inferred from the bundle (React 18.3.1, React Router 6.30, MUI v6).
- `public/index.html` is the built page with injected bundle tags removed.
