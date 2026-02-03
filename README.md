# ImJustBored.com

A single-page web app that serves random, lightweight “experiences” on demand: facts, micro-challenges, generators (compliments, prophecies, excuses), and small interactions like a coin flip or click game. Each visit draws from a shuffled deck so users see every experience once before any repeat.

**Live site:** [imjustbored.com](https://imjustbored.com)

## Tech

- **Frontend:** React 19, TypeScript, Vite  
- **Styling:** Plain CSS (mobile-first)  
- **Hosting:** GitHub Pages (static build, GitHub Actions)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. The project is configured for deployment to GitHub Pages via the repository’s Actions workflow.
