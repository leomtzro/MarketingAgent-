# Reglas de UI/UX para sitios y landings de clínicas (Meridian)

**Cómo usar este documento.** Es una lista de verificación para construir o revisar una página, pensada para un fundador que no es diseñador y para su agente. Cada regla tiene tres partes: nombre, definición y ejemplo (casi siempre un par "Mal / Bien" con una clínica). Al revisar una página, recorre las secciones 7, 8, 9, 12 y 13 primero: ahí están los fallos que más dinero cuestan en una clínica (botón de cita, formulario, navegación, accesibilidad y móvil). Las reglas con línea "Fuente" vienen de las bibliotecas de skills instaladas en esta máquina; las leyes con nombre propio y WCAG vienen de la web. Cuando una regla no trae número es porque no hay una cifra confiable. Las cifras de precios, horarios y nombres en los ejemplos son inventadas, solo ilustran.

**Fecha:** 2026-11-24. Los puntos tomados de la web (leyes de UX, heurísticas de Nielsen, WCAG 2.2, Gestalt) se verificaron en esa fecha.

---

## 1. Leyes y principios fundamentales

### 1.1 Ley de Fitts (Fitts's Law)
**Definición.** Un objetivo grande y cercano se toca más rápido y con menos errores que uno pequeño y lejano. Por eso el área que se puede tocar importa más que el dibujo del ícono.
**Ejemplo.** Mal: botón "Agendar cita" de 28 px de alto, pegado a otro enlace, en la esquina superior de una pantalla de celular. Bien: botón de 48 px de alto, ancho completo en móvil, separado del resto y al alcance del pulgar.
Fuente: vectorlab-ux-skills/viewports (área táctil de 44x44 px, "la zona tocable no es el glifo").

### 1.2 Ley de Hick (Hick's Law)
**Definición.** Cuantas más opciones se presentan, más tarda la persona en decidir. Reduce las opciones visibles y deja un camino claro.
**Ejemplo.** Mal: la portada ofrece 9 botones distintos (cita, WhatsApp, llamar, chat, boletín, promociones, blog, seguros, ubicación). Bien: un botón principal "Agendar cita" y un enlace secundario "Llamar al consultorio".
Fuente: vectorlab-ux-skills/forms; design-taste-frontend (máximo 2 acciones en el hero).

### 1.3 Ley de Jakob (Jakob's Law)
**Definición.** La gente pasa casi todo su tiempo en otros sitios, así que espera que el tuyo funcione igual. Usa los patrones que ya conoce.
**Ejemplo.** Mal: el logotipo no lleva a la portada y el menú está escondido en un ícono sin nombre en escritorio. Bien: logotipo arriba a la izquierda que regresa al inicio, menú con palabras, teléfono arriba a la derecha.

### 1.4 Ley de Miller (Miller's Law)
**Definición.** La memoria de trabajo es corta (la regla popular dice 7 más o menos 2 elementos). No es un tope para tus menús: es un recordatorio de no obligar a recordar.
**Ejemplo.** Mal: "Anota estos 3 códigos de servicio y selecciónalos en el siguiente paso". Bien: el servicio elegido se queda visible en el resumen de la cita durante todo el proceso.

### 1.5 Umbral de Doherty (Doherty Threshold)
**Definición.** Si el sistema responde en menos de unos 400 ms, la persona siente que fluye y no espera. Si tarda más, hay que mostrar que algo está pasando.
**Ejemplo.** Mal: al tocar "Ver horarios disponibles" no pasa nada durante 3 segundos y la persona toca otra vez. Bien: el botón cambia a "Buscando horarios..." de inmediato y aparece un esqueleto de la lista.
Fuente: vectorlab-ux-skills/loaders.

### 1.6 Ley de Tesler (Tesler's Law)
**Definición.** Cada proceso tiene una complejidad que no se puede eliminar, solo mover. Que la absorba el sistema, no el paciente.
**Ejemplo.** Mal: el formulario pide fecha de nacimiento en tres cajas, ciudad, estado y código postal por separado. Bien: pide el código postal y la ciudad se rellena sola; la fecha va en un solo campo con formato de ejemplo.
Fuente: vectorlab-ux-skills/defaults.

### 1.7 Ley de Postel (Postel's Law)
**Definición.** Sé flexible con lo que la persona escribe y estricto con lo que tú entregas. Acepta varias formas de escribir lo mismo.
**Ejemplo.** Mal: "Teléfono inválido" porque la persona escribió "55 1234 5678" con espacios. Bien: el sitio acepta espacios, guiones y paréntesis y los normaliza antes de enviar.

### 1.8 Regla del pico y el final (Peak-End Rule)
**Definición.** La gente recuerda una experiencia por su momento más intenso y por cómo termina, no por el promedio. Arregla primero el peor momento y el cierre.
**Ejemplo.** Mal: después de llenar 6 campos, la confirmación dice "Enviado" sin fecha ni siguiente paso. Bien: pantalla final con "Tu cita es el martes 3 a las 10:30. Te escribimos por WhatsApp para confirmar. Llega 10 minutos antes."
Fuente: marco interno de Meridian (Peak-end rule) y lawsofux.com.

### 1.9 Efecto de posición serial (Serial Position Effect)
**Definición.** Se recuerdan mejor el primer y el último elemento de una serie. Pon lo más importante al principio y al final.
**Ejemplo.** Mal: en el menú, "Agendar cita" queda enterrado en medio de seis enlaces. Bien: servicios al inicio y el botón "Agendar cita" como último elemento, separado, en el extremo derecho.

### 1.10 Efecto Von Restorff (aislamiento)
**Definición.** Lo que es distinto de su entorno es lo que se recuerda. Úsalo para una sola cosa: la acción principal.
**Ejemplo.** Mal: cinco botones del mismo color intenso en la misma pantalla. Bien: cuatro enlaces neutros y un botón "Agendar cita" con el único relleno de color de acento.
Fuente: design-taste-frontend/system.md ("exactamente un botón relleno marca la acción principal").

### 1.11 Efecto Zeigarnik (Zeigarnik Effect)
**Definición.** Las tareas incompletas se quedan en la cabeza. Un indicador de avance invita a terminar lo empezado.
**Ejemplo.** Mal: formulario de primera consulta de 12 campos en una sola pantalla larga sin pista de cuánto falta. Bien: "Paso 2 de 3: datos de contacto" con barra de avance, y los datos guardados si cierra la página.

### 1.12 Efecto estética-usabilidad (Aesthetic-Usability Effect)
**Definición.** Lo que se ve cuidado se percibe como más fácil de usar y más confiable. En una clínica, la apariencia es parte de la confianza.
**Ejemplo.** Mal: tipografías mezcladas, fotos de distinto estilo y márgenes desiguales; el paciente duda de la limpieza de la clínica. Bien: una familia tipográfica, fotos reales de la clínica con la misma luz y márgenes iguales.

---

## 2. Heurísticas de usabilidad (las 10 de Nielsen)

### 2.1 Visibilidad del estado del sistema
**Definición.** El sitio siempre dice qué está pasando: cargando, enviado, error, en qué paso va la persona.
**Ejemplo.** Mal: se envía el formulario y la página se queda igual. Bien: el botón dice "Enviando..." y después aparece "Recibimos tu solicitud. Te respondemos hoy antes de las 6 pm".

### 2.2 Coincidencia entre el sistema y el mundo real
**Definición.** Habla con las palabras del paciente, no con las de la clínica. Ordena la información como la persona la piensa.
**Ejemplo.** Mal: "Procedimientos de rehabilitación oral multidisciplinaria". Bien: "Coronas, puentes y prótesis" con el precio desde y la duración.
Fuente: design-taste-frontend/copy.md (palabras que un desconocido entiende en 5 segundos).

### 2.3 Control y libertad del usuario
**Definición.** La persona debe poder salir, deshacer o corregir sin castigo.
**Ejemplo.** Mal: al elegir mal el horario hay que volver a empezar todo el formulario. Bien: botón "Cambiar horario" visible en el resumen y los datos ya escritos se conservan.

### 2.4 Consistencia y estándares
**Definición.** La misma cosa se ve y se llama igual en todo el sitio. Los botones, los enlaces y las palabras no cambian de una página a otra.
**Ejemplo.** Mal: "Reservar" en el menú, "Pedir cita" en el hero y "Agenda ya" en el pie. Bien: "Agendar cita" en el menú, el hero, el cierre y la barra móvil.
Fuente: design-taste-frontend/copy.md (una sola redacción para la acción principal).

### 2.5 Prevención de errores
**Definición.** Es mejor evitar el error que explicarlo. Limita opciones imposibles y confirma lo irreversible.
**Ejemplo.** Mal: el calendario deja elegir domingos aunque la clínica no abre. Bien: los días cerrados aparecen deshabilitados con la leyenda "Cerrado" y el teléfono se pide con el tipo de teclado numérico.
Fuente: vectorlab-ux-skills/surfaces (confirmación de acciones destructivas).

### 2.6 Reconocer en lugar de recordar (Recognition over Recall)
**Definición.** Muestra las opciones; no obligues a recordarlas. Lo visible gana a lo memorizado.
**Ejemplo.** Mal: pedir "Escribe el nombre exacto del tratamiento". Bien: lista de tratamientos para elegir, con los últimos datos del paciente ya visibles en el resumen.

### 2.7 Flexibilidad y eficiencia de uso
**Definición.** El camino básico debe ser simple y debe haber atajos para quien ya conoce el sitio.
**Ejemplo.** Mal: para llamar hay que abrir menú, entrar a "Contacto" y copiar el número. Bien: botón de llamada siempre en la barra inferior del móvil y autocompletado del navegador activo en el formulario.

### 2.8 Diseño estético y minimalista
**Definición.** Cada elemento extra compite con lo importante. Si no ayuda a agendar, informar o confiar, se quita.
**Ejemplo.** Mal: portada con carrusel, contador animado, cuatro banners de promoción y un chat flotante. Bien: promesa en una línea, una foto real del consultorio, un precio desde y un botón.
Fuente: vectorlab-ux-skills/anti-slop ("si su único trabajo es decorar, se elimina").

### 2.9 Ayudar a reconocer, diagnosticar y recuperarse de errores
**Definición.** El mensaje de error dice qué pasó en lenguaje simple y cómo arreglarlo. Nunca culpa a la persona.
**Ejemplo.** Mal: "Error 422: correo inválido". Bien: "Escribe un correo con @, por ejemplo nombre@correo.com".
Fuente: vectorlab-ux-skills/errors.

### 2.10 Ayuda y documentación
**Definición.** Las dudas frecuentes se responden donde aparecen, en palabras cortas y buscables.
**Ejemplo.** Mal: un PDF de 8 páginas de "Preguntas frecuentes" al final del sitio. Bien: bajo el botón de cita, tres respuestas abiertas: "¿Aceptan seguros?", "¿Cuánto dura la primera consulta?", "¿Cómo cancelo?"
Fuente: design-taste-frontend/system.md (FAQ abiertas, sin acordeón).

---

## 3. Percepción y disposición visual

### 3.1 Proximidad (Gestalt)
**Definición.** Lo que está cerca se lee como grupo. Usa poco espacio dentro de un grupo y mucho entre grupos.
**Ejemplo.** Mal: el título de cada tratamiento está igual de lejos del texto de arriba que del de abajo. Bien: 8 px entre título y precio, 32 px entre un tratamiento y el siguiente.
Fuente: vectorlab-ux-skills/spacing.

### 3.2 Similitud (Gestalt)
**Definición.** Lo que se ve parecido se interpreta como del mismo tipo. Los elementos con la misma función deben verse igual, y los que tienen función distinta, distintos.
**Ejemplo.** Mal: algunos enlaces son azules subrayados, otros negros sin subrayado y otros parecen botones. Bien: todos los enlaces de texto con un solo estilo y todos los botones con otro.

### 3.3 Región común (Gestalt)
**Definición.** Lo que está dentro de una misma caja o fondo se percibe como grupo. Una línea fina o un fondo distinto bastan.
**Ejemplo.** Mal: tabla de precios flotando sobre el fondo, sin borde ni líneas. Bien: la tabla dentro de un panel con borde de 1 px y líneas finas entre filas.
Fuente: vectorlab-ux-skills/colour-palette (una lista o tabla es una superficie con borde o líneas).

### 3.4 Continuidad (Gestalt)
**Definición.** El ojo sigue líneas y alineaciones. Elementos alineados en una misma línea se leen como una secuencia.
**Ejemplo.** Mal: tres pasos del tratamiento puestos en zigzag con distintos márgenes. Bien: los tres pasos en una fila alineada, numerados 1, 2, 3, con la misma altura.

### 3.5 Cierre (Gestalt)
**Definición.** La mente completa formas que faltan. Un indicador a medias comunica "falta poco" sin explicarlo.
**Ejemplo.** Mal: lista de testimonios cortada con una escala brusca que parece error. Bien: la última tarjeta asoma a medias en el carrusel móvil para indicar que hay más, con flechas y puntos visibles.

### 3.6 Figura y fondo (Figure-Ground)
**Definición.** La persona separa lo que mira (figura) de lo que queda detrás (fondo). La figura debe distinguirse con claridad.
**Ejemplo.** Mal: texto blanco sobre una foto del consultorio con zonas claras. Bien: texto oscuro sobre una caja sólida, o sobre la parte tranquila de la foto, sin degradados encima.
Fuente: design-taste-frontend/system.md (texto sobre foto solo en el hero y en una banda de cierre, sobre zona calmada o caja sólida).

### 3.7 Jerarquía visual
**Definición.** Lo más importante se ve primero por tamaño, espacio y contraste, no por poner todo en negritas. Cada pantalla tiene un solo foco.
**Ejemplo.** Mal: título, subtítulo, precio y botón del mismo tamaño y peso. Bien: título grande, precio desde en segundo nivel, botón con relleno; el resto en gris más tranquilo.
Fuente: vectorlab-ux-skills/typography (jerarquía por tamaño y espaciado, no por pesos).

---

## 4. Tipografía

### 4.1 Texto de lectura de 16 px o más
**Definición.** El cuerpo del texto mide 16 px como mínimo. Lo secundario puede medir 14 px y los datos menores 12 px; nada por debajo de 12 px. Las tablas y listas son contenido principal, no datos menores.
**Ejemplo.** Mal: lista de tratamientos y precios a 12 px gris claro. Bien: nombre del tratamiento a 16 px, descripción a 14 px y precio a 16 px en peso medio.
Fuente: vectorlab-ux-skills/typography; design-taste-frontend/system.md (el texto que se lee, 16 px o más).

### 4.2 Interlineado inverso al tamaño
**Definición.** Los títulos grandes llevan interlineado ajustado (1.1 a 1.25) y el texto corrido, uno abierto (1.5 a 1.6). Más de 1.6 en cuerpo se ve disperso.
**Ejemplo.** Mal: título de 36 px con interlineado 1.6 que se rompe en tres renglones sueltos. Bien: título a 1.2 y párrafo a 1.55.
Fuente: vectorlab-ux-skills/typography.

### 4.3 Largo de línea de 65 a 75 caracteres
**Definición.** Un renglón demasiado largo cansa y se pierde el hilo. Limita el ancho del texto corrido con `max-width: 65ch` a `75ch`. Otra biblioteca instalada propone incluso un máximo de 62 caracteres.
**Ejemplo.** Mal: párrafo de "Sobre la doctora" que ocupa 1200 px de ancho en monitor. Bien: columna de texto de 70ch con la foto al lado.
Fuente: vectorlab-ux-skills/spacing; design-taste-frontend/system.md.

### 4.4 Máximo tres pesos y una familia
**Definición.** Usa como máximo 3 pesos (por ejemplo 400, 500, 600) y una sola familia tipográfica en la interfaz. El peso 700 o más se vuelve duro y suplanta la jerarquía por tamaño.
**Ejemplo.** Mal: página con cuatro fuentes y pesos de 300 a 900. Bien: una familia, 400 para texto, 500 para botones y etiquetas, 600 para títulos.
Fuente: vectorlab-ux-skills/typography.

### 4.5 Pocos tamaños, escala fija
**Definición.** Una pantalla debería usar entre 4 y 5 tamaños distintos, tomados de una escala, no inventados uno a uno. Un mismo tipo de elemento (título de tarjeta, dirección, cifra) tiene siempre el mismo tamaño en todo el sitio.
**Ejemplo.** Mal: títulos de tarjeta de 19, 21 y 23 px en la misma fila. Bien: todos los títulos de tarjeta a 20 px.
Fuente: vectorlab-ux-skills/typography; design-taste-frontend/system.md.

### 4.6 Texto real, nunca texto dentro de una imagen
**Definición.** Todo el texto debe ser texto de verdad (se puede seleccionar, traducir, agrandar y leer con lector de pantalla). Un menú o lista de precios hecho imagen o PDF falla en todo eso.
**Ejemplo.** Mal: lista de precios subida como JPG tomado de un volante. Bien: tabla HTML con servicio, duración y precio, y un enlace opcional para descargar el PDF.
Fuente: design-taste-frontend/system.md (cada palabra es texto vivo).

---

## 5. Color y contraste

### 5.1 Contraste mínimo de texto: 4.5 a 1
**Definición.** El texto normal debe tener contraste de 4.5:1 contra su fondo. El texto grande (aprox. 24 px o 19 px en negritas) y los componentes de interfaz (bordes de campos, íconos que comunican algo) necesitan 3:1.
**Ejemplo.** Mal: gris claro #AAAAAA sobre blanco para horarios (contraste cercano a 2.3:1). Bien: gris oscuro #595959 sobre blanco (contraste 7:1) o negro cálido para lo importante.
Fuente: WCAG 2.2 criterios 1.4.3 y 1.4.11 (w3.org).

### 5.2 Nunca comunicar solo con color
**Definición.** Si una cosa se distingue solo por color, no la ven quienes tienen daltonismo ni quienes usan pantallas con poco contraste. Agrega texto, ícono o forma.
**Ejemplo.** Mal: campo con borde rojo sin mensaje, o "horario ocupado" solo en gris. Bien: borde rojo más texto "Escribe tu teléfono de 10 dígitos" más ícono de alerta.
Fuente: WCAG 2.2 criterio 1.4.1; vectorlab-ux-skills/reduced-motion (no transmitir significado solo con movimiento).

### 5.3 Un solo color de acento
**Definición.** La interfaz es mayormente neutra. Un único acento marca botón principal, enlaces y foco. En la regla 60-30-10: 60% fondo, 30% superficies (tarjetas, paneles), 10% acento.
**Ejemplo.** Mal: azul para botones, verde para enlaces, naranja para etiquetas y morado para íconos. Bien: fondo claro, tarjetas un paso más oscuras y un solo verde clínico para botón, enlace y foco.
Fuente: vectorlab-ux-skills/colour-palette; design-taste-frontend/system.md.

### 5.4 Sin degradados arcoíris, vidrio esmerilado ni sombras duras
**Definición.** Los botones llevan un relleno sólido. El desenfoque tipo vidrio, los degradados multicolor y las sombras marcadas se leen como plantilla genérica. Si hay sombra, es suave (opacidad menor a 0.08).
**Ejemplo.** Mal: botón "Agendar" con degradado morado a naranja y panel de vidrio sobre la foto. Bien: botón con relleno verde sólido, borde de 1 px en las tarjetas y sombra casi imperceptible.
Fuente: vectorlab-ux-skills/anti-slop y colour-palette.

### 5.5 Reservar el rojo y el verde para su significado
**Definición.** El rojo significa error o acción destructiva; el verde, éxito. Si el acento de marca es rojo o verde, los estados deben distinguirse además con texto e ícono.
**Ejemplo.** Mal: botón "Cancelar cita" y botón "Agendar cita" ambos en rojo de marca. Bien: "Agendar cita" en el acento; "Cancelar cita" como botón secundario neutro, con confirmación que nombra la cita.

### 5.6 El placeholder también debe tener contraste
**Definición.** El texto de ejemplo dentro de un campo debe cumplir contraste de lectura. Si no se puede, se quita y se usa texto de ayuda debajo.
**Ejemplo.** Mal: "nombre@correo.com" en gris muy pálido sobre blanco. Bien: ejemplo en gris con contraste suficiente, o texto de ayuda visible bajo la etiqueta.
Fuente: vectorlab-ux-skills/labels.

---

## 6. Espaciado y retícula

### 6.1 Escala de 8 px (4 px para lo pequeño)
**Definición.** Márgenes, espacios entre secciones y relleno de tarjetas son múltiplos de 8 px; los espacios internos pequeños, múltiplos de 4 px. Usa pocos valores: 4, 8, 12, 16, 24, 32, 48, 64.
**Ejemplo.** Mal: separaciones de 13, 22 y 37 px elegidas a ojo. Bien: 16 px de relleno, 24 px entre tarjetas, 48 px entre título de sección y su contenido.
Fuente: vectorlab-ux-skills/spacing; design-taste-frontend/system.md.

### 6.2 Espacio entre secciones mayor que dentro de ellas
**Definición.** Cuando dudes, agrega espacio entre secciones, no entre elementos de una misma sección. Así se ve el ritmo de la página.
**Ejemplo.** Mal: "Servicios" y "Equipo" separados por 16 px, igual que dos líneas de un párrafo. Bien: 96 px entre secciones, 12 px entre líneas de una lista.

### 6.3 Un solo ancho de contenido, bordes iguales
**Definición.** El contenido principal vive en una columna centrada con ancho máximo y márgenes laterales iguales a izquierda y derecha. El fondo y la barra de navegación sí ocupan todo el ancho.
**Ejemplo.** Mal: la sección de precios es más ancha que la de servicios y la foto sobresale a la derecha. Bien: todas las secciones comparten el mismo ancho de contenido y las mismas líneas laterales.
Fuente: vectorlab-ux-skills/viewports; design-taste-frontend/system.md.

### 6.4 Misma altura para el mismo tipo de tarjeta
**Definición.** Las tarjetas de una misma fila miden lo mismo. Si una crece por tener más texto, todas se ajustan.
**Ejemplo.** Mal: tres tarjetas de doctores con alturas distintas y botones a distinto nivel. Bien: las tres igual de altas, el botón "Ver perfil" alineado al fondo.
Fuente: design-taste-frontend/system.md (una altura por fila de tarjetas).

### 6.5 Reservar espacio para lo que carga después
**Definición.** Imágenes, mapas, insignias y contadores deben tener su lugar apartado desde el inicio para que nada salte cuando cargan.
**Ejemplo.** Mal: el mapa carga tarde y empuja el botón "Cómo llegar" hacia abajo justo cuando el dedo iba a tocarlo. Bien: el mapa tiene alto fijo reservado y el botón no se mueve.
Fuente: vectorlab-ux-skills/spacing y transitions.

---

## 7. Botones, enlaces y acciones

### 7.1 Una sola acción principal por vista
**Definición.** Solo un botón con relleno marca la acción que importa. Las demás acciones usan un estilo secundario o son enlaces de texto.
**Ejemplo.** Mal: "Agendar cita", "Llamar" y "Ver precios" los tres con relleno de color. Bien: "Agendar cita" relleno, "Llamar al consultorio" como botón con borde.
Fuente: design-taste-frontend/system.md; vectorlab-ux-skills/anti-slop.

### 7.2 Etiquetas que empiezan con verbo y dicen qué obtiene la persona
**Definición.** Un botón debe decir la acción y su objeto en 1 a 5 palabras. Evita "Enviar", "Aceptar", "Continuar", "Saber más", "Descubre".
**Ejemplo.** Mal: "Enviar" / "Saber más". Bien: "Agendar valoración" / "Ver precios de ortodoncia".
Fuente: vectorlab-ux-skills/verbs; design-taste-frontend/copy.md.

### 7.3 La acción principal se llama igual en todo el sitio
**Definición.** El mismo texto en menú, hero, cierre y barra móvil. En una misma pantalla, no repetirla más de dos veces.
**Ejemplo.** Mal: tres botones iguales juntos en una pantalla de móvil. Bien: el botón del hero y, solo cuando ese ya salió de pantalla, la barra fija inferior.
Fuente: design-taste-frontend/copy.md y system.md.

### 7.4 Botón de WhatsApp: claro, con texto y con mensaje prellenado
**Definición.** Si el canal principal es WhatsApp, el botón dice qué pasa al tocarlo y abre el chat con un mensaje inicial. No debe tapar otros botones ni contenido.
**Ejemplo.** Mal: ícono verde flotante sin texto sobre el botón de cita en móvil. Bien: botón "Agendar por WhatsApp" con mensaje prellenado "Hola, quiero agendar una valoración", y debajo "Respondemos de lunes a sábado, 9 a 18 h".

### 7.5 Teléfono y dirección que se pueden tocar
**Definición.** El número debe ser un enlace de llamada (`tel:`) y la dirección debe abrir el mapa. Copiar un número de texto plano es fricción innecesaria.
**Ejemplo.** Mal: teléfono como texto en una imagen del banner. Bien: "Llamar al 55 0000 0000" como enlace de llamada y "Cómo llegar" que abre el mapa con la dirección ya cargada.

### 7.6 Área tocable de 44 px (24 px es el piso de WCAG)
**Definición.** Botones y enlaces aislados deben tener una zona tocable de 44x44 px. WCAG 2.2 AA exige al menos 24x24 px (o suficiente separación). Un ícono de 16 px necesita relleno para llegar al área.
**Ejemplo.** Mal: ícono de cerrar de 16 px sin relleno, pegado al borde. Bien: ícono de 16 px dentro de un botón de 44x44 px.
Fuente: vectorlab-ux-skills/viewports; WCAG 2.2 criterio 2.5.8 (w3.org).

### 7.7 Botones con ícono: nombre y descripción siempre
**Definición.** Un botón solo con ícono necesita un nombre accesible y una indicación visible al pasar el cursor o enfocarlo. Para la acción principal o una acción ambigua se deja la etiqueta visible.
**Ejemplo.** Mal: tres íconos sin texto en el encabezado (¿teléfono? ¿chat? ¿ubicación?). Bien: ícono más palabra "Llamar" en el botón principal; ícono con etiqueta accesible y tooltip en los secundarios.
Fuente: vectorlab-ux-skills/icon-buttons.

### 7.8 Un botón de envío nunca queda deshabilitado
**Definición.** Un botón apagado no dice por qué. Déjalo activo; si faltan datos, lleva a la persona al primer error y explícalo en el campo.
**Ejemplo.** Mal: "Agendar cita" en gris sin explicación hasta llenar todo. Bien: botón activo; al tocarlo con datos faltantes, el cursor salta al primer campo con el mensaje "Falta tu teléfono".
Fuente: vectorlab-ux-skills/forms.

---

## 8. Formularios

### 8.1 Etiqueta visible en cada campo; el placeholder no la sustituye
**Definición.** Cada campo lleva su etiqueta escrita encima, ligada al campo. El placeholder solo sirve para mostrar un formato de ejemplo (`nombre@correo.com`) y desaparece al escribir.
**Ejemplo.** Mal: campo con placeholder "Teléfono" y sin etiqueta; al escribir se pierde qué se pedía. Bien: etiqueta "Teléfono" encima y placeholder "55 1234 5678".
Fuente: vectorlab-ux-skills/labels; design-taste-frontend/system.md.

### 8.2 Pedir solo lo necesario (máximo seis campos)
**Definición.** Cada campo extra reduce las citas agendadas. Pide nombre, teléfono y motivo; lo demás se recoge en la consulta. Evita duplicar datos (confirmar correo, nombre y apellido separados si no hace falta).
**Ejemplo.** Mal: formulario de 14 campos con fecha de nacimiento, ocupación y dirección completa. Bien: nombre, teléfono, tratamiento de interés y horario preferido (4 campos).
Fuente: vectorlab-ux-skills/forms; design-taste-frontend/system.md (seis campos como máximo).

### 8.3 Una columna, campos grandes y tipo correcto
**Definición.** Los campos van en una columna. Texto de 16 px para que el navegador del móvil no haga zoom, y el tipo de campo correcto (`tel`, `email`) con `autocomplete` para que el teléfono rellene solo.
**Ejemplo.** Mal: dos columnas en el móvil, campos de 13 px y teclado de letras para el teléfono. Bien: una columna, campos de 48 px, teclado numérico para el teléfono.
Fuente: design-taste-frontend/system.md; vectorlab-ux-skills/forms.

### 8.4 Validar al salir del campo, no mientras escribe
**Definición.** Un campo no se marca como inválido hasta que la persona lo abandona con un valor incorrecto. Al corregir, el error desaparece de inmediato.
**Ejemplo.** Mal: borde rojo desde la primera letra del correo. Bien: el error aparece al salir del campo sin "@" y se quita en cuanto se vuelve a teclear.
Fuente: vectorlab-ux-skills/forms.

### 8.5 Errores bajo su campo, con la solución
**Definición.** Cada error aparece junto al campo, en una frase, empezando por cómo arreglarlo. No se culpa a la persona y no se muestran códigos técnicos.
**Ejemplo.** Mal: "Has introducido un teléfono incorrecto" arriba de la página. Bien: bajo el campo, "Escribe tu teléfono de 10 dígitos, por ejemplo 55 1234 5678".
Fuente: vectorlab-ux-skills/errors y forms.

### 8.6 No perder lo escrito
**Definición.** Si falla el envío o se recarga la página, los datos siguen ahí. Los borradores se guardan en el navegador (excepto datos sensibles) y se borran al enviar con éxito.
**Ejemplo.** Mal: error de servidor y el formulario queda vacío. Bien: el mensaje dice "No pudimos enviar. Tus datos siguen aquí; intenta de nuevo o escríbenos por WhatsApp".
Fuente: vectorlab-ux-skills/defaults y forms.

### 8.7 Confirmar solo cuando realmente se envió
**Definición.** El mensaje de éxito aparece después de que el servidor respondió, nunca por adelantado. Debe decir qué se envió, qué sigue y cuándo habrá respuesta.
**Ejemplo.** Mal: "¡Gracias!" instantáneo aunque no haya conexión. Bien: "Recibimos tu solicitud de valoración. Te escribimos hoy antes de las 18 h."
Fuente: design-taste-frontend/system.md (éxito solo tras envío real, sin ventana modal).

### 8.8 Datos de salud: pedir lo mínimo y decir para qué
**Definición.** Un formulario de clínica recibe datos delicados. Pide solo lo necesario para la cita, indica cerca del botón para qué se usarán y enlaza el aviso de privacidad. Los detalles clínicos se tratan en consulta, no en el formulario web.
**Ejemplo.** Mal: campo abierto "Describe todos tus padecimientos y medicamentos" sin aviso. Bien: "Motivo de la consulta (opcional, una línea)" y bajo el botón "Usamos tus datos solo para confirmar tu cita. Aviso de privacidad".

---

## 9. Navegación y estructura de página

### 9.1 Una historia por página, de arriba abajo
**Definición.** La página sigue un orden claro: promesa, pruebas, oferta, objeciones y acción. El mismo botón se repite en el hero y cerca del final.
**Ejemplo.** Mal: la portada empieza con el historial de la clínica y deja el botón de cita al final del pie. Bien: hero con qué hacemos y dónde, precios desde, doctores con foto, reseñas reales, preguntas frecuentes, botón de cierre.
Fuente: vectorlab-ux-skills/page-patterns (marketing).

### 9.2 El primer título dice qué es y dónde está
**Definición.** El h1 nombra la categoría y el lugar (o a quién atiende), en 2 a 8 palabras. La primera pantalla incluye un dato duro: precio, ubicación, horario o plazo.
**Ejemplo.** Mal: "Tu sonrisa, nuestra pasión". Bien: "Clínica dental en Coyoacán. Limpieza desde $600, citas el mismo día."
Fuente: design-taste-frontend/copy.md.

### 9.3 Menú corto, con palabras
**Definición.** Entre 4 y 6 enlaces de una palabra, la acción principal como único botón del menú, y el logotipo enlazado al inicio. En móvil el menú se convierte en un botón que abre los mismos destinos.
**Ejemplo.** Mal: 11 enlaces con submenús que se despliegan al pasar el cursor y cambian en móvil. Bien: Servicios, Equipo, Precios, Contacto y botón "Agendar cita".
Fuente: design-taste-frontend/system.md; vectorlab-ux-skills/viewports.

### 9.4 Cada sección tiene un solo trabajo
**Definición.** Cada bloque cumple una función (explicar, probar, dar precio, resolver dudas, llamar a la acción). Una sección no compite con otra ni mete otra oferta.
**Ejemplo.** Mal: la sección de preguntas frecuentes incluye una promoción nueva con su propio botón. Bien: preguntas y respuestas, y al final el mismo botón de cita.
Fuente: vectorlab-ux-skills/page-patterns.

### 9.5 Datos prácticos siempre a la vista
**Definición.** Dirección, horario, teléfono y cómo llegar deben poder encontrarse en la portada y en el pie sin buscarlos, con el estado "abierto ahora" si es posible.
**Ejemplo.** Mal: horario solo dentro de una imagen y dirección en una página de "Contacto" a tres clics. Bien: bloque "Cómo llegar" con mapa, horarios por día y teléfono en la portada y en el pie.
Fuente: design-taste-frontend/system.md (horarios en lista, no en foto).

### 9.6 Precios claros en tabla, sin ocultar el total
**Definición.** Muestra el precio o el "desde", qué incluye y cuánto dura. Una persona que no ve el precio supone que es caro o que se lo ocultan.
**Ejemplo.** Mal: "Cotiza con nosotros" en todos los servicios. Bien: tabla con "Limpieza dental: 45 min, desde $600, incluye revisión", y nota "Valoración inicial sin costo".
Fuente: design-taste-frontend/copy.md (un precio vende más que un adjetivo); vectorlab-ux-skills/page-patterns (sin trucos en precios).

### 9.7 Pie de página con lo legal y lo útil
**Definición.** El pie cierra la página con logotipo, datos de contacto, aviso de privacidad y enlaces legales. No es una tercera presentación de ventas.
**Ejemplo.** Mal: pie con otro carrusel de promociones. Bien: pie con dirección, horarios, teléfono, aviso de privacidad, y una línea con el año y el nombre de la clínica.

---

## 10. Estados: carga, vacío, error, éxito

### 10.1 Cargas rápidas sin indicador; cargas largas con esqueleto
**Definición.** Menos de 100 ms: nada. Entre 100 ms y 1 s: indicador pequeño en el botón que se tocó. Más de 1 s: un esqueleto con la forma del contenido, no un círculo gigante al centro.
**Ejemplo.** Mal: pantalla blanca con un spinner enorme mientras carga la lista de horarios. Bien: filas grises con la forma de los horarios y el botón con "Buscando...".
Fuente: vectorlab-ux-skills/loaders.

### 10.2 Un estado vacío nunca es un callejón sin salida
**Definición.** Si no hay resultados, dice qué debería haber, por qué conviene y ofrece una acción. Con filtros activos, incluye "Quitar filtros".
**Ejemplo.** Mal: "Sin resultados" y nada más. Bien: "No hay citas el sábado. Prueba el viernes o escríbenos por WhatsApp" con botón "Ver otros días".
Fuente: vectorlab-ux-skills/empty-states.

### 10.3 Errores: qué pasó, por qué importa, cómo seguir
**Definición.** Menos de dos frases, en lenguaje llano, sin culpar a la persona ni mostrar códigos. El tipo de mensaje se ajusta a la gravedad: junto al campo, aviso o página completa.
**Ejemplo.** Mal: "Error 500. Intente más tarde". Bien: "No pudimos guardar tu cita. Revisa tu conexión e intenta de nuevo, o llámanos al 55 0000 0000".
Fuente: vectorlab-ux-skills/errors.

### 10.4 Éxito: confirmar con datos y siguiente paso
**Definición.** La confirmación repite lo importante (fecha, hora, lugar), dice qué sigue y ofrece la acción útil siguiente (agregar al calendario, cómo llegar).
**Ejemplo.** Mal: "Cita registrada". Bien: "Martes 3 de diciembre, 10:30. Consultorio 2, Calle X 123. Llega 10 minutos antes. [Agregar al calendario] [Cómo llegar]".
Fuente: marco interno de Meridian (Post-visit follow-up message, Peak-end rule).

### 10.5 Confirmar solo lo irreversible, nombrando lo que se pierde
**Definición.** Para cancelar o borrar, el diálogo nombra lo afectado y el botón usa un verbo claro. "¿Seguro?" no sirve. Para una sola edición simple se usa la edición en el mismo lugar, no un modal.
**Ejemplo.** Mal: "¿Estás seguro?" con botones "Sí" y "No". Bien: "¿Cancelar la cita del martes 3 a las 10:30?" con "Cancelar cita" y "Mantener cita".
Fuente: vectorlab-ux-skills/surfaces.

---

## 11. Movimiento y animación

### 11.1 Duraciones cortas y curva suave
**Definición.** Los movimientos de interfaz duran entre 100 y 300 ms. Entran con curva de salida suave y salen un poco más rápido. Nada de rebotes ni resortes.
**Ejemplo.** Mal: botón que rebota 600 ms al aparecer. Bien: aparece con un desvanecimiento de 200 ms.
Fuente: vectorlab-ux-skills/motion.

### 11.2 Animar solo transform y opacity
**Definición.** Anima desplazamientos y transparencia. Animar ancho, alto, márgenes o posiciones hace que la página salte y se sienta lenta.
**Ejemplo.** Mal: acordeón que anima la altura y empuja el contenido. Bien: panel que aparece con desvanecimiento y desplazamiento de 8 px en un espacio ya reservado.
Fuente: vectorlab-ux-skills/motion y transitions.

### 11.3 Sin bucles decorativos infinitos ni reproducción automática
**Definición.** Los carruseles automáticos, logotipos que giran y fondos que se mueven distraen. Todo lo que se mueve por más de 5 segundos debe poderse pausar.
**Ejemplo.** Mal: carrusel que cambia solo cada 4 segundos mientras la persona lee el precio. Bien: tres tarjetas fijas lado a lado; si hay carrusel, con botón de pausa y control manual.
Fuente: vectorlab-ux-skills/motion; WCAG 2.2 criterio 2.2.2 (w3.org).

### 11.4 Respetar "reducir movimiento"
**Definición.** Si el sistema de la persona pide menos movimiento, quita desplazamientos, zoom y parallax; deja cambios instantáneos o solo desvanecimientos cortos. El significado nunca depende solo del movimiento.
**Ejemplo.** Mal: efecto parallax en el hero que sigue activo aunque la persona lo desactivó en su teléfono. Bien: con `prefers-reduced-motion`, el hero es una imagen estática.
Fuente: vectorlab-ux-skills/reduced-motion.

---

## 12. Accesibilidad (WCAG 2.2 AA)

### 12.1 Contraste: 4.5:1 en texto, 3:1 en texto grande y en controles
**Definición.** Es la base de lectura. Se aplica a texto, bordes de campos y a íconos que transmiten información. Verifica con una herramienta, no a ojo.
**Ejemplo.** Mal: botón con texto blanco sobre un verde claro con contraste de 2:1. Bien: texto blanco sobre un verde oscuro con contraste mayor a 4.5:1.
Fuente: WCAG 2.2 criterios 1.4.3 y 1.4.11 (w3.org).

### 12.2 Foco visible y no tapado
**Definición.** Al navegar con teclado debe verse dónde está el foco. Nunca se quita el contorno sin ofrecer uno equivalente de alto contraste (como mínimo 3:1), y el foco no puede quedar oculto detrás de barras fijas.
**Ejemplo.** Mal: `outline: none` sin reemplazo y barra fija que tapa el campo enfocado. Bien: anillo de 2 px con separación de 2 px en el color de acento y espacio de desplazamiento para que la barra no lo cubra.
Fuente: vectorlab-ux-skills/keyboard; WCAG 2.2 criterios 2.4.7 y 2.4.11.

### 12.3 Todo se puede operar con teclado
**Definición.** Enlaces, botones, menús y formularios funcionan con Tab, Shift+Tab, Enter y Espacio. El orden de tabulación sigue el orden visual. Los diálogos atrapan el foco y lo devuelven al cerrarse.
**Ejemplo.** Mal: menú que solo se abre con el cursor encima. Bien: el mismo menú se abre con Enter, se cierra con Escape y devuelve el foco al botón de menú.
Fuente: vectorlab-ux-skills/keyboard.

### 12.4 Enlace "Saltar al contenido"
**Definición.** Un enlace como primer elemento que lleva directo al contenido principal y que se muestra al presionar Tab, para no recorrer todo el menú cada vez.
**Ejemplo.** Mal: 14 pulsaciones de Tab para llegar al formulario. Bien: primer Tab muestra "Saltar al contenido" y Enter lleva al título principal.
Fuente: vectorlab-ux-skills/keyboard; design-taste-frontend/system.md.

### 12.5 Etiquetas programáticas y nombres accesibles
**Definición.** Cada campo está ligado a su etiqueta (`label for`) y cada botón de ícono tiene nombre. Sin eso el lector de pantalla dice solo "campo de texto".
**Ejemplo.** Mal: caja de búsqueda sin nombre accesible. Bien: `aria-label="Buscar tratamiento"` o etiqueta visible "Buscar".
Fuente: vectorlab-ux-skills/labels; WCAG 2.2 criterios 1.3.1, 3.3.2, 4.1.2.

### 12.6 Texto alternativo en imágenes con contenido
**Definición.** Las fotos que informan llevan una descripción corta; las decorativas llevan alt vacío. Los pacientes con lector de pantalla no ven la foto.
**Ejemplo.** Mal: `alt="IMG_3042.jpg"`. Bien: `alt="Consultorio 2 con sillón dental y luz natural"`; foto decorativa con `alt=""`.

### 12.7 Idioma y estructura de encabezados
**Definición.** La página declara su idioma (`lang="es-MX"`) y usa un solo h1 y encabezados en orden (h1, h2, h3) sin saltos. Los lectores de pantalla navegan por ellos.
**Ejemplo.** Mal: h3 usado para dar tamaño al texto y dos h1. Bien: un h1, una sección por h2 y los subtítulos como h3.

### 12.8 Zoom y reflujo sin romper la página
**Definición.** El contenido debe poder agrandarse al 200% y reorganizarse en un ancho de 320 px sin desplazamiento horizontal ni texto cortado. No se bloquea el zoom del navegador.
**Ejemplo.** Mal: tabla de precios que obliga a deslizar de lado toda la página al agrandar. Bien: la página se reacomoda en una columna y solo la tabla desliza dentro de su propio marco.
Fuente: WCAG 2.2 criterios 1.4.4 y 1.4.10; vectorlab-ux-skills/viewports.

---

## 13. Móvil y viewports

### 13.1 Diseñar y probar en 375 px y en 1280 px
**Definición.** La página no debe desplazarse de lado en ninguno de los dos anchos. Probar ambos antes de entregar. La mayoría de pacientes llega desde el teléfono.
**Ejemplo.** Mal: la página mide 420 px de ancho de contenido y aparece barra horizontal en el celular. Bien: ancho del documento igual al de la pantalla en 375 px y en 1280 px.
Fuente: vectorlab-ux-skills/viewports.

### 13.2 Tres puntos de quiebre, no más
**Definición.** Usa solo estrecho (375), medio (768) y ancho (1280). Inventar uno nuevo para una pantalla suelta genera arreglos que se rompen.
**Ejemplo.** Mal: media query a 913 px solo para una tarjeta. Bien: la tarjeta se acomoda con los tres puntos estándar.
Fuente: vectorlab-ux-skills/viewports.

### 13.3 Barra de acción fija en el móvil
**Definición.** En móvil, una barra inferior con la acción principal (cita, llamar o WhatsApp) mantiene el botón al alcance del pulgar. Se oculta cuando el botón del hero ya está a la vista, para no repetirlo.
**Ejemplo.** Mal: botón de cita que se queda arriba y desaparece al bajar. Bien: barra inferior de 48 px con "Agendar cita" que aparece al pasar el hero.
Fuente: design-taste-frontend/system.md (action bar bajo 640 px).

### 13.4 Nada que dependa del cursor encima
**Definición.** En pantallas táctiles no existe "pasar el cursor". Toda acción importante debe verse sin hover; los extras con hover van solo donde hay cursor.
**Ejemplo.** Mal: precio y botón que solo aparecen al pasar el ratón sobre la tarjeta. Bien: precio y botón siempre visibles; el hover solo realza la tarjeta.
Fuente: vectorlab-ux-skills/viewports.

### 13.5 Menú móvil y navegación a pantalla completa
**Definición.** En estrecho, el menú se abre con un botón de 44 px y muestra los mismos destinos en filas amplias. Sin barra lateral permanente.
**Ejemplo.** Mal: menú de escritorio comprimido en 375 px con enlaces diminutos. Bien: botón "Menú" que abre una hoja de pantalla completa con filas de 56 px y el botón de cita al final.
Fuente: design-taste-frontend/system.md; vectorlab-ux-skills/viewports.

### 13.6 Tablas y comparativos que no rompen la pantalla
**Definición.** En móvil las cuadrículas pasan a una columna. Las tablas anchas se desplazan dentro de su propio marco, sin achicar el texto por debajo de 12 px.
**Ejemplo.** Mal: tabla de 5 columnas a 10 px de letra. Bien: lista de tarjetas por servicio (nombre, duración, precio) o tabla con desplazamiento interno de texto a 14 px.
Fuente: vectorlab-ux-skills/viewports y page-patterns.

---

## 14. Antipatrones a evitar

### 14.1 Ventanas emergentes al entrar
**Definición.** Un modal con promoción o boletín antes de que la persona lea algo bloquea la página y molesta. Peor aún en móvil.
**Ejemplo.** Mal: a los 3 segundos aparece "Suscríbete y recibe 10%". Bien: el contenido se ve libre; la invitación a la lista, si existe, va al final o dentro del artículo.
Fuente: vectorlab-ux-skills/surfaces (no apilar ni abusar de modales).

### 14.2 Carrusel principal que rota solo
**Definición.** Los carruseles esconden mensajes y la mayoría no los ve. El hero debe tener una sola promesa y una o dos acciones.
**Ejemplo.** Mal: hero con 5 diapositivas de servicios que cambian cada 4 segundos. Bien: un hero fijo con el servicio principal; el resto, en la sección de servicios.
Fuente: vectorlab-ux-skills/page-patterns (hero: una promesa).

### 14.3 Fotos de banco de imágenes genéricas
**Definición.** Personas sonriendo con bata que no pertenecen a la clínica restan confianza. Usa fotos reales del lugar, el equipo y el trabajo, con luz y estilo coherentes.
**Ejemplo.** Mal: pareja de modelos con dientes perfectos de un banco de imágenes. Bien: foto real de la doctora en su consultorio y de la recepción.
Fuente: design-taste-frontend/references/photos.md (fotografías reales del cliente).

### 14.4 Texto de relleno y lemas vacíos
**Definición.** Frases como "Cuidamos de ti con pasión" no informan. Cada frase debe poder decirse en voz alta a un cliente y contener un dato.
**Ejemplo.** Mal: "Soluciones integrales de salud para toda tu familia". Bien: "Pediatría y medicina familiar. Consulta desde $450, sábados de 9 a 14 h."
Fuente: design-taste-frontend/copy.md.

### 14.5 Decoración sin función
**Definición.** Íconos dentro de cada campo, cápsulas de color alrededor de datos fijos, ilustraciones de personajes en estados vacíos y fondos animados añaden ruido. Si solo decora, se quita.
**Ejemplo.** Mal: la fecha de la publicación dentro de una cápsula lila y cada campo con un ícono. Bien: fecha como texto gris y solo el ícono de búsqueda y el de mostrar contraseña, que sí cumplen función.
Fuente: vectorlab-ux-skills/anti-slop.

### 14.6 Chat flotante o widget que tapa la acción
**Definición.** Burbujas de chat, cookies y avisos flotantes no deben cubrir el botón de cita ni el texto. Un solo elemento fijo por pantalla.
**Ejemplo.** Mal: burbuja de chat sobre la barra de cita en móvil y banner de cookies que ocupa la mitad de la pantalla. Bien: barra de cita fija, chat integrado en el mismo botón de contacto y banner de cookies compacto.

### 14.7 Información clave solo en PDF o imagen
**Definición.** Listas de precios, horarios y políticas en un PDF o una imagen no se leen bien en móvil, no se indexan fácilmente y no son accesibles.
**Ejemplo.** Mal: "Ver lista de precios (PDF de 3 MB)". Bien: precios en la página en tabla de texto, con el PDF solo como descarga opcional.

### 14.8 Dependencia de colores, íconos o abreviaturas sin explicar
**Definición.** Siglas médicas, códigos o íconos sin etiqueta obligan al paciente a adivinar. Escribe el nombre completo o una explicación corta.
**Ejemplo.** Mal: "Cx de Tx y RX panorámica". Bien: "Limpieza dental y radiografía panorámica".
Fuente: Nielsen, heurística 2 (coincidencia con el mundo real).

---

## Fuentes

**Bibliotecas locales revisadas (esta máquina):**
- `/root/.claude/plugins/synced/56cc93ac-d36f-41ac-ba2b-31981fa83c3e_98d10a2a-8242-43e2-8e28-bca8669d4c66/2eba37c0-825c-4279-abca-7e1fe8efc381/skills/` (vectorlab-ux-skills): ux-audit, spacing, typography, colour-palette, anti-slop, viewports, page-patterns (incluye reference/marketing.md), surfaces, forms, keyboard, icon-buttons, defaults, verbs, errors, labels, loaders, empty-states, motion, transitions, reduced-motion.
- `/home/user/MarketingAgent-/.agents/skills/design-taste-frontend/` (SKILL.md y references/ system.md, copy.md, photos.md, gate.md).
- Marco interno de Meridian: `AGENTS.md` del repositorio (Peak-end rule, Post-visit follow-up message).

**Web (consultadas el 2026-11-24):**
- https://lawsofux.com/ (Fitts, Hick, Jakob, Miller, Doherty, Tesler, Postel, Peak-End, Serial Position, Von Restorff, Zeigarnik, Aesthetic-Usability)
- https://www.nngroup.com/articles/ten-usability-heuristics/
- https://www.toptal.com/designers/gestalt-principles
- https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/
- https://webaim.org/standards/wcag/wcag22

Nota: las búsquedas web no devolvieron el texto completo de las páginas "Understanding" de W3C; los niveles de conformidad (1.4.3, 1.4.11, 2.4.7 y 2.5.8 en AA; 2.2.2 en nivel A; 2.4.13 en AAA) deben confirmarse en w3.org antes de usarse en una auditoría formal.
