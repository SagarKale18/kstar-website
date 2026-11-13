# K-Star Plastic Industries website
React + Vite + Tailwind CSS v4 + React Router.

## Run locally
    npm install
    npm run dev

## Replace placeholders (search "CONFIRM" and "Ask us" in src/data.js)
Email, WhatsApp number, Maps pin, product dimensions, and real product photos in public/images/.

## Quote form
Without a key the form opens WhatsApp with the details. For email delivery, get a free key at web3forms.com and set `VITE_WEB3FORMS_KEY` (Render: Environment tab, then redeploy).

## Deploy on Render
Push to GitHub, then Render > New > Static Site (or Blueprint, it reads render.yaml).
Build: `npm ci && npm run build`  Publish: `dist`  Rewrite: `/*` -> `/index.html`
