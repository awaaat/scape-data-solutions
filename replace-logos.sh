#!/usr/bin/env bash
set -euo pipefail

SITE="$HOME/Scape_Data/scape-data-solutions"
DL="$HOME/Downloads"
NEW_SVG="$DL/logo-scape-technologies.svg"
NEW_PNG="$DL/logo-scape-technologies.png"

TARGET_PNG="$SITE/public/Images/site-images/logo-image.png"
TARGET_SVG="$SITE/public/Images/site-images/logo.svg"

[ -f "$NEW_SVG" ]    || { echo "Missing: $NEW_SVG"; exit 1; }
[ -f "$TARGET_PNG" ] || { echo "Missing: $TARGET_PNG"; exit 1; }
[ -f "$TARGET_SVG" ] || { echo "Missing: $TARGET_SVG"; exit 1; }

# The full-version PNG isn't in Downloads, so render it from the SVG if possible
if [ ! -f "$NEW_PNG" ]; then
  echo "PNG not found in $DL, rendering from the SVG..."
  if   command -v rsvg-convert >/dev/null 2>&1; then rsvg-convert -w 1120 "$NEW_SVG" -o "$NEW_PNG"
  elif command -v inkscape     >/dev/null 2>&1; then inkscape "$NEW_SVG" -w 1120 -o "$NEW_PNG"
  elif command -v magick       >/dev/null 2>&1; then magick -density 384 "$NEW_SVG" -resize 1120x "$NEW_PNG"
  elif command -v convert      >/dev/null 2>&1; then convert -density 384 "$NEW_SVG" -resize 1120x "$NEW_PNG"
  else
    echo "No SVG renderer found. Download logo-scape-technologies.png into $DL and re-run."
    exit 1
  fi
fi

# Backup the current logos before touching anything
BACKUP="$SITE/logo-backup-$(date +%Y%m%d-%H%M%S).tgz"
tar czf "$BACKUP" -C "$SITE" public/Images/site-images/logo-image.png public/Images/site-images/logo.svg
echo "Backup saved: $BACKUP"

cp "$NEW_PNG" "$TARGET_PNG"
cp "$NEW_SVG" "$TARGET_SVG"

# Site copy of the SVG: drop the white box and trim the empty padding
sed -i \
  -e '/<rect width="280" height="100" fill="#ffffff"\/>/d' \
  -e 's|viewBox="0 0 280 100" width="560" height="200"|viewBox="42 14 197 65" width="394" height="130"|' \
  "$TARGET_SVG"

echo "Replaced:"
ls -la "$TARGET_PNG" "$TARGET_SVG"
echo
head -3 "$TARGET_SVG"
