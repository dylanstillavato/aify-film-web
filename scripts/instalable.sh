#!/bin/bash
# Hace instalable el editor como app de Chrome (PWA): copia pwa/ a public/app/ y
# añade al <head> de public/app/index.html el manifiesto, el icono de Apple y el
# color de la barra. Lo llama publicar-editor.sh; se puede lanzar solo y repetir.
set -euo pipefail
AQUI="$(cd "$(dirname "$0")/.." && pwd)"
INDEX="$AQUI/public/app/index.html"
cp "$AQUI"/pwa/* "$AQUI/public/app/"
grep -q 'rel="manifest"' "$INDEX" || python3 - "$INDEX" <<'PY'
import sys
p=sys.argv[1]; s=open(p,encoding='utf-8').read()
etiquetas = ('<link rel="manifest" href="./manifest.webmanifest">\n'
             '  <link rel="apple-touch-icon" href="./apple-touch-icon.png">\n'
             '  <meta name="theme-color" content="#090A0C">\n'
             '  <meta name="apple-mobile-web-app-title" content="@Film">\n  ')
s=s.replace('<title>', etiquetas + '<title>', 1)
open(p,'w',encoding='utf-8').write(s)
PY
echo "Editor instalable: manifiesto e iconos en public/app/"
