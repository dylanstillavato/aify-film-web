const BLOQUES = [
  {
    titulo: 'Editor',
    texto: 'Timeline con pistas, cortes, velocidad, color, audio y subtítulos. Exporta en 9:16 para Instagram y TikTok.',
  },
  {
    titulo: 'Tu IA',
    texto: 'Deja indicaciones como «gancho: 0:12» o «corta los silencios» y tu propio Claude monta el vídeo con los comandos del editor.',
  },
  {
    titulo: 'Programar en @Social',
    texto: 'Del timeline al calendario de tu cliente sin descargar nada. Elige día y hora, escribe el copy y listo.',
  },
]

// Dibujo de un montaje: notas a mano sobre la timeline y el reel en 9:16.
function DibujoMontaje() {
  return (
    <svg className="landing-dibujo" viewBox="0 0 520 300" role="img" aria-label="Timeline con notas a mano y el reel vertical que sale de ella">
      <defs>
        <marker id="punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--text-primary)" />
        </marker>
      </defs>
      <rect x="1" y="1" width="518" height="298" rx="18" fill="var(--bg-card)" stroke="var(--border-color)" />
      <text x="30" y="58" className="landing-mano">gancho: 0:12</text>
      <text x="150" y="104" className="landing-mano landing-mano-roja">corta el silencio</text>
      <rect x="28" y="130" width="300" height="30" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)" />
      <rect x="32" y="134" width="70" height="22" rx="4" fill="var(--accent-violet)" />
      <rect x="106" y="134" width="52" height="22" rx="4" fill="var(--accent-violet)" opacity="0.75" />
      <rect x="162" y="134" width="20" height="22" rx="4" fill="#E5484D" opacity="0.6" />
      <rect x="186" y="134" width="96" height="22" rx="4" fill="var(--accent-violet)" />
      <rect x="28" y="168" width="300" height="22" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)" />
      <rect x="32" y="172" width="120" height="14" rx="4" fill="var(--accent-lime)" />
      <rect x="186" y="172" width="80" height="14" rx="4" fill="var(--accent-lime)" />
      <rect x="28" y="198" width="300" height="22" rx="6" fill="var(--bg-secondary)" stroke="var(--border-color)" />
      <path d="M34 209 q 8 -8 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0" fill="none" stroke="var(--verde)" strokeWidth="2" />
      <rect x="168" y="122" width="2" height="104" fill="#E5484D" />
      <path d="M95 64 C 100 90, 75 110, 68 128" fill="none" stroke="var(--text-primary)" strokeWidth="2" markerEnd="url(#punta)" />
      <path d="M200 112 C 196 118, 180 122, 174 128" fill="none" stroke="var(--text-primary)" strokeWidth="2" markerEnd="url(#punta)" />
      <path d="M332 170 C 360 170, 372 160, 384 150" fill="none" stroke="var(--text-primary)" strokeWidth="2" markerEnd="url(#punta)" />
      <rect x="392" y="30" width="100" height="178" rx="14" fill="var(--text-primary)" />
      <rect x="398" y="36" width="88" height="166" rx="10" fill="var(--accent-violet)" />
      <rect x="410" y="150" width="64" height="12" rx="6" fill="var(--bg-card)" />
      <rect x="418" y="168" width="48" height="12" rx="6" fill="var(--accent-lime)" />
      <circle cx="442" cy="96" r="22" fill="var(--bg-card)" opacity="0.9" />
      <path d="M436 85 L452 96 L436 107 z" fill="var(--accent-violet)" />
      <rect x="330" y="236" width="160" height="38" rx="19" fill="var(--text-primary)" />
      <text x="410" y="260" textAnchor="middle" className="landing-boton-svg">Programar en @Social</text>
    </svg>
  )
}

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-barra">
        <a className="barra-marca" href="/"><img className="landing-marca" src="/marca/arroba-film-claro.svg" alt="@Film" /></a>
        <nav className="landing-nav">
          <a className="landing-enlace" href="https://pictures.useaify.app">@Pictures</a>
          <a className="landing-enlace landing-abrir" href="/app/">Abrir el editor</a>
        </nav>
      </header>

      <section className="landing-hero">
        <div className="landing-hero-texto">
          <p className="landing-etiqueta">Gratis. En tu navegador.</p>
          <h1>El editor de vídeo gratis para gestores de redes</h1>
          <p className="landing-sub">
            Monta tus reels en el navegador con timeline, subtítulos y color. Deja tus indicaciones y tu propio Claude hace los cortes. Luego, prográmalos en @Social.
          </p>
          <a className="landing-boton-azul" href="/app/">Abrir el editor</a>
        </div>
        <DibujoMontaje />
      </section>

      <section className="landing-bloques">
        {BLOQUES.map(b => (
          <article key={b.titulo} className="landing-bloque">
            <h2>{b.titulo}</h2>
            <p>{b.texto}</p>
          </article>
        ))}
      </section>

      <section className="landing-instalar">
        <div className="landing-instalar-texto">
          <p className="landing-etiqueta">Como una app de verdad</p>
          <h2>Instálalo en tu ordenador desde Chrome</h2>
          <p className="landing-sub">
            @Film se instala como una app más: con su icono en el Dock o en el escritorio, en su propia ventana y sin pestañas. Sin descargas ni instaladores.
          </p>
          <ol className="landing-pasos">
            <li><strong>Abre el editor</strong> en Chrome o Edge.</li>
            <li>Pulsa el icono de <strong>Instalar</strong> que aparece a la derecha de la barra de direcciones (o en el menú, <strong>Guardar y compartir → Instalar página como app</strong>).</li>
            <li>Listo: lo encuentras en tus aplicaciones con la <strong>F</strong> de @Film. En Safari, <strong>Archivo → Añadir al Dock</strong>.</li>
          </ol>
          <a className="landing-boton-azul" href="/app/">Abrir el editor e instalarlo</a>
        </div>
        <div className="landing-dock" aria-hidden="true">
          <div className="landing-dock-ventana">
            <span /><span /><span />
            <p>@Film</p>
          </div>
          <div className="landing-dock-barra">
            <div className="landing-dock-app landing-dock-gris" />
            <div className="landing-dock-app landing-dock-gris" />
            <img className="landing-dock-app" src="/app/icono-512.png" alt="" />
            <div className="landing-dock-app landing-dock-gris" />
          </div>
        </div>
      </section>

      <section className="landing-promesa">
        <h2>Gratis. En tu navegador. Tus vídeos no salen de tu ordenador.</h2>
        <p>Sin tarjeta y sin instaladores: se abre en el navegador o se instala como app. La IA es la tuya: tu Claude, con tu plan.</p>
        <a className="landing-boton-azul" href="/app/">Abrir el editor</a>
      </section>

      <footer className="landing-pie">
        @Film es de <a href="https://www.useaify.app">Aify</a>, el CRM para gestores de redes. Basado en <a href="https://github.com/storytold/filmcraft">FilmCraft</a>.
      </footer>
    </div>
  )
}
