# LangStitch SDK — Documentation site

Static documentation for the **LangStitch Python SDK** (`langstitch-sdk` on PyPI).

- **Live:** https://sdk.langstitch.com
- **Package:** https://pypi.org/project/langstitch-sdk/
- **Product:** https://langstitch.com

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | SDK docs (install, quickstart, concepts, guides, reference) |
| `sdk-theme.css` | Design tokens (LangTailor site personality, sky-blue SDK accent) |
| `sdk-docs.css` | Docs layout and components |
| `sdk-docs.js` | Sidebar scrollspy, copy buttons, mobile nav |
| `assets/brand-logo.svg` | SDK favicon / nav logo |

Deployed to GitHub Pages and Hostinger on every push to `main`.

## Hostinger deploy

Configure these GitHub Actions secrets on **this repo** (`langstitch-sdk-site`):

| Secret | Value |
|--------|--------|
| `FTP_SERVER` | `217.21.84.75` (no `ftp://` prefix) |
| `FTP_USERNAME` | `u743467360.sdkdeveloper` |
| `FTP_PASSWORD` | FTP password for that account |

FTP account is scoped to the sdk.langstitch.com docroot — deploy target is `./`.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```
