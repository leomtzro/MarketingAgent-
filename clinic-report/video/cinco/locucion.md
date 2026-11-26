# Locución — Reel "Los cinco perfiles" · Meridian

34.5 s · 1080×1920 · 25 fps · H.264 + AAC · español neutro
Voz **Nicole — Español Neutro, Narrativa** `ji5tAyfeTqxJsvOg94Jf` · modelo `eleven_v4`
Audio normalizado a −16 LUFS / pico −1.5 dB.

## Guion y tiempos

| # | Entra | Dur | Escena | Línea |
|---|-------|-----|--------|-------|
| 1 | 0.30 | 5.49 | A · figura de mármol, brillo rojo difuso | Algo te duele y no sabes qué es. Así que haces lo que todos: lo buscas. |
| 2 | 6.50 | 6.69 | B · resultados de búsqueda, cinco clínicas | Encuentras cinco. Te mueves de perfil en perfil. Reseñas. Posts. Sitio web. |
| 3 | 13.90 | 7.00 | C · scroll de perfiles, toque, encendido | Y eliges al que más veces apareció. Porque los otros podrían ser mejores. Pero no tenías cómo saberlo. |
| 4 | 21.60 | 3.47 | D · zoom al perfil no elegido | Si estás viendo esto, tú eres uno de los cinco. |
| 5 | 25.80 | 6.11 | E · tarjeta roja | El paciente nunca supo que existías. No por tu experiencia. Por tu falta de marketing. |
| 6 | 32.30 | 1.41 | E · cierre | Mándanos un mensaje. |

Escenas: A 0.00–6.20 · B 6.20–13.60 · C 13.60–21.30 · D 21.30–25.50 · E 25.50–34.50

## Reglas que gobiernan esta pieza

- **Ninguna clínica real aparece.** Los cinco perfiles son nombres acuñados —
  Vandel, Arquen, Ortessa, Nerval, Lumbre — verificados por búsqueda como
  inexistentes en Tijuana. Las cifras de reseñas, publicaciones y seguidores
  son inventadas e ilustrativas; no son datos de nuestro estudio.
- **"Uno de los cinco" es literal:** en pantalla se muestran exactamente cinco
  resultados. Si se edita el número en el guion, hay que editarlo en la escena B.
- **Las interfaces son copia cercana sin nombres.** No aparece ningún logotipo,
  marca ni nombre de plataforma. Decisión de Leo, con el riesgo de revisión
  publicitaria de Meta explicado y aceptado.
- El perfil al que se hace zoom (Ortessa) **se ve bien** —5.0 de calificación—
  pero con 18 publicaciones. Ese contraste es el argumento entero del anuncio.

## Piezas

- `reel.html` — las cinco escenas, animación pausable por fotograma
- `shoot.mjs` — captura 863 fotogramas · `stills.mjs` — stills de revisión
- `art/figure-raw.png` — relieve generado (ElevenLabs, `bytedance-seedream-5.5`)
- `art/figure.png` `art/marble.png` `art/tile.png` — recortes derivados
- `vo/vo1..vo6.mp3` + `vo-345.m4a` — locución y pista montada
- `Meridian-Reel-Cinco-Perfiles.mp4` — master 9:16

Créditos ElevenLabs gastados en esta pieza: **880** (98 imagen + 782 voz).
