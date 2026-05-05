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

### Wrap as an Android APK with Capacitor

1. Install dependencies:
   ```bash
   npm install
   ```
2. Initialize Capacitor if needed:
   ```bash
   npx cap init com.worldmonitor.apkui "WorldMonitor APK UI" --web-dir=dist
   ```
3. Add the Android platform:
   ```bash
   npx cap add android
   ```
4. Build the web app and sync assets:
   ```bash
   npm run build && npm run cap:sync
   ```
5. Open the Android project in Android Studio:
   ```bash
   npm run cap:open
   ```

### Loading WorldMonitor.app

The app includes a direct link for opening `https://worldmonitor.app/`.
- On the web, this will open in a new browser tab.
- In a Capacitor-built APK, it will open inside the native browser experience.

### Build and deploy

- Use `npm run build` to generate the production-ready static app in `dist/`
- Use `npm run cap:sync` after building to copy assets into the native Android wrapper
- Use `npm run cap:open` to launch Android Studio for APK generation

## Project goals

- Demonstrate layout patterns for mobile UI responsiveness
- Provide a lightweight starting point for APK-style app screens
- Keep the scaffold simple and easy to extend

## Next steps

- Add Android XML layout examples or React Native components
- Replace static sample content with real app screens
- Add accessibility and performance optimizations
