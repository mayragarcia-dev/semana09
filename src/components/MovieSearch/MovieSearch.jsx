import Button from '../Button/Button.jsx'
import '../../styles/movie-search.css'

export default function MovieSearch({ value, onChange, onSubmit }) {
  return (
    <form className="movie-search" role="search" onSubmit={onSubmit}>
      <label className="movie-search__label" htmlFor="movie-search-input">
        Busca tu película
      </label>
      <div className="movie-search__controls">
        <input
          id="movie-search-input"
          className="movie-search__input"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Título o sinopsis"
          autoComplete="off"
        />
        <Button type="submit" variant="primary">
          Ver resultados
        </Button>
      </div>
    </form>
  )
}
