# Tarea 11 — Errores típicos de React y JSX

Los tres errores se provocaron en un **worktree aislado** (`lab09-errores`) para no afectar la rama `main`. Después de capturar cada mensaje, el cambio se revirtió y se comprobó que el árbol de trabajo quedara limpio.

## Error 1 — Usar `class` en lugar de `className`

**Archivo modificado:** `src/components/Header/Header.jsx`

**Cambio realizado:**

```jsx
// Incorrect
<header class="site-header">
```

**Mensaje exacto observado:**

```text
Invalid DOM property `class`. Did you mean `className`?
```

**Causa:** JSX no usa los nombres de atributos HTML directamente. `class` es una palabra reservada de JavaScript y React espera la propiedad `className` para aplicar clases CSS.

**Corrección:**

```jsx
// Correct
<header className="site-header">
```

**Evidencia:** mensaje registrado en la consola del navegador y en la salida de Vite.

---

## Error 2 — Devolver dos nodos raíz

**Archivo modificado:** `src/components/Header/Header.jsx`, línea 17.

**Cambio realizado:**

```jsx
// Incorrect: two sibling elements without a wrapper
return (
  <header className="site-header">...</header>
  <div className="header-extra">Extra</div>
)
```

**Mensaje exacto observado:**

```text
Internal server error: Transform failed with 1 error:

[PARSE_ERROR] Adjacent JSX elements must be wrapped in an enclosing tag.
    ╭─[ src/components/Header/Header.jsx:17:5 ]
    │
 17 │       <div className="header-extra">Extra</div>
    │         ┬
    │         ╰──
    │
    │ Help: Did you want a JSX fragment `<>...</>`?
```

Además, el navegador mostró:

```text
Failed to load resource: the server responded with a status of 500 (Internal Server Error)
```

**Causa:** un componente funcional debe devolver un único nodo raíz. Dos elementos hermanos deben envolverse en un fragmento (`<>...</>`) o en un contenedor.

**Corrección:**

```jsx
// Correct: a single root node
return (
  <>
    <header className="site-header">...</header>
    <div className="header-extra">Extra</div>
  </>
)
```

**Evidencia:** `docs/evidencias/errores/11-error-dos-nodos-raiz.png`.

---

## Error 3 — Olvidar la clave en el `map`

**Archivo modificado:** `src/components/MovieList/MovieList.jsx`

**Cambio realizado:**

```jsx
// Incorrect: missing key
{movies.map((movie) => <MovieCard movie={movie} />)}
```

**Mensaje exacto observado:**

```text
Each child in a list should have a unique "key" prop.

Check the render method of `MovieList`. See https://react.dev/link/warning-keys for more information.
```

**Causa:** React necesita una clave estable para identificar cada elemento de una lista y optimizar la reconciliación. Sin `key`, puede reutilizar nodos de forma incorrecta y muestra una advertencia.

**Corrección:**

```jsx
// Correct: stable key per movie
{movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
```

**Evidencia:** mensaje registrado en la consola del navegador y en la salida de Vite.

---

## Comprobación final

```text
git status --short
```

Sin cambios pendientes en el worktree después de revertir los tres errores. La rama `main` no fue modificada por las pruebas.
