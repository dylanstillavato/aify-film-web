#!/bin/bash
# Compila el editor (fork de FilmCraft, ~/Desktop/aify-film-editor) para web y lo copia en
# public/app/, que Vercel sirve en film.useaify.app/app/. Luego: commit y PR como siempre.
#   scripts/publicar-editor.sh                  compila y copia
#   scripts/publicar-editor.sh --sin-compilar   solo empaqueta lo ya compilado
set -euo pipefail
EDITOR="${AIFY_FILM_EDITOR:-$HOME/Desktop/aify-film-editor}"
AQUI="$(cd "$(dirname "$0")/.." && pwd)"
if [[ "${1:-}" == "--sin-compilar" ]]; then
  "$EDITOR/packaging/web/package.sh" --skip-build
else
  "$EDITOR/packaging/web/package.sh"
fi
ZIP="$(ls -t "$EDITOR"/dist/release/filmcraft-web-*.zip 2>/dev/null | head -1)"
[[ -n "$ZIP" ]] || ZIP="$(ls -t "$EDITOR"/dist/filmcraft-web-*.zip | head -1)"
TMP="$(mktemp -d)"
unzip -q "$ZIP" -d "$TMP"
rm -rf "$AQUI/public/app"
mkdir -p "$AQUI/public/app"
cp -R "$TMP"/filmcraft-web-*/. "$AQUI/public/app/"
rm -f "$AQUI/public/app/_headers" "$AQUI/public/app/.htaccess"   # en Vercel van en vercel.json
# App instalable (PWA): manifiesto, iconos de la F y etiquetas en el <head> del editor
"$AQUI/scripts/instalable.sh"
echo "Editor copiado en public/app/ desde $(basename "$ZIP") ($(git -C "$EDITOR" rev-parse --short HEAD))"
du -sh "$AQUI/public/app"
