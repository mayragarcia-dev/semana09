# Cine Aurora — Cartelera con React + Vite

Aplicación de una sola página que muestra la cartelera de un cine. El proyecto es acumulativo: parte del **Laboratorio 09** y añade los conceptos del **Laboratorio 10 — Componentes y eventos** del curso **Desarrollo de Aplicaciones Empresariales** (sección 4-C24-A).

## Funciones del Laboratorio 10

- **`Button` reutilizable** con contenido por `children` y variantes por `variant`.
- **Favoritas con `useState`** en `App`; la tarjeta avisa al padre mediante una función.
- **`MovieSearch` controlado** con `value` y `onChange`.
- **Búsqueda con retardo de 300 ms** para no filtrar en cada pulsación.
- **Filtrado por título o sinopsis**, sin distinguir mayúsculas ni tildes.
- **Estado vacío** cuando ninguna película coincide.
- **Persistencia de favoritas** en `localStorage` con la clave `cine-aurora:favorites`.

## Tecnologías

- React 19
- Vite 8
- JavaScript (JSX)
- CSS por responsabilidad
- Oxlint

## Requisitos

- Node.js 20 o superior
- npm

## Scripts

```bash
npm install       # instala dependencias
npm run dev       # inicia el servidor de desarrollo
npm run build     # genera la build de producción
npm run preview   # sirve la build de producción
npm run lint      # ejecuta Oxlint
```

## Estructura

```text
semana09/
├── docs/
│   └── evidencias/
│       └── lab10/               # capturas y verificaciones del Laboratorio 10
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── EmptyState/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MovieCard/
│   │   ├── MovieList/
│   │   └── MovieSearch/
│   ├── data/
│   │   └── movies.js
│   ├── hooks/
│   │   └── useDebouncedValue.js
│   ├── styles/
│   ├── utils/
│   │   └── favoritesStorage.js
│   ├── App.jsx
│   └── main.jsx
├── ENTREGABLE.md
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

## Dónde vive el estado

| Dato | Componente | Persistencia |
|---|---|---|
| `favorites` | `App` | `localStorage` |
| `searchTerm` | `App` | No |
| `debouncedSearchTerm` | `App`, con `useDebouncedValue` | No |
| `filteredMovies` | `MovieList`, derivado con `useMemo` | No |
| `isFavorite` | `MovieCard`, derivado de `favorites` | No |

La explicación completa está en [`ENTREGABLE.md`](ENTREGABLE.md#73-dónde-vive-cada-dato-y-por-qué--punto-11).

## Documentación de la entrega

- [`ENTREGABLE.md`](ENTREGABLE.md): explicación, código, capturas, casos de prueba y autoevaluación.
- [`docs/evidencias/lab10/07-debounce-consola.md`](docs/evidencias/lab10/07-debounce-consola.md): registro real del retardo del buscador.
- [`docs/evidencias/lab10/verificacion-playwright.json`](docs/evidencias/lab10/verificacion-playwright.json): verificación de búsqueda, estado vacío y persistencia.
- [`docs/evidencias/lab10/verificacion-extra.json`](docs/evidencias/lab10/verificacion-extra.json): búsqueda por sinopsis, tildes, limpieza y almacenamiento inválido.

## Autor

Michael Montgomery Rosell — 4-C24-A

## Repositorio

https://github.com/mayragarcia-dev/semana09.git
