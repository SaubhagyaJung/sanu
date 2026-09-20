# Deploy this site to Vercel

This package is prepared as a **static Vercel site**. No npm install, framework preset, environment variable, server, or build command is required.

## Easiest: Vercel Drop

1. Go to `https://vercel.com/drop` and sign in.
2. Drag this project folder or the provided ZIP onto the page.
3. Choose a project name.
4. Deploy.

`index.html` is already at the project root, so Vercel can publish it directly.

## GitHub method

1. Create a new GitHub repository.
2. Upload all files from this package so `index.html` is at the repository root.
3. In Vercel choose **Add New → Project** and import the repository.
4. Use these settings if Vercel asks:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: leave empty
   - Output Directory: leave empty
   - Install Command: leave empty
5. Deploy.

## Vercel CLI method

From the folder containing `index.html`:

```bash
npx vercel --prod
```

## Personal audio

The song is already expected at:

`assets/media/maya-pheri.mp3`

For the voice note, add your file as:

`assets/media/voice-note.mp3`

Then redeploy.

## Custom domain

After the deployment works, open the Vercel project → **Settings → Domains**, add your domain, and follow the DNS records Vercel gives you.
