# Hosting — GitHub Pages compatibility & limitations

This is a **static** site: Vite builds it to `dist/` (HTML + JS + CSS + images), there is no backend,
and all navigation is in-page anchor scrolling (`#about`, `#projects`, …). That makes it a clean fit for
GitHub Pages, and it is **already deployed there** via a GitHub Actions workflow.

## Current setup (works as-is)
- **Deploy**: `.github/workflows/deploy.yml` builds (`npm ci && npm run build`) and publishes `dist/` to
  GitHub Pages on every push to `main`. (`package.json`'s `npm run deploy` / `gh-pages` is a redundant manual fallback — you don't need both.)
- **URL**: `https://dimitrijeit.github.io/personal_cv/`
- **Base path**: `vite.config.ts` sets `base: '/personal_cv/'` so every asset is served under `/personal_cv/`.
- **`.nojekyll`** is present in `public/`, so GitHub serves the files as-is (no Jekyll processing).
- **HTTPS** is automatic and free.

## Limitations to weigh before deciding where to host

1. **No backend / no server code — this is the only limitation likely to matter.**
   - The contact section uses a `mailto:` link, which works fine on GitHub Pages.
   - If you want a **real contact form** (visitor types a message and it's submitted/stored/emailed), GitHub Pages
     can't do that alone. You'd need a third-party form service — **Formspree**, **Getform**, **Basin**, or
     **EmailJS** (client-side) — or a host that provides serverless functions (see below).
   - Likewise, **analytics** would need a third-party script (e.g. Plausible, GoatCounter, Google Analytics);
     there are no server logs to read.

2. **Base-path coupling.** `base: '/personal_cv/'` must match the repo name. If you:
   - **rename the repo** → update `base` to the new `'/new-name/'` and rebuild, or assets 404;
   - **use `dimitrijeit.github.io`** (a user/root site) or a **custom domain** → set `base: '/'` and rebuild;
   - **add a custom domain** (e.g. `dimitrije.dev`) → add a DNS CNAME to `dimitrijeit.github.io` and a `CNAME`
     file in `public/`. Custom domains are free and supported.

3. **Public repo required** for free GitHub Pages (Pages on private repos needs a paid plan).

4. **Soft limits** (all far from binding for a CV — the built site is ~1.6 MB): repo ≤ ~1 GB, file ≤ 100 MB,
   ~100 GB/month bandwidth, ~10 builds/hour.

5. **Google Fonts is an external dependency** (loaded from `fonts.googleapis.com`). It works on any host but adds
   third-party requests (latency + a privacy consideration). Self-hosting the two fonts is optional and removes that.

## If/when you outgrow GitHub Pages
For this static site the alternatives below add **no advantage** unless you need a backend. Their main unlocks:

| Host | What it adds over GitHub Pages |
|------|--------------------------------|
| **Netlify** | Built-in form handling (no third party) + serverless functions; root URLs (no `/personal_cv/`); redirects/headers. |
| **Vercel** | Serverless/edge functions; root URLs; fast Git-based deploys. |
| **Cloudflare Pages** | Cloudflare Workers for functions; large global CDN; root URLs. |

**Recommendation:** stay on GitHub Pages unless you decide you want a submitting contact form or a clean root URL.
The cheapest path to a contact form *without* leaving GitHub Pages is to drop in **Formspree/EmailJS** — a few lines,
no host change.
