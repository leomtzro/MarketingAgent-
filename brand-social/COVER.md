# Portada de Facebook — Meridian

Dos versiones. **Sube la que prefieras a 1640×856.**

| Archivo | Qué es |
|---|---|
| `cover-fachada-1640.png` | **Recomendada.** Fachada de clínica en travertino y cristal, clara. |
| `cover-distrito-1640.png` | Distrito corporativo al anochecer, oscura. |
| `bg-fachada.png` / `bg-distrito.png` | Los fondos sin texto, reutilizables. |

Las versiones `cover-*.png` (sin `-1640`) son las mismas a 2× (3280×1712).

## Por qué la fachada

El granate del marco de la puerta y de la banca es casi nuestro acento exacto:
la imagen trae la marca puesta sin que se la impongamos. Además el tercio izquierdo
es piedra lisa, que es donde va el texto. La versión oscura funciona, pero podría
ser el distrito financiero de cualquier ciudad del mundo.

## Cómo recorta Facebook

| Dónde | Qué se ve del archivo |
|---|---|
| Escritorio | banda central de **1640×624** — recorta 116 px arriba y abajo |
| Celular | banda central de **1521×856** — recorta ~59 px por lado |
| Foto de perfil | tapa la esquina inferior izquierda, ~200×200 px |

Todo el texto está dentro de las tres zonas a la vez. Si mueves algo,
córrelo con `node shootcover.mjs guides`, que dibuja los tres límites encima.

## Los fondos

Generados con ElevenLabs Creative (`flux-3-image`, 1360×768).
**No son fotos de Tijuana ni de ninguna clínica real**: son imágenes generadas.
Si alguien pregunta, eso es lo que son. Todo lo demás que publicamos es observable;
conviene saber cuál pieza no lo es.

1360 px alcanza de sobra: Facebook muestra la portada a ~820 px de ancho.

## Reconstruir
```
node shootcover.mjs guides   # con guías de recorte -> /tmp/gA.png, /tmp/gB.png
node shootcover.mjs          # limpio -> cover-fachada.png, cover-distrito.png
```
