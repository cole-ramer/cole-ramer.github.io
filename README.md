# cole-ramer.github.io

My personal website — a small, static, editorial-leaning index of work & field notes.

**Live:** https://cole-ramer.github.io

## Stack

- Plain HTML / CSS / JS — no build step.
- [Tailwind CSS](https://tailwindcss.com) via the Play CDN for utility styling.
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (utility).
- Deployed on **GitHub Pages** from the `main` branch.

## Local preview

Open `index.html` in a browser, or serve it:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Files

| File         | Purpose                                                         |
| ------------ | --------------------------------------------------------------- |
| `index.html` | Markup + Tailwind config + font loading.                        |
| `style.css`  | Custom styles (grain overlay, reveals, editorial hover states). |
| `main.js`    | Live clock, scroll reveals, and a soft cursor accent.           |
| `.nojekyll`  | Tells GitHub Pages to skip Jekyll processing.                   |

## Deployment

GitHub Pages is configured to build from the `main` branch root. Pushing to `main` deploys automatically.
