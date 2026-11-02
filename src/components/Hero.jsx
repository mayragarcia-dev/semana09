import '../styles/hero-banner.css'

export default function Hero({ movie }) {
  if (!movie) return null

  return (
    <section className="featured-hero" aria-labelledby="featured-title">
      <img className="featured-hero__image" src={movie.image} alt={`Escena destacada de ${movie.title}`} />
      <div className="featured-hero__shade" />
      <div className="featured-hero__content">
        <p className="featured-hero__eyebrow">DESTACADA DE LA SEMANA</p>
        <h1 id="featured-title">{movie.title}</h1>
        <p className="featured-hero__meta">{movie.rating} ★ <span>·</span> {movie.classification} <span>·</span> {movie.duration}</p>
        <p className="featured-hero__synopsis">{movie.synopsis}</p>
        <a className="featured-hero__button" href="#peliculas">Ver horarios <span aria-hidden="true">↗</span></a>
      </div>
      <span className="featured-hero__index">CINE AURORA <b>—</b> 01 / 08</span>
    </section>
  )
}
