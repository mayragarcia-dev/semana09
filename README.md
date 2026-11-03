# Cine Aurora — Cartelera con React + Vite

Aplicación de una sola página que muestra la cartelera de un cine. El proyecto fue desarrollado para el **Laboratorio 09 — ReactJS** del curso **Desarrollo de Aplicaciones Empresariales** (sección 4-C24-A).

## Descripción

La interfaz se compone de:

- **Header:** nombre del cine y navegación principal.
- **Hero:** banner de la película destacada de la semana.
- **MovieList:** grilla con las ocho películas en cartelera.
- **MovieCard:** tarjeta con imagen, título, clasificación, valoración y horarios.
- **Footer:** dirección, teléfono, correo y horarios de atención.

Los datos de las películas viven en `src/data/movies.js` y se distribuyen a los componentes mediante props.

## Tecnologías

- React 19
- Vite 8
- JavaScript (JSX)
- CSS modular por responsabilidad
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
│   └── evidencias/          # capturas, casos de prueba y registro de errores
├── src/
│   ├── components/          # una carpeta por componente
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MovieCard/
│   │   └── MovieList/
│   ├── data/
│   │   └── movies.js        # cartelera de ocho películas
│   ├── styles/              # tokens, base y estilos por componente
│   ├── App.jsx              # composición principal
│   └── main.jsx             # punto de entrada
├── ENTREGABLE.md            # documento de entrega del laboratorio
├── index.html
├── package.json
└── vite.config.js
```

## Documentación de la entrega

- [`ENTREGABLE.md`](ENTREGABLE.md): explicación, código, capturas, casos de prueba y autoevaluación.
- [`docs/evidencias/10-verificacion.md`](docs/evidencias/10-verificacion.md): verificación del entorno y del render.
- [`docs/evidencias/10-casos-prueba.md`](docs/evidencias/10-casos-prueba.md): casos de prueba ejecutados.
- [`docs/evidencias/11-errores.md`](docs/evidencias/11-errores.md): los tres errores típicos de JSX/React.

## Autor

Michael Montgomery Rosell — 4-C24-A

## Repositorio

https://github.com/mayragarcia-dev/semana09.git
