# Correos branded — Meridian

| Archivo | Cuándo se manda |
|---|---|
| `diagnostico.html` / `.txt` | En frío, para entregar el diagnóstico de 4 páginas |
| `propuesta.html` / `.txt` | **Después de la llamada**, con alcance, medición y condiciones |


`diagnostico.html` es la plantilla HTML y `diagnostico.txt` la versión de texto plano.
**Manda siempre las dos** (multipart): si solo mandas HTML, varios filtros lo tratan como
spam y los lectores de pantalla no tienen de dónde leer.

## Rellenar antes de enviar
| Marcador | Qué va |
|---|---|
| `[APELLIDO]` | Apellido del doctor |
| `[TU NOMBRE]` | Tu nombre |
| `[LINK_PDF]` | URL del PDF del diagnóstico (solo diagnostico) |
| `[LINK_BAJA]` | Liga de baja que dé tu plataforma de envío (solo diagnostico) |
| `[CLÍNICA]` | Nombre de la clínica (solo propuesta) |
| `[PUNTO 1..3]` | Lo que dijo en la llamada, en sus palabras (solo propuesta) |
| `[PRECIO]` | Mensualidad a partir del tercer mes — **sin decidir** (solo propuesta) |
| `[FECHA]` | Fecha de arranque acordada (solo propuesta) |
| `[LINK_SI]` | A dónde va el botón: calendario, WhatsApp o un "responder" (solo propuesta) |

## La propuesta no lleva liga de baja
Es correo uno a uno pedido por el destinatario, no difusión. El de diagnóstico sí la lleva.

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
