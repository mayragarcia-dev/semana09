# Guía de capturas — puntos 7 al 11

Esta guía indica **dónde** tomar cada captura y **qué debe verse**. Las capturas ya generadas están en `docs/evidencias/lab10/`, pero si el docente pide capturas propias, sigue esta lista.

## Preparación

```powershell
cd "C:\Users\User\Documents\Default Project\semana09"
npm run dev
```

Abre la URL que muestre Vite, normalmente:

```text
http://localhost:5173/
```

En VS Code activa los números de línea y abre la terminal integrada. En el navegador abre `F12` → `Console`.

---

## Punto 7 — Retardo del buscador

### Captura 7.1 — Código del hook

| Campo | Valor |
|---|---|
| Archivo | `src/hooks/useDebouncedValue.js` |
| Líneas | 1–15 |
| Qué debe verse | `useState`, `useEffect`, `setTimeout`, `clearTimeout` y el retorno de `debouncedValue` |

### Captura 7.2 — Código del registro en consola

| Campo | Valor |
|---|---|
| Archivo | `src/App.jsx` |
| Líneas | 27–32 |
| Qué debe verse | `console.log('[search] keystroke:', value)` y `setSearchTerm(value)` |

También puedes capturar `src/components/MovieList/MovieList.jsx`, líneas 30–34, donde aparece:

```js
console.log(`[filter] applied for "${searchTerm}" → ${filteredMovies.length} result(s)`)
```

### Captura 7.3 — Consola del navegador

| Campo | Valor |
|---|---|
| Lugar | Navegador, `F12` → `Console` |
| Acción | Escribe `duna` despacio, letra por letra, en el buscador del banner |
| Qué debe verse | Varios mensajes `[search] keystroke: d`, `du`, `dun`, `duna` y **un solo** `[filter] applied for "duna" → 1 result(s)` después de ~300 ms |

> La captura debe demostrar la diferencia: un log por tecla, pero un solo filtro aplicado.

**Evidencia generada:** `docs/evidencias/lab10/07-debounce-consola.md`.

---

## Punto 8 — Filtrado y estado vacío

### Captura 8.1 — Código del filtro

| Campo | Valor |
|---|---|
| Archivo | `src/components/MovieList/MovieList.jsx` |
| Líneas | 6–28 |
| Qué debe verse | `normalize`, `useMemo`, `movies.filter` y la búsqueda en `title` y `synopsis` |

### Captura 8.2 — Código del estado vacío

| Campo | Valor |
|---|---|
| Archivo | `src/components/MovieList/MovieList.jsx` |
| Líneas | 36–65 |
| Qué debe verse | `hasResults`, el `map` de `MovieCard` y `<EmptyState query={...} onClear={...} />` |

### Captura 8.3 — Resultado de búsqueda

| Campo | Valor |
|---|---|
| Lugar | Navegador |
| Acción | Escribe `duna` en el buscador |
| Qué debe verse | Solo la tarjeta de **Duna: Parte Dos** y el texto “1 de 8 películas” |

**Evidencia generada:** `docs/evidencias/lab10/02-busqueda-duna.png`.

### Captura 8.4 — Estado vacío

| Campo | Valor |
|---|---|
| Lugar | Navegador |
| Acción | Escribe `zzz` en el buscador |
| Qué debe verse | “SIN RESULTADOS”, “No encontramos “zzz””, el texto de ayuda y el botón “Limpiar búsqueda” |

**Evidencia generada:** `docs/evidencias/lab10/03-estado-vacio.png`.

---

## Punto 9 — Buscador en el banner

### Captura 9.1 — Código del Hero

| Campo | Valor |
|---|---|
| Archivo | `src/components/Hero/Hero.jsx` |
| Líneas | 1–31 |
| Qué debe verse | `MovieSearch` dentro de `featured-hero__content`, con `value`, `onChange` y `onSubmit` |

### Captura 9.2 — Código del buscador controlado

| Campo | Valor |
|---|---|
| Archivo | `src/components/MovieSearch/MovieSearch.jsx` |
| Líneas | 1–26 |
| Qué debe verse | `<input value={value} onChange={...}>` y el `Button` “Ver resultados” |

### Captura 9.3 — Buscador en el banner

| Campo | Valor |
|---|---|
| Lugar | Navegador, parte superior de la página |
| Qué debe verse | El campo “BUSCA TU PELÍCULA” dentro del hero, el botón “Ver resultados” y el botón “Ver horarios” |

**Evidencia generada:** `docs/evidencias/lab10/01-home-desktop.png`.

---

## Punto 10 — Persistencia de favoritas

### Captura 10.1 — Código del estado y la persistencia

| Campo | Valor |
|---|---|
| Archivo | `src/App.jsx` |
| Líneas | 1–25 |
| Qué debe verse | `useState(loadFavorites)`, `useEffect(() => saveFavorites(favorites), [favorites])` y `toggleFavorite` |

### Captura 10.2 — Código del almacenamiento

| Campo | Valor |
|---|---|
| Archivo | `src/utils/favoritesStorage.js` |
| Líneas | 1–23 |
| Qué debe verse | `STORAGE_KEY = 'cine-aurora:favorites'`, `loadFavorites`, `saveFavorites`, `try/catch` y la validación del arreglo |

### Captura 10.3 — Favoritas antes de recargar

| Campo | Valor |
|---|---|
| Lugar | Navegador |
| Acción | Marca 3 películas con el botón “Favorita” |
| Qué debe verse | Los botones cambian a “★ En favoritas” en las 3 tarjetas |

**Evidencia generada:** `docs/evidencias/lab10/04-favoritos-antes-recarga.png`.

### Captura 10.4 — Favoritas después de recargar

| Campo | Valor |
|---|---|
| Lugar | Navegador |
| Acción | Recarga con `F5` o `Ctrl + R` |
| Qué debe verse | Las mismas 3 tarjetas siguen marcadas como “★ En favoritas” |

**Evidencia generada:** `docs/evidencias/lab10/05-favoritos-despues-recarga.png`.

### Captura 10.5 — `localStorage` en DevTools

| Campo | Valor |
|---|---|
| Lugar | Navegador, `F12` → `Application` → `Local Storage` |
| Qué debe verse | La clave `cine-aurora:favorites` con un arreglo JSON de ids, por ejemplo `["duna-parte-dos","oppenheimer","poor-things"]` |

---

## Punto 11 — Documentación de estados y captura del estado vacío

### Captura 11.1 — Tabla de decisiones de estado

| Campo | Valor |
|---|---|
| Archivo | `ENTREGABLE.md` |
| Sección | `7.3. Dónde vive cada dato y por qué — punto 11` |
| Qué debe verse | La tabla con `favorites`, `searchTerm`, `debouncedSearchTerm`, `filteredMovies` e `isFavorite`, y la columna “Por qué se decidió así” |

### Captura 11.2 — Estado vacío

| Campo | Valor |
|---|---|
| Lugar | Navegador |
| Acción | Busca `zzz` |
| Qué debe verse | El estado vacío completo con el botón “Limpiar búsqueda” |

**Evidencia generada:** `docs/evidencias/lab10/03-estado-vacio.png`.

### Captura 11.3 — Entregable renderizado

| Campo | Valor |
|---|---|
| Lugar | GitHub o vista previa de `ENTREGABLE.md` en VS Code |
| Qué debe verse | Título del Laboratorio 10, tabla de estado, capturas y casos de prueba |

---

## Resumen de nombres de archivo

```text
docs/evidencias/lab10/
├── 01-home-desktop.png
├── 02-busqueda-duna.png
├── 03-estado-vacio.png
├── 04-favoritos-antes-recarga.png
├── 05-favoritos-despues-recarga.png
├── 06-home-mobile.png
├── 07-busqueda-duna-tecleo.png
├── 07-debounce-consola.md
├── 08-estructura-lab10.png
├── verificacion-playwright.json
├── verificacion-extra.json
└── verificacion-final.json
```

## Consejos

- Captura solo la ventana de VS Code o del navegador, no todo el escritorio.
- Asegúrate de que se vea la ruta del archivo y los números de línea.
- Para la consola, usa `F12` y filtra por `[search]` o `[filter]` si hay mucho ruido.
- Después de capturar los errores o estados, vuelve a dejar la aplicación en su estado normal.
