# Casos de prueba — Cartelera Cine Aurora

Fecha de ejecución: 2026-11-02  
Entorno: Node.js v24.15.0, npm 11.12.1, Vite 8.3.5, React 19.3.1.

| ID | Caso de prueba | Pasos | Resultado esperado | Resultado obtenido | Evidencia |
|---|---|---|---|---|---|
| TC-01 | Carga inicial de la aplicación | Abrir `http://127.0.0.1:5174/` | Se muestran header, hero, 8 tarjetas y footer | Correcto | `10-resultado-desktop.png` |
| TC-02 | Título del documento | Revisar la pestaña del navegador | `Cine Aurora — Cartelera` | Correcto | Verificación en navegador |
| TC-03 | Datos desde `movies.js` | Comparar la primera tarjeta con el archivo de datos | Título `Duna: Parte Dos` y horarios `13:30`, `17:00`, `20:30` | Correcto | `10-resultado-desktop.png` |
| TC-04 | Props del Hero | Revisar el banner destacado | Muestra `movies[0]`: título, valoración, clasificación, duración y sinopsis | Correcto | `10-hero-desktop.png` |
| TC-05 | Props de MovieCard | Recorrer las 8 tarjetas | Cada tarjeta muestra su propio título, imagen, valoración y horarios | Correcto | `10-resultado-desktop.png` |
| TC-06 | Clave en el `map` | Revisar la consola del navegador | Sin advertencia de `key` | Correcto | Consola limpia |
| TC-07 | `className` en JSX | Revisar la consola del navegador | Sin advertencia de propiedad DOM inválida | Correcto | Consola limpia |
| TC-08 | Nodo raíz único | Compilar con `npm run build` | Compilación sin errores de JSX | Correcto | `npm run build` |
| TC-09 | Calidad de código | Ejecutar `npm run lint` | Sin errores ni advertencias | Correcto | `npm run lint` |
| TC-10 | Imágenes de la cartelera | Revisar visualmente las 8 tarjetas | Las imágenes cargan y se muestran recortadas correctamente | Correcto | `10-resultado-desktop.png` |

## Resumen

- Casos ejecutados: 10.
- Casos correctos: 10.
- Casos fallidos: 0.
- Errores de consola: 0.
- Advertencias de consola: 0.
