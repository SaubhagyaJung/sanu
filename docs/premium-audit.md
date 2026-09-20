# Premium refinement audit

## What was preserved

The underlying experience has not been replaced or restructured into a different product. The existing cover, galaxy, eight memories, constellation puzzle, portal, bedroom, eight Open When letters, voice-note object, scratch card, future letter, and finale remain the same journey and retain their original story content and interaction logic.

## Main issues found in the supplied version

- The `photos/` folder contained 14 meaningful personal images, but none were integrated into the experience.
- The room's flower was represented by a simple sphere rather than something personal to Sanu.
- The visual styling was competent but still felt like a first-pass web treatment in several places: generic glass cards, limited editorial hierarchy, little photographic storytelling, and no recurring personal motif.
- Three.js was loaded from a CDN, creating an unnecessary network dependency for the core 3D experience.
- The CSS targeted `#root` instead of the actual `#app` mount in its full-height reset.
- There was no graceful WebGL visual fallback.
- Modal/panel interactions had limited keyboard/accessibility polish.

## Premium pass completed

### Personal photo storytelling

All 14 supplied photographs are now used:

- photos 01–08: one photograph for each galaxy memory;
- photos 09–14: physical photo prints in the 3D bedroom;
- photos 09–14: selected Open When letters also carry a tucked-in print;
- all 14: final cinematic film sequence;
- selected photographs also appear on the opening composition.

The originals remain untouched. Optimized WebP derivatives are stored separately in `public/photos/`.

### Lily system

A restrained lily motif now runs through the full experience. The 3D room's original `flower` hotspot is now a procedural lily while keeping the same letter behavior. Matching line-art lilies appear as quiet details on the cover, constellation, paper letters, scratch card, portal, and finale.

### UI/UX quality

- rebuilt opening composition around asymmetrical editorial photography;
- more precise typography scale, spacing, hairlines, and contrast;
- slower and less generic motion language;
- improved star/nebula atmosphere without altering navigation;
- photograph “developing” transition on memory panels;
- editorial two-column memory layout on desktop, responsive stacked layout on mobile;
- refined paper/print material treatments;
- finale converted from plain text-only ending into a complete photo resolution;
- tooltip clamping so labels do not run off-screen;
- Escape-to-close behavior for overlays;
- improved focus-visible states and dialog labels;
- reduced-motion support retained;
- WebGL visual fallback added.

### Reliability

- Three.js is served locally from `public/vendor/three.module.js`;
- project stays no-build/static-host friendly;
- verification script added at `scripts/verify.py`;
- project documentation updated to match the actual finished build.

## Mobile compatibility pass

The experience now has a dedicated mobile-quality pass rather than relying on the original single breakpoint.

- portrait-aware Three.js camera framing keeps the galaxy memories and bedroom interaction area in view on tall phones;
- larger invisible hit targets improve touch accuracy without changing the visual design;
- small desk objects receive dedicated touch zones;
- safe-area insets protect controls on notched iPhones and other edge-to-edge devices;
- cover typography, photo staging, HUD positions, progress UI, room hints, and finale scale fluidly for narrow screens;
- memory panels stack and scroll within the viewport instead of overflowing;
- constellation, letter, locked-letter, and scratch-card modals use viewport-constrained internal scrolling;
- 320px-wide portrait phones receive an additional compact treatment;
- short landscape phones receive a separate layout so headings, controls, puzzles, and letters remain usable;
- coarse-pointer devices get 44px minimum interactive controls and mobile-specific interaction instructions;
- mobile WebGL resolution is capped more aggressively to improve rendering performance while preserving desktop quality;
- `vh` fallbacks accompany dynamic viewport (`dvh`) sizing for broader mobile-browser compatibility.

Responsive layout geometry was stress-tested at 320×568, 360×640, 390×844, 430×932, 667×375, 844×390, 768×1024, and 1440×900 viewport sizes.
