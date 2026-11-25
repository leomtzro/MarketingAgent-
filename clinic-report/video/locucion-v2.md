# Locución — Reel v2 · Meridian · Diagnóstico Tijuana

38.5 s · español neutro · voz ElevenLabs **Nicole — Español Neutro, Narrativa**
`voice_id ji5tAyfeTqxJsvOg94Jf` · modelo `eleven_v4` · 1 toma por línea · 472 créditos.

## Regla de cifras: todo sobre base 40

La hoja tiene 40 clínicas pero 5 sin dato de respuesta (35 probadas).
Las cifras de respuesta se **proyectan de 35 a 40** manteniendo la tasa observada,
y cada lámina lleva abajo el crudo y la palabra "proyectado".

| Clase | Observado /35 | Tasa | **Sobre 40** |
|---|---|---|---|
| Contestaron en la primera hora | 8 | 22.9% | **9** |
| No contestaron en la primera hora | 27 | 77.1% | **31** |
| Nunca contestaron | 5 | 14.3% | **6** |
| Tarde (11 h a 6 días) | 15 | 42.9% | **17** |

**Excepción: el botón roto se queda en 7, no en 8.** La proyección daría 8, pero
esas 7 son clínicas identificadas una por una, con nombre, a las que les escribimos.
Inventar una octava rompe el dato en el único lugar donde lo usamos para abrir conversación.

**Sitio web: sin proyección.** Las 40 fueron revisadas, el dato está completo.
30 de 40 sin sitio utilizable (75%); 23 sin ningún sitio.

## Guion

| # | Beat | VO entra | Texto | Dura |
|---|---|---|---|---|
| 1 | 0.00–5.30 | 0.30 | Revisamos cuarenta clínicas en Tijuana. Todas pagan anuncios en Meta. | 4.83 s |
| 2 | 5.30–11.30 | 5.60 | Les escribimos como un paciente cualquiera. Un mensaje normal, a las ocho de la noche. | 5.56 s |
| 3 | 11.30–18.10 | 11.60 | Solo nueve de cada cuarenta contestaron dentro de la primera hora. Seis no contestaron nunca. | 6.35 s |
| 4 | 18.10–24.30 | 18.40 | Siete pagaban anuncios con el botón de WhatsApp roto. Una lleva trece meses así. | 5.72 s |
| 5 | 24.30–28.70 | 24.60 | Y treinta de las cuarenta no tienen un sitio web utilizable. | 3.97 s |
| 6 | 28.70–34.10 | 29.00 | ¿Cuántos pacientes te daría contestar en la primera hora? Abre tu WhatsApp y cuenta. | 4.91 s |
| 7 | 34.10–38.50 | — | *(tarjeta CTA, sin voz)* | 4.40 s |

## Animación (todo CSS, sin fotos)

- **1** · Rejilla de 40 celdas que entran una a una.
- **2** · Maqueta de chat: burbuja enviada 20:00 ✓✓, puntos de "escribiendo" que nunca resuelven, "— sin respuesta —".
- **3** · Contador 9/40 + rejilla donde solo 9 celdas se encienden.
- **4** · Botón verde de WhatsApp que recibe un toque, se apaga, y aparece el error.
- **5** · Contador 30/40 + rejilla con 30 encendidas.
- **6** · La pregunta en tres líneas con cursor, y los tres pasos entrando por la izquierda.

Sin fotos de stock ni imágenes generadas: cualquier foto de consultorio o de doctor
sería inventada, y el reel vive de que todo lo que muestra sea observable.

## Reglas (sin cambio)
- Nunca se nombra una clínica.
- Toda cifra en pantalla trae su crudo abajo, y dice si está proyectada.
- No se promete resultado. La lámina 6 hace la pregunta y no la contesta: ese número no está en nuestra hoja.

## Archivos
- `Meridian-Reel-v2-VO.mp4` — 1080×1920, 25 fps, H.264 + AAC, 38.5 s
- `reel-v2.html` / `shootv2.mjs` — fuente y captura
- `vo/vo1..vo6.mp3` — tomas · `vo/vo-385.m4a` — pista montada
