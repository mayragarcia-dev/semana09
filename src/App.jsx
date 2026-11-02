import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import MovieList from './components/MovieList.jsx'
import { movies } from './data/movies.js'

export default function App() {
  return (
    <div className="page-shell" id="inicio">
      <Header />
      <main>
        <Hero movie={movies[0]} />
        <MovieList movies={movies} />
      </main>
      <Footer />
    </div>
  )
}
