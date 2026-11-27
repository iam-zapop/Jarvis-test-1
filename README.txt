JARVIS · Alto K10 dashboard (installable web app)

Why host it?  The street map, weather, in-app directions and Google Drive sync all need
internet access that the preview link blocks. Hosted over HTTPS they all work.

Install on your Android tablet/phone
1. Upload this whole folder to a free HTTPS static host, e.g.
   - Netlify Drop: app.netlify.com/drop (drag the folder in)
   - GitHub Pages or Cloudflare Pages
2. Open the https link in Chrome on the tablet.
3. Chrome menu (three dots) -> Install app / Add to Home screen.
   It opens full screen with its own icon; visited map areas and your songs work offline.

Move data between two devices
- Setup -> Sync: Export backup (choose Google Drive in the share sheet), then on the other
  device tap Import backup and pick the file. Tick "Include songs" to carry the music too.
- Optional Google Drive auto-sync: create a free OAuth Web Client ID in Google Cloud Console
  (enable the Drive API, add your hosted URL as an authorised JavaScript origin) and paste it in Setup.

Optional APK: paste your hosted link into pwabuilder.com and choose Android.
Map data (c) OpenStreetMap contributors. Weather by Open-Meteo.
