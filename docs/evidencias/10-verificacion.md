# Tarea 10 — Composición y verificación de la cartelera

## Datos del entorno

| Elemento | Valor |
|---|---|
| Sistema operativo | Windows 10/11 |
| Node.js | v24.15.0 |
| npm | 11.12.1 |
| Vite | 8.3.5 |
| React | 19.3.1 |
| Navegador de verificación | Chromium integrado de OpenCode |

## Comandos ejecutados

```bash
npm install
npm run lint
npm run build
npm run dev -- --host 127.0.0.1
```

## Resultado de la verificación

| Comprobación | Resultado |
|---|---|
| `npm install` | 24 paquetes instalados, 0 vulnerabilidades |
| `npm run lint` | Sin errores ni advertencias |
| `npm run build` | Compilación correcta: 27 módulos transformados |
| Servidor de desarrollo | Activo en `http://127.0.0.1:5174/` (el puerto 5173 estaba ocupado) |
| Título del documento | `Cine Aurora — Cartelera` |
| Película destacada | `Duna: Parte Dos` |
| Tarjetas renderizadas | 8 |
| Primera tarjeta | `Duna: Parte Dos`, horarios `13:30`, `17:00`, `20:30` |
| Footer | Presente con dirección, teléfono, correo y horarios |
| Consola del navegador | Sin errores ni advertencias |

## Estructura de componentes verificada

```text
App
├── Header
├── main
│   ├── Hero          ← recibe movies[0] por props
│   └── MovieList     ← recibe movies por props
│       └── MovieCard ← recibe movie por props y usa key={movie.id}
└── Footer
```

## Verificación de la rúbrica

| Criterio | Evidencia |
|---|---|
| 1. Proyecto React + Vite funcionando | `npm run dev` y `npm run build` exitosos; sin errores de consola |
| 2. Componentes funcionales y composición | `Header`, `Footer`, `Hero`, `MovieCard` y `MovieList` con una responsabilidad cada uno, compuestos en `App.jsx` |
| 3. Props padre → hijo | `App → MovieList → MovieCard` y `App → Hero`; los hijos no importan los datos directamente |
| 4. Repositorio y observaciones | `ENTREGABLE.md`, `README.md`, capturas y casos de prueba en `docs/evidencias/` |

## Capturas

- `docs/evidencias/10-resultado-desktop.png`: página completa.
- `docs/evidencias/10-hero-desktop.png`: vista inicial del hero.
