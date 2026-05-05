# WorldMonitor APK UI Responsiveness

A starter repository for building responsive UI prototypes aimed at APK-style mobile interfaces.

## What is included

- `index.html` — mobile-first responsive layout with sample app screens
- `styles.css` — responsive CSS rules and adaptive mobile breakpoints
- `script.js` — interactive sidebar and service worker registration
- `public/manifest.webmanifest` — PWA metadata for installable experience
- `public/service-worker.js` — offline asset caching for mobile usage
- `public/icons/` — app icons for installable APK-style experience
- `package.json` — dev tooling for local development and build
- `.gitignore` — standard ignores for web project artifacts

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the local dev server:
   ```bash
   npm run dev
   ```
3. Build the production bundle:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## APK / PWA packaging

This project is scaffolded as a mobile-first PWA so it can be shipped as a web app or wrapped into an APK using tools like Capacitor, PWABuilder, or Android WebView.

### Wrap as an Android APK

- Use `npm run build` to generate the static app
- Point your native wrapper to the `dist/` output
- For Capacitor, install `@capacitor/cli`, `@capacitor/core`, and `@capacitor/android` and run `npx cap add android`

## Project goals

- Demonstrate layout patterns for mobile UI responsiveness
- Provide a lightweight starting point for APK-style app screens
- Keep the scaffold simple and easy to extend

## Next steps

- Add Android XML layout examples or React Native components
- Replace static sample content with real app screens
- Add accessibility and performance optimizations
