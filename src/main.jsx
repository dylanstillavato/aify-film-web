import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './componentes/Landing.jsx'

// / → la landing. El editor (fork de FilmCraft) es un sitio estático aparte en public/app/
// (scripts/publicar-editor.sh) y Vercel lo sirve en /app/.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
