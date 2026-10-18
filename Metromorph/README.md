# Metromorph - APK and Mac builds

1. Create a new GitHub repository and upload everything in this folder (keep `.github/workflows`).
2. Open the repo's **Actions** tab. The "Build apps" workflow runs on every push (or press "Run workflow").
3. When the run is green, open it and download the artifacts at the bottom:
   - `Metromorph-android-apk` -> `app-debug.apk`. Copy to the phone, open it, allow "install unknown apps".
   - `Metromorph-mac` -> `.dmg` / `.zip`. Drag the app to Applications.

The Mac app is unsigned: the first time, right-click it -> Open -> Open (or System Settings -> Privacy & Security -> Open Anyway).
The APK is a debug build signed with a debug key: fine for installing on your own devices, not for Google Play.

To update the app, replace `www/index.html` with a newer export and push.

iOS needs Xcode, a Mac and an Apple Developer account for signing, so it is not included.
To try locally on a Mac: `npm install && npm run electron`.
