# Portada de Facebook — Meridian

Sube una de estas a **1640×856**:

| Archivo | Fondo |
|---|---|
| `cover-e2-1640.png` | **Recomendada.** Granate (#9B2226), tipografía crema. |
| `cover-e1-1640.png` | Crema (#F7F4F0), tipografía tinta. |

Las versiones sin `-1640` son las mismas a 2× (3280×1712).

## El candado tipográfico

```
Más     ⎤
Mejores ⎥  Pacientes
Nuevos  ⎦
```

Una sola palabra a la derecha, tres a la izquierda: se leen las tres frases
—más pacientes, mejores pacientes, pacientes nuevos— sin repetir "pacientes"
tres veces. More / Better / New, que es la oferta.

El estudio de las 40 clínicas **no va aquí**. Eso es cómo encontramos y
diagnosticamos a un prospecto, no lo que el dueño de la clínica compra.
Vive en el reel, en los PDFs y en el primer mensaje.

## El fondo

`citygrid.svg` — una trama urbana vista desde arriba, tipo mapa, sin etiquetas:
manzanas irregulares, dos avenidas diagonales y el canal del río cruzando.
Está **dibujada por nosotros**, generada con `citygrid.py`, no es una captura de
ningún mapa ni una imagen generada por IA. Evoca una ciudad fronteriza; no es
un plano literal de Tijuana y no conviene presentarlo como tal.

Usa `currentColor`, así que se recolorea solo según la variante. El degradado
(`.wash`) apaga la trama bajo el texto y la deja viva a la derecha.

## Cómo recorta Facebook

| Dónde | Qué se ve del archivo |
|---|---|
| Escritorio | banda central de **1640×624** — recorta 116 px arriba y abajo |
| Celular | banda central de **1521×856** — recorta ~59 px por lado |
| Foto de perfil | tapa la esquina inferior izquierda, ~200×200 px |

Todo el texto está dentro de las tres zonas a la vez; la firma en cursiva
termina justo arriba de donde empieza la foto de perfil.

## Reconstruir
```
python3 citygrid.py          # vuelve a dibujar el mapa (otra semilla, otra ciudad)
node shoottype.mjs guides    # con guías -> /tmp/t-e1.png, /tmp/t-e2.png
node shoottype.mjs           # limpio   -> cover-e1.png, cover-e2.png
```
