import Header from './components/Header.jsx'

export default function App() {
  return (
    <div className="page-shell" id="inicio">
      <Header />
      <main>
        <section className="hero" id="cartelera">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> TU CINE, TU LUGAR</p>
            <h1>Historias que<br /><em>se sienten.</em></h1>
            <p className="hero-description">Una pantalla enorme. Un momento solo tuyo.<br />Encuentra tu próxima película favorita.</p>
            <a className="hero-link" href="#peliculas">Descubre la cartelera <span>↓</span></a>
          </div>
          <div className="hero-art" role="img" aria-label="Una sala de cine iluminada por la pantalla">
            <div className="screen-glow" />
            <div className="screen-frame"><span>LA MAGIA<br />COMIENZA<br /><i>AQUÍ</i></span></div>
            <div className="seat seat-one" /><div className="seat seat-two" /><div className="seat seat-three" />
            <span className="art-caption">SALA 01 <b>·</b> EXPERIENCIA PREMIUM</span>
          </div>
          <div className="hero-index"><span>01</span><i /> UNA NUEVA FORMA DE VER CINE</div>
        </section>
      </main>
    </div>
  )
}
