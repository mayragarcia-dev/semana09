# Registro real de consola — retardo del buscador

Capturado con Chrome headless sobre `http://127.0.0.1:5174/` al escribir `duna` carácter por carácter (90 ms entre teclas).

| Marca de tiempo | Mensaje |
|---|---|
| 1793766332133 | `[search] keystroke: d` |
| 1793766332264 | `[search] keystroke: du` |
| 1793766332388 | `[search] keystroke: dun` |
| 1793766332511 | `[search] keystroke: duna` |
| 1793766332850 | `[filter] applied for "duna" → 1 result(s)` |

## Lectura

- Hay un log por cada pulsación: `d`, `du`, `dun`, `duna`.
- El filtro se aplica una sola vez, después del retardo de 300 ms.
- La diferencia entre el último tecleo y el filtro aplicado es de aproximadamente 300 ms.
