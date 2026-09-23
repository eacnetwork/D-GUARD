# D-Guard on Netlify

This repository is ready to import into Netlify.

## Import settings

Netlify should detect `netlify.toml` automatically. If it asks for values, use:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `20`

After importing, every push to `main` will trigger a new deployment.

## Local verification

```bash
npm install
npm run build
npm run preview
```

The project is a static Vite build. No server, API key, or environment variable is required for the landing page.
