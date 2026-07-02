# LangStitch SDK — Documentation site

Static documentation for the **LangStitch multi-language SDK**. Python ships on PyPI as `langstitch-sdk`; Spring AI (Java), Go, and Rust runtimes share the same project structure and canvas export format.

- **Live:** https://sdk.langstitch.com
- **Python package:** https://pypi.org/project/langstitch-sdk/
- **Product:** https://langstitch.com
- **LangTailor IDE:** https://langtailor.langstitch.com

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | SDK docs — language targets, Python install, quickstart, concepts, guides, reference |
| `sdk-docs.css` | Docs layout, language grid, components (theme inlined) |
| `sdk-docs.js` | Sidebar scrollspy, copy buttons, mobile nav |
| `assets/js/seo.js` | Meta tags + JSON-LD (multi-language SDK, FAQ) |
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
