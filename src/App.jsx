import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import MovieList from './components/MovieList/MovieList.jsx'
import { movies } from './data/movies.js'
import { useDebouncedValue } from './hooks/useDebouncedValue.js'
import { loadFavorites, saveFavorites } from './utils/favoritesStorage.js'

export default function App() {
  const [favorites, setFavorites] = useState(loadFavorites)
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300)

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  const toggleFavorite = (movieId) => {
    setFavorites((current) =>
      current.includes(movieId)
        ? current.filter((id) => id !== movieId)
        : [...current, movieId],
    )
  }

  const handleSearchChange = (value) => {
    if (import.meta.env.DEV) {
      console.log('[search] keystroke:', value)
    }
    setSearchTerm(value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    document.getElementById('peliculas')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClearSearch = () => {
    setSearchTerm('')
  }

  return (
    <div className="page-shell" id="inicio">
      <Header />
      <main>
        <Hero
          movie={movies[0]}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <MovieList
          movies={movies}
          searchTerm={debouncedSearchTerm}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClearSearch={handleClearSearch}
        />
      </main>
      <Footer />
    </div>
  )
}
