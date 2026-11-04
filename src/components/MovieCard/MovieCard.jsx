import Button from '../Button/Button.jsx'
import '../../styles/movie-card.css'

export default function MovieCard({ movie, isFavorite = false, onToggleFavorite }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster-wrap">
        <img className="movie-card__poster" src={movie.image} alt={`Póster de ${movie.title}`} loading="lazy" />
        <span className="movie-card__classification">{movie.classification}</span>
      </div>
      <div className="movie-card__body">
        <div className="movie-card__heading">
          <h3>{movie.title}</h3>
          <span className="movie-card__rating" aria-label={`Valoración ${movie.rating} de 10`}>★ {movie.rating}</span>
        </div>
        <div className="movie-card__footer">
          <div className="movie-card__times" aria-label="Horarios disponibles">
            {movie.schedules.map((time) => <span className="movie-card__time" key={`${movie.id}-${time}`}>{time}</span>)}
          </div>
          <Button
            className="movie-card__favorite"
            variant={isFavorite ? 'favoriteActive' : 'favorite'}
            size="sm"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(movie.id)}
          >
            <span aria-hidden="true">{isFavorite ? '★' : '☆'}</span>
            {isFavorite ? 'En favoritas' : 'Favorita'}
          </Button>
        </div>
      </div>
    </article>
  )
}
