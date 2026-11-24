# Sitio — carpeta lista para publicar

`site/` es una copia completa y desplegable de `meridian-50y.pages.dev`, **descargada el
24 de noviembre de 2026**, con tres cambios aplicados.

## Qué cambió
0. **Layout: texto a la izquierda, visual a la derecha** en toda la portada.
   - Hero: dos columnas (copy izquierda / demo de WhatsApp derecha), con la foto de la
     doctora de fondo a página completa, degradado para que el texto se lea y
     desvanecido abajo para que no corte duro. Título bajado a `clamp(40px,5.1vw,74px)`
     para que entre en dos líneas en la columna angosta.
   - `#calc` (calculadora) y `#metodo` (las tres razones): mismo patrón con `.split`.
   - A 900 px o menos todo se apila, texto primero.
1. **Tipografía → Fraunces** en títulos (`SOFT 0`, `WONK 0`), Inter en cuerpo.
   En las 4 páginas: el `<link>` de Inter Tight, la regla `h1,h2{}` y 15 declaraciones
   `font-family` en línea (h3 y numerales de pasos).
2. **Pestaña “Investigaciones”** agregada al nav de `index`, `metodologia` y `calculadora`.
   `demo` no tiene nav, así que solo recibió la tipografía.
3. **Sección nueva** `/investigaciones` + el primer estudio.

## Estructura
```
site/index.html  metodologia.html  calculadora.html  demo.html
site/investigaciones/index.html
site/investigaciones/camino-del-paciente-tijuana-2026-11/index.html
site/js/  site/img/  site/favicon.svg     <- copiados del sitio en vivo, sin cambios
```

## ⚠ Antes de subirla
Esta carpeta es una **foto del sitio del 24 de noviembre**. Si tocaste el sitio después
de esa fecha, subirla completa **revierte** esos cambios. En ese caso, sube solo:
- la carpeta `site/investigaciones/`
- y aplica los cambios de tipografía/nav a mano sobre tus archivos actuales.

Y si el sitio se construye desde un repo o un generador, **los cambios deben ir también
en la fuente**, o el próximo despliegue los borra. El sitio arma su contenido con JS desde
bloques `<template>` (`/js/dc-lite.js` + un JS por página), así que hay código fuente real
en alguna parte.

## Verificado
Las 6 páginas se sirvieron en local con sus JS e imágenes: Fraunces carga en todas,
el nav muestra Investigaciones en las tres que tienen nav, sin peticiones fallidas y
sin scroll horizontal a 390 px.

## Para agregar un estudio nuevo
Editar `build.py` (genera las dos páginas de Investigaciones) y volver a correrlo.
