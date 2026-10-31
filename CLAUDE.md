# @Film (web)

Landing de @Film en `/` y el editor en `/app/`, en film.useaify.app. Es de la familia Aify (@Social, @Pictures, @Film, @Gen).

- **Landing:** React + Vite, sin servidor (`src/componentes/Landing.jsx`). Mismos colores que Aify (`src/index.css`), con el violeta de @Film (`--accent-violet`).
- **Editor:** el fork de FilmCraft (dylanstillavato/aify-film) compilado en `public/app/`. No se edita a mano: se regenera con `scripts/publicar-editor.sh`, que compila el fork y añade la PWA (`pwa/`, `scripts/instalable.sh`).
- **Plan y encargos:** `aify-social/docs/aify-film/plan.md`.
- Comprobar: `npm run build` y `npm run lint` (oxlint).
- Textos en español, sin emojis. Los cambios de marca o de landing se enseñan antes de mergear.
