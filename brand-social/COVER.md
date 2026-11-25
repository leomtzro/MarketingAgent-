# Portada de Facebook — Meridian

`cover-tijuana-1640.png` — **sube este** (1640×856, el tamaño que pide Facebook).
`cover-tijuana.png` — el mismo a 2× (3280×1712), por si se necesita más resolución.
`bg-tijuana.png` — solo el fondo, sin texto. Reutilizable.

## Cómo recorta Facebook (por esto el texto está donde está)

| Dónde | Qué se ve del archivo |
|---|---|
| Escritorio | banda central de **1640×624** — recorta 116 px arriba y abajo |
| Celular | banda central de **1521×856** — recorta ~59 px por lado |
| Foto de perfil | tapa la esquina inferior izquierda, ~200×200 px |

Todo el texto vive dentro de las tres zonas seguras a la vez. Si mueves algo,
revísalo con `node shootcover.mjs guides`, que dibuja los tres límites encima.

## Fondo

Generado con ElevenLabs Creative (`flux-3-image`, 1360×768, 291 créditos).
Ciudad fronteriza al atardecer: cerros, construcción baja, cielo granate.
No es una foto de Tijuana: es una imagen original generada, no una foto de stock
ni la foto de ningún lugar real identificable. Si alguien pregunta, eso es lo que es.

1360 px de ancho alcanza de sobra: Facebook muestra la portada a ~820 px.

## Tipografía
Fraunces display + Inter. Sobre el fondo van un tinte granate (#9B2226, multiply 26%)
y un degradado oscuro de izquierda a derecha, que es lo que hace legible el texto
sin tapar la ciudad.

## Reconstruir
```
node shootcover.mjs guides   # con guías de recorte, a /tmp/cov-guides.png
node shootcover.mjs          # limpio, a cover-tijuana.png
```
