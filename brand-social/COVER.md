# Portada de Facebook — Meridian

Sube una de estas a **1640×856**:

| Archivo | Fondo |
|---|---|
| `cover-e2-1640.png` | **Recomendada.** Granate (#9B2226), tipografía crema. |
| `cover-e1-1640.png` | Crema (#F7F4F0), tipografía tinta. Es el fondo de toda nuestra colateral. |
| `cover-e3-1640.png` | Tinta (#17181A). Se ve bien pero vuelve a leerse corporativo. |

Las versiones sin `-1640` son las mismas a 2× (3280×1712).

## Qué dice y por qué

```
MERIDIAN · TIJUANA
Más pacientes.
Mejores pacientes.
Pacientes nuevos.
Marketing para clínicas excepcionales.
```

More / Better / New, que es la oferta, no el método.
El estudio de las 40 clínicas **no va aquí**: eso es cómo encontramos y
diagnosticamos clientes, no lo que el dueño de la clínica compra.
Vive en el reel, en los PDFs y en el primer mensaje, no en el escaparate.

## Por qué tipografía y no foto

Todo lo demás que hemos hecho —el reel, los 16 carruseles, los dos PDFs, los
correos— es tipografía sobre crema con un solo rojo. Una foto de arquitectura
rompía ese sistema y además se veía a stock corporativo. El skyline es el
nuestro (`skyline.svg`), dibujado para la marca, no generado.

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
node shoottype.mjs guides   # con guías -> /tmp/t-e1.png, t-e2.png, t-e3.png
node shoottype.mjs          # limpio   -> cover-e1.png, cover-e2.png, cover-e3.png
```
Los fondos generados con ElevenLabs quedaron en `bg-fachada.png` y
`bg-distrito.png` por si sirven para otra cosa. No son fotos reales de Tijuana
ni de ninguna clínica.
