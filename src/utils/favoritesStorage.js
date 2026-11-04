const STORAGE_KEY = 'cine-aurora:favorites'

export function loadFavorites() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []

    return parsed.filter((id) => typeof id === 'string')
  } catch {
    return []
  }
}

export function saveFavorites(favorites) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  } catch {
    // Storage can be unavailable (private mode or quota); keep working in memory.
  }
}
