import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'

const featuredMovie = {
  title: 'Duna: Parte Dos',
  image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=85',
  rating: '8.6',
  classification: 'PG-13',
  duration: '2h 46m',
  synopsis: 'Paul Atreides se une a Chani y a los fremen en un viaje de venganza y destino por el desierto de Arrakis.',
}

export default function App() {
  return (
    <div className="page-shell" id="inicio">
      <Header />
      <main>
        <Hero movie={featuredMovie} />
      </main>
    </div>
  )
}
