# For Sanu — 3D Birthday Experience

A cinematic, no-build birthday experience built as one continuous journey rather than a conventional webpage. This premium pass preserves the original system and story while upgrading the visual language, personal photo integration, responsive polish, motion, atmosphere, and reliability.

## The journey

1. Minimal opening: **“For the girl I somehow found twice.”**
2. Real-time 3D universe with eight memory stars.
3. Each memory opens with one of Sanu's real photographs.
4. Constellation puzzle beginning at **Panchakanya Mandir / Class 9**.
5. Cinematic portal transition into the room.
6. Procedural 3D bedroom with the original eight **Open When…** interactions.
7. Six additional photographs appear as physical prints inside the room and selected letters.
8. Cassette player for Qtuu's real voice note.
9. Scratch-card birthday object.
10. Locked letter for **September 21, 2026**.
11. Final **“I love you, Sanu.”** reveal followed by all 14 photographs as a cinematic film sequence.

## Lily signature

Lily is used as a recurring personal motif rather than a generic decoration:

- line-art bloom on the opening scene;
- subtle constellation/paper details;
- a procedural 3D lily in the bedroom;
- letter and scratch-card emboss treatments;
- a final oversized bloom in the closing scene.

The 3D lily remains the original interactive **flower** letter object, so the system behavior is unchanged.

## Run locally

No npm install or build step is required.

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Or:

```bash
npm run serve
```

Three.js is included locally in `assets/vendor/`, so the 3D experience no longer depends on jsDelivr. Google Fonts may use the network when available; normal serif/sans-serif fallbacks are already defined.

## Verify the project

```bash
npm run verify
```

The verifier checks the core interactions, local Three.js copy, original/optimized photo count, and premium visual hooks.

## Personal media

Optional audio files belong in `assets/media/`:

- `voice-note.mp3` — Qtuu's birthday voice message.
- `maya-pheri.mp3` — only a copy you have the right to use.

The experience remains usable if either file is absent and shows a graceful message instead.

## Photos

- All 14 supplied originals are preserved untouched in `photos/`.
- High-quality WebP copies used by the live experience are in `assets/photos/`.
- The original filenames do not need to be changed.

## Deploy

This package is Vercel-ready as a static site. `index.html` is the root entry point, `vercel.json` contains the deployment configuration, and no server-side runtime or build step is required. See `DEPLOY-TO-VERCEL.md` for the exact deployment steps.
