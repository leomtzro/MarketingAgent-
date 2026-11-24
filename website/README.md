# Sitio — páginas nuevas

El sitio vive en Cloudflare Pages (`meridian-50y.pages.dev`). Su código fuente **no**
está en este repo: estas páginas se escribieron para encajar con el diseño en vivo
(Inter Tight, `#F5F5F7`, acento `#9B2226`, nav `.glass`, footer `#111316`).

## Qué hay aquí
```
investigaciones/index.html                              -> /investigaciones
investigaciones/camino-del-paciente-tijuana-2026-11/    -> /investigaciones/camino-del-paciente-tijuana-2026-11
```

## Para publicarlas
Copiar la carpeta `investigaciones/` al proyecto de Pages, al mismo nivel que
`calculadora/`, `metodologia/` y `demo/`.

## Falta un paso que no se puede hacer desde aquí
El enlace **Investigaciones** ya está en el nav de estas dos páginas, pero **no** en
`/`, `/calculadora`, `/metodologia` ni `/demo`, porque esos archivos no están en este
repo. Hay que pegar en el nav de cada uno, después del enlace de Metodología:

```html
<a class="nl" href="/investigaciones">Investigaciones</a>
```

## Para agregar un estudio nuevo
1. Crear `investigaciones/<slug>/index.html` copiando el estudio existente.
2. Agregar su tarjeta en `investigaciones/index.html`.
Mantener la regla: ninguna clínica se nombra, y cada cifra lleva su conteo crudo.
