---
type: audit
status: active
date: 2026-11-24
tags: [dept-marketing, website, ux, accesibilidad]
---

# Auditoría UI/UX de meridian-50y.pages.dev

Medida, no opinada. Seis páginas (Inicio, Metodología, Calculadora, Demo,
Investigaciones y Estudio 01) cargadas en un navegador real con su JavaScript,
a **1280 px** y a **390 px**, contra las reglas de [[ui-ux-rules]].

Cada contraste se calculó con la fórmula de luminancia relativa de WCAG contra el
fondo efectivo del elemento. Cada área tocable es el rectángulo real que devuelve
el navegador. Nada de esto es a ojo.

## Resultado

| | Antes | Después de arreglar |
|---|---|---|
| **Severidad alta** | 22 | **0** |
| Severidad media | 48 | 47 |
| Severidad baja | 2 | 2 |

### Lo que ya estaba bien y conviene no romper
- **Contraste: cero fallas.** Ningún texto del sitio queda por debajo de su mínimo
  (4.5:1 cuerpo, 3:1 texto grande). La paleta aguanta.
- **Cero imágenes sin `alt`.**
- **Cero campos de formulario sin etiqueta.**
- **Cero enlaces o botones sin nombre accesible.**
- **Cero scroll horizontal** a 390 px en las seis páginas.
- `lang`, `title` y `meta description` presentes en todas.

## Arreglado en esta pasada

**Las 22 fallas altas eran la misma:** áreas tocables por debajo del mínimo de 24 px
de WCAG 2.5.8. Los enlaces del nav en Inicio medían **16 px de alto** porque no
llevaban la clase `.nl` que sí tienen las demás páginas; los del pie, 16 px en todas.

- `nav a` → `min-height:44px` · `footer a` → `min-height:24px`
- Clase `.nl` agregada a los cuatro enlaces del nav de Inicio
- Dos enlaces de cuerpo bajo el piso de 24 px, corregidos
- **Salto de jerarquía h1 → h3** en Inicio y en Investigaciones: los encabezados de
  tarjeta pasaron a `h2` (y sus cierres, que al primer intento dejé huérfanos y
  rompieron el HTML hasta que la segunda corrida lo detectó)
- `@media (prefers-reduced-motion: reduce)` agregado donde faltaba
- `:focus-visible` propio agregado en Inicio

## Lo que queda abierto, y qué haría con cada cosa

### 7.6 · Área tocable entre 24 y 44 px — 22 casos
Cumplen WCAG pero quedan bajo los 44 px cómodos. El peor es el enlace **Demo** del
nav (36 px de ancho) y el logo **Meridian** (30 px de alto).
**Recomendación:** subirlos. Es una línea de CSS y el nav es lo que más se toca.

| Inicio | escritorio | 36x44px (recomendado 44) | `a "Demo"` |
| Inicio | escritorio | 121x24px (recomendado 44) | `a "Aviso de privacidad"` |
| Metodología | escritorio | 36x46px (recomendado 44) | `a "Demo"` |
| Metodología | escritorio | 121x24px (recomendado 44) | `a "Aviso de privacidad"` |
| Calculadora | escritorio | 36x46px (recomendado 44) | `a "Demo"` |
| Calculadora | escritorio | 121x24px (recomendado 44) | `a "Aviso de privacidad"` |

### 13.4 · Texto menor a 14 px en móvil — 20 casos
Dos grupos distintos, y los trataría distinto:
- **Etiquetas de 12 px en mayúsculas** ("AGENCIA DE MARKETING MÉDICO…", "SOLO LAS
  PRIMERAS 10 CLÍNICAS"). Es convención tipográfica, no texto de lectura.
  **Desviación aceptada**, no la cambiaría.
- **Pies y notas de 13 px** ("Ajusta los tres con tus cifras reales", "Aritmética
  simple con tus números"). Eso sí es texto de lectura y sí subiría a 14 px en móvil.

### 4.4 · Línea de ~104 caracteres — 5 casos
Todos en las preguntas frecuentes de Inicio. Lo cómodo son 45–75 caracteres; a 104 el
ojo pierde el renglón al volver. **Recomendación:** `max-width:72ch` en ese bloque.

### 13.6 · Imágenes sin `loading="lazy"` — 2 casos
La foto de la doctora en `#resumen` carga aunque esté fuera de pantalla. Menor, pero
gratis de arreglar.

## Dos cosas que la máquina no puede ver

1. **La foto de la doctora aparece dos veces** en Inicio: de fondo en el hero y otra
   vez como banner 21:9 en `#resumen`. Ninguna regla lo marca; se ve repetido.
2. **`#6E6E73` sobre `#F5F5F7` da 4.66:1.** Pasa AA para cuerpo por 0.16 de margen.
   Si algún día el fondo se aclara o el gris se sube, falla. Vale la pena fijarlo
   un tono más oscuro ahora que cuesta nada.

## Cómo repetir esto
`website/audit.mjs` corre contra el sitio servido en local y escribe el JSON de
hallazgos. Es el mismo guion que podría correrse sobre el sitio de un prospecto.
