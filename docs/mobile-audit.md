# Mobile compatibility audit

## Scope

The existing experience, content, photos, Three.js world, puzzle flow, letters, scratch card, audio hooks, and finale were preserved. The work focused on making the same experience usable and visually balanced across phones, tablets, and desktop without redesigning the product.

## Problems found

1. The original portrait camera kept the desktop field of view, which cropped horizontally distributed galaxy memories and bedroom objects on tall phones.
2. Several 3D targets were visually small enough to be frustrating on touch screens.
3. Memory panels and modals could inherit desktop minimum heights or fixed interaction areas that exceeded short mobile viewports.
4. Safe-area insets were not consistently accounted for around the HUD and bottom controls.
5. The constellation puzzle used a large minimum height that could crowd small phones.
6. Long letters relied on desktop-oriented modal sizing rather than guaranteed viewport-contained scrolling.
7. The cover composition and HUD needed additional narrow-phone and short-landscape tuning.
8. Desktop hover affordances were still present on coarse-pointer devices.
9. Mobile rendering used the same upper pixel-ratio budget as desktop, increasing GPU load unnecessarily.

## Fixes applied

- Added portrait-aware Three.js camera FOV and camera distance adjustments.
- Added larger invisible star hit targets and dedicated touch zones for small room objects.
- Added coarse-pointer instructions and 44px touch-control targets.
- Added iPhone/edge-to-edge safe-area handling.
- Added viewport-contained scrolling for memories, puzzle, letters, and scratch card.
- Added specific layouts for <=720px, <=430px, <=360px, and short phone landscape.
- Added `vh` fallbacks alongside `dvh` rules.
- Hid hover-only tooltip behavior on coarse pointers.
- Reduced WebGL pixel-ratio ceiling for portrait devices while retaining desktop quality.
- Preserved the original desktop composition and behavior.

## Validation

The static project verifier passes and JavaScript syntax validation passes. Responsive component geometry was stress-tested at 320×568, 360×640, 390×844, 430×932, 667×375, 844×390, 768×1024, and 1440×900. The previously failing short-landscape memory panel was separately re-tested after the final fix and remains contained within the viewport.
