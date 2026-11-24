# Correo branded — Meridian

`diagnostico.html` es la plantilla HTML y `diagnostico.txt` la versión de texto plano.
**Manda siempre las dos** (multipart): si solo mandas HTML, varios filtros lo tratan como
spam y los lectores de pantalla no tienen de dónde leer.

## Rellenar antes de enviar
| Marcador | Qué va |
|---|---|
| `[APELLIDO]` | Apellido del doctor |
| `[TU NOMBRE]` | Tu nombre |
| `[LINK_PDF]` | URL del PDF del diagnóstico |
| `[LINK_BAJA]` | Liga de baja que dé tu plataforma de envío |

## Falta subir el logo
La plantilla apunta a `https://meridian-50y.pages.dev/img/meridian-mark.png`.
Los archivos ya están en `website/site/img/` (1x y 2x), pero **el sitio no está
publicado**, así que hoy el logo sale como texto alternativo "Meridian". Se arregla solo
cuando publiques el sitio.

## Qué sí y qué no se puede en correo
- **No hay JavaScript.** Ningún correo puede tener una calculadora ni un slider.
  "Interactivo" en correo es: hover en escritorio, GIF animado, o AMP for Email
  (solo Gmail, y requiere registrar el dominio con Google).
- **Fraunces no carga en Gmail ni Outlook.** Ahí cae a Georgia, que es serif y se
  parece. Apple Mail y iOS sí la cargan.
- **Las imágenes se bloquean por defecto** en Outlook y en muchas configuraciones.
  Por eso ningún dato vive dentro de una imagen y el logo lleva `alt`.
- **Outlook de Windows** usa el motor de Word: por eso el botón lleva una versión VML
  aparte y el layout va en tablas.

## Antes de mandarlo a 40 personas
Mándatelo a ti en Gmail, Outlook y en el celular. Revisa: que el botón abra, que el
logo aparezca, que el texto previo se lea en la bandeja, y que la liga de baja funcione.
