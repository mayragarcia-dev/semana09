import Button from '../Button/Button.jsx'
import '../../styles/empty-state.css'

export default function EmptyState({ query, onClear }) {
  return (
    <div className="empty-state" role="status">
      <p className="empty-state__eyebrow">SIN RESULTADOS</p>
      <h3>No encontramos “{query}”</h3>
      <p className="empty-state__text">
        Prueba con otro título o revisa la ortografía.
      </p>
      <Button variant="ghost" onClick={onClear}>
        Limpiar búsqueda
      </Button>
    </div>
  )
}
