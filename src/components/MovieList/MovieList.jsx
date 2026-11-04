import { useEffect, useMemo } from 'react'
import MovieCard from '../MovieCard/MovieCard.jsx'
import EmptyState from '../EmptyState/EmptyState.jsx'
import '../../styles/movie-list.css'

const normalize = (text) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

export default function MovieList({
  movies,
  searchTerm = '',
  favorites = [],
  onToggleFavorite,
  onClearSearch,
}) {
  const filteredMovies = useMemo(() => {
    const query = normalize(searchTerm.trim())
    if (!query) return movies

    return movies.filter((movie) => {
      const title = normalize(movie.title)
      const synopsis = normalize(movie.synopsis)
      return title.includes(query) || synopsis.includes(query)
    })
  }, [movies, searchTerm])

  useEffect(() => {
    if (import.meta.env.DEV && searchTerm) {
      console.log(`[filter] applied for "${searchTerm}" → ${filteredMovies.length} result(s)`)
    }
  }, [searchTerm, filteredMovies.length])

  const hasResults = filteredMovies.length > 0
  const hasQuery = searchTerm.trim().length > 0

  return (
    <section className="movie-list-section" id="peliculas" aria-labelledby="movies-title">
      <div className="movie-list-section__intro">
        <div>
          <p className="movie-list-section__eyebrow">EN CARTELERA</p>
          <h2 id="movies-title">Elige tu próxima historia.</h2>
        </div>
        <p className="movie-list-section__note" aria-live="polite">
          {hasQuery
            ? `${filteredMovies.length} de ${movies.length} películas`
            : 'Ocho películas. Una sala para cada emoción.'}
        </p>
      </div>
      {hasResults ? (
        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              isFavorite={favorites.includes(movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <EmptyState query={searchTerm.trim()} onClear={onClearSearch} />
      )}
    </section>
  )
}
