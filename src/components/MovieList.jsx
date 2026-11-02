import MovieCard from './MovieCard.jsx'
import '../styles/movie-list.css'

export default function MovieList({ movies }) {
  return (
    <section className="movie-list-section" id="peliculas" aria-labelledby="movies-title">
      <div className="movie-list-section__intro">
        <div>
          <p className="movie-list-section__eyebrow">EN CARTELERA</p>
          <h2 id="movies-title">Elige tu próxima historia.</h2>
        </div>
        <p className="movie-list-section__note">Ocho películas. Una sala para cada emoción.</p>
      </div>
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </section>
  )
}
