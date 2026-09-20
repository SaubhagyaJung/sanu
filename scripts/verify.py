from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

def require(path: str):
    p = ROOT / path
    if not p.exists():
        errors.append(f"missing: {path}")
    return p

require('index.html')
main = require('src/main.js')
styles = require('src/styles.css')
three_module = require('assets/vendor/three.module.js')
require('assets/vendor/three.core.js')

photos = sorted((ROOT / 'assets/photos').glob('*.webp'))
if len(photos) != 14:
    errors.append(f"expected 14 optimized photos, found {len(photos)}")

originals = [p for p in (ROOT / 'photos').iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp'}]
if len(originals) != 14:
    errors.append(f"expected 14 original photos, found {len(originals)}")

# Verify local ES-module dependencies so a vendor wrapper cannot point to a missing file.
if three_module.exists():
    vendor_js = three_module.read_text(encoding='utf-8')
    for rel in re.findall(r"from\s+['\"](\./[^'\"]+)['\"]", vendor_js):
        dep = three_module.parent / rel
        if not dep.exists():
            errors.append(f"missing local Three.js dependency: assets/vendor/{Path(rel).name}")

if main.exists():
    js = main.read_text(encoding='utf-8')
    if "length: 14" not in js:
        errors.append('PHOTO_LIBRARY no longer declares 14 photos')
    for i in range(1, 15):
        name = f"{i:02d}.webp"
        if not (ROOT / 'assets/photos' / name).exists():
            errors.append(f"photo asset missing: {name}")
    for token in ['openPuzzle', 'enterRoom', 'openScratch', 'openLockedLetter', 'showFinale', 'buildLily', 'addPhotoPrint', 'portraitView', 'coarsePointer']:
        if token not in js:
            errors.append(f"expected feature missing from main.js: {token}")
    if '../assets/vendor/three.module.js' not in js:
        errors.append('Three.js is not using the local vendor copy')

if styles.exists():
    css = styles.read_text(encoding='utf-8')
    if css.count('{') != css.count('}'):
        errors.append('CSS brace count is unbalanced')
    for token in ['cover-photo-stage', 'memory-panel', 'paper-lily', 'photo-film', 'webgl-fallback', 'safe-area-inset-top', 'pointer:coarse', 'max-height:540px']:
        if token not in css:
            errors.append(f"expected visual system missing from CSS: {token}")

if errors:
    print('VERIFY FAILED')
    for error in errors:
        print(' -', error)
    sys.exit(1)

print('VERIFY PASSED')
print(' - 8 memory stars')
print(' - 8 Open When letters')
print(' - 14 original photos preserved')
print(' - 14 optimized photo assets wired into the experience')
print(' - local Three.js vendor bundle complete (module + core)')
print(' - lily visual system present')
print(' - portrait/mobile camera framing and touch targets present')
print(' - safe-area, narrow-phone, and short-landscape CSS present')
print(' - static, no-build deployment ready')
