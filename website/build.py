# Generates the Investigaciones pages in the live site's design language.
HEAD = """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{canon}">
<meta property="og:type" content="website">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="/img/og.jpg">
<meta property="og:locale" content="es_MX">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#9B2226">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&amp;display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap">
<style>
h1,h2,h3{{font-family:'Inter Tight','Inter',-apple-system,BlinkMacSystemFont,sans-serif !important;font-weight:700 !important;letter-spacing:-0.035em !important}}
.hl{{background:linear-gradient(transparent 60%,#EFC9C6 60%);padding:0 .06em}}
body{{margin:0;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Inter',system-ui,sans-serif;background:#F5F5F7;color:#1d1d1f;-webkit-font-smoothing:antialiased}}
a{{color:#9B2226;text-decoration:none}}a:hover{{text-decoration:underline}}
.glass{{background:linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.30));backdrop-filter:blur(26px) saturate(180%);-webkit-backdrop-filter:blur(26px) saturate(180%);border:1px solid rgba(255,255,255,0.65);box-shadow:inset 0 1px 0 rgba(255,255,255,0.95),inset 0 -1px 0 rgba(255,255,255,0.3),0 24px 60px rgba(80,20,22,0.10);border-radius:4px}}
.glassd{{background:#FFFFFF;border:1px solid rgba(0,0,0,0.1);box-shadow:0 10px 36px rgba(0,0,0,0.06);border-radius:4px;color:#1D1D1F}}
.nl{{color:#1D1D1F;font-size:13px;min-height:44px;display:inline-flex;align-items:center;border-bottom:2px solid transparent}}
.nl:hover{{text-decoration:none;border-bottom-color:rgba(255,255,255,0.5)}}
.nl.on{{border-bottom-color:#1D1D1F;font-weight:600}}
a:focus-visible,button:focus-visible{{outline:3px solid #9B2226;outline-offset:2px}}
.wrap{{width:100%;max-width:1080px;margin:0 auto;padding:0 24px;box-sizing:border-box}}
.eyebrow{{font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#9B2226;margin:0 0 14px}}
.lede{{font-size:19px;line-height:1.55;color:#3A3A3C;max-width:62ch;margin:18px 0 0}}
.meta{{display:flex;flex-wrap:wrap;gap:8px 28px;font-size:13px;color:#6E6E73;margin-top:22px}}
.meta b{{color:#1D1D1F;font-weight:600}}
.card{{display:block;padding:28px;margin-top:18px;color:inherit}}
.card:hover{{text-decoration:none;box-shadow:0 14px 44px rgba(0,0,0,0.09)}}
.card h3{{margin:10px 0 0;font-size:25px;line-height:1.2}}
.figs{{display:flex;flex-wrap:wrap;gap:10px 34px;margin-top:20px}}
.fig b{{display:block;font-family:'Inter Tight',sans-serif;font-size:34px;font-weight:700;letter-spacing:-.04em;color:#9B2226;line-height:1}}
.fig span{{font-size:12.5px;color:#6E6E73}}
.bar{{margin-top:22px}}
.bar .r{{display:flex;justify-content:space-between;align-items:baseline;font-size:14px;color:#3A3A3C;gap:16px}}
.bar .r b{{font-family:'Inter Tight',sans-serif;font-size:27px;font-weight:700;letter-spacing:-.04em;color:#9B2226}}
.bar .t{{height:9px;background:#E3E3E8;border-radius:999px;overflow:hidden;margin-top:7px}}
.bar .t i{{display:block;height:100%;background:#9B2226;border-radius:999px}}
.bar.q .t i{{background:#A1A1A6}}
h2{{font-size:30px;line-height:1.18;margin:54px 0 0}}
p{{font-size:16.5px;line-height:1.65;color:#3A3A3C;max-width:66ch}}
.note{{background:#fff;border-left:3px solid #9B2226;padding:20px 24px;margin-top:30px;border-radius:0 4px 4px 0}}
.note p{{margin:0;font-size:15.5px}}
ul{{max-width:66ch;padding-left:20px}} li{{font-size:16.5px;line-height:1.6;color:#3A3A3C;margin:9px 0}}
</style>
</head>
<body>
<div class="wrap" style="display:flex;justify-content:center">
<nav class="glass" style="position:sticky;top:12px;z-index:20;margin-top:14px;border-radius:4px;width:calc(100% - 32px);max-width:1080px;box-sizing:border-box;padding:0 10px 0 24px;min-height:60px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 24px">
<a href="/" style="display:flex;align-items:center;gap:8px;font-size:17px;font-weight:600;letter-spacing:-0.02em;color:#1D1D1F">
<svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#9B2226" stroke-linecap="round" aria-hidden="true"><circle cx="16" cy="16" r="11" stroke-width="1.6"></circle><ellipse cx="16" cy="16" rx="14.5" ry="5.5" transform="rotate(-22 16 16)" stroke-width="1.6"></ellipse><path d="M13 3l6 26M4 16h24" stroke-width="1" opacity="0.85"></path></svg>Meridian</a>
<div style="display:flex;flex-wrap:wrap;gap:4px 28px;font-size:13px">
<a class="nl" href="/calculadora">Calculadora</a><a class="nl" href="/metodologia">Metodología</a><a class="nl{inv}" href="/investigaciones">Investigaciones</a><a class="nl" href="/demo">Demo</a>
</div>
<a class="igb" aria-label="Instagram" href="https://ig.me/m/_meridianmarketing" style="color:#fff;background:#1D1D1F;font-size:14px;padding:0 20px;min-height:44px;display:inline-flex;align-items:center;border-radius:4px">Escríbenos</a>
</nav>
</div>
"""

FOOT = """
<footer style="background:#111316;color:#A1A1A6;display:flex;justify-content:center;padding:32px 24px;margin-top:84px">
<div style="width:100%;max-width:1080px;display:flex;flex-wrap:wrap;gap:12px 32px;justify-content:space-between;font-size:13px;color:#A1A1A6">
<span>&copy; 2026 Meridian. Todos los derechos reservados.</span>
<span style="display:flex;gap:20px"><a href="/aviso-de-privacidad" style="color:#A1A1A6">Aviso de privacidad</a><span>Tijuana, Baja California</span></span>
</div>
</footer>
</body>
</html>"""

# ---------------- index ----------------
index = HEAD.format(
    title="Investigaciones sobre el mercado médico de Tijuana | Meridian",
    desc="Estudios propios sobre cómo las clínicas de Tijuana captan y pierden pacientes. Método abierto, cifras observables, ninguna clínica nombrada.",
    canon="/investigaciones", inv=" on") + """
<main class="wrap" style="padding-top:64px">
  <p class="eyebrow">Investigaciones</p>
  <h1 style="font-size:46px;line-height:1.08;margin:0;max-width:17ch">Lo que encontramos cuando <span class="hl">medimos el mercado</span>.</h1>
  <p class="lede">Nadie publica datos sobre cómo las clínicas de Tijuana captan pacientes, así que los levantamos nosotros. Aquí dejamos cada estudio completo: el método, la muestra y las cifras, para que cualquiera pueda repetirlo.</p>

  <a class="card glassd" href="/investigaciones/camino-del-paciente-tijuana-2026-11">
    <div class="meta" style="margin-top:0"><span><b>Noviembre 2026</b></span><span>Muestra: <b>40 clínicas</b></span><span>Método: <b>observación pública</b></span></div>
    <h3>El camino del paciente en Tijuana</h3>
    <p style="margin-top:10px">Escribimos a 40 clínicas que pagan anuncios en Meta, como lo haría un paciente, y seguimos el recorrido completo desde el anuncio hasta el mensaje.</p>
    <div class="figs">
      <span class="fig"><b>73%</b><span>falló la prueba</span></span>
      <span class="fig"><b>78%</b><span>sin sitio utilizable</span></span>
      <span class="fig"><b>18%</b><span>botón de WhatsApp roto</span></span>
    </div>
    <p style="margin-top:20px;color:#9B2226;font-weight:600;font-size:15px">Leer el estudio completo &rarr;</p>
  </a>

  <div class="note">
    <p><b>Ninguna clínica se menciona por su nombre</b>, aquí ni en ningún otro lado. Las cifras son agregadas y provienen de páginas públicas. Si algún día trabajamos juntos, su clínica recibe el mismo trato.</p>
  </div>

  <h2>Cómo trabajamos los datos</h2>
  <ul>
    <li>Toda cifra viene de algo observable. No estimamos ingresos ni inventamos promedios.</li>
    <li>Publicamos el método completo para que cualquiera pueda repetir el estudio y contradecirnos.</li>
    <li>Cuando corregimos un número, lo decimos y dejamos dicho qué cambió.</li>
    <li>Ninguna clínica se identifica, ni en texto ni en capturas.</li>
  </ul>
</main>
""" + FOOT
open('investigaciones/index.html','w',encoding='utf-8').write(index)

# ---------------- study ----------------
study = HEAD.format(
    title="El camino del paciente en Tijuana: 40 clínicas medidas | Meridian",
    desc="Escribimos a 40 clínicas de Tijuana que pagan anuncios en Meta, como pacientes. 73% falló la prueba, 78% no tiene sitio utilizable y 18% paga anuncios con el botón de WhatsApp roto.",
    canon="/investigaciones/camino-del-paciente-tijuana-2026-11", inv=" on") + """
<main class="wrap" style="padding-top:64px">
  <p class="eyebrow"><a href="/investigaciones" style="color:#9B2226">Investigaciones</a> &nbsp;/&nbsp; Estudio 01</p>
  <h1 style="font-size:46px;line-height:1.08;margin:0;max-width:19ch">El camino del paciente en Tijuana.</h1>
  <p class="lede">Cuarenta clínicas que pagan anuncios en Meta. Les escribimos como pacientes y seguimos el recorrido completo, desde el anuncio hasta el mensaje. El anuncio casi siempre funciona. Lo que sigue, no.</p>
  <div class="meta">
    <span>Publicado <b>24 de noviembre de 2026</b></span>
    <span>Muestra <b>40 clínicas &middot; 58 anuncios activos</b></span>
    <span>Método <b>observación pública</b></span>
  </div>

  <h2>El método</h2>
  <p>Partimos de clínicas de Tijuana con anuncios activos en Meta, visibles en la biblioteca pública de anuncios. De cada una revisamos el anuncio, el perfil y el sitio si lo había, y después le escribimos un mensaje normal, de noche, como lo mandaría cualquier paciente. Medimos cuánto tardaba la respuesta y si el mensaje llegaba siquiera.</p>
  <p>Todo se probó desde un teléfono con datos móviles, no desde wifi de oficina. Dos de las fallas solo aparecen en una conexión fría.</p>
  <p>De las 40, pudimos registrar respuesta en 26. Las otras 14 quedan sin dato y no se cuentan como falla.</p>

  <h2>Lo que encontramos</h2>

  <div class="bar"><div class="r"><span>Falló la prueba del paciente</span><b>73%</b></div><div class="t"><i style="width:73%"></i></div>
    <p style="font-size:13.5px;color:#6E6E73;margin-top:8px">19 de 26 clínicas probadas.</p></div>

  <div class="bar"><div class="r"><span>No tiene un sitio web utilizable</span><b>78%</b></div><div class="t"><i style="width:78%"></i></div>
    <p style="font-size:13.5px;color:#6E6E73;margin-top:8px">31 de 40. Veinticuatro no tienen ninguno.</p></div>

  <div class="bar"><div class="r"><span>Paga anuncios con el botón de WhatsApp roto</span><b>18%</b></div><div class="t"><i style="width:18%"></i></div>
    <p style="font-size:13.5px;color:#6E6E73;margin-top:8px">7 de 40. El mensaje no llega a nadie.</p></div>

  <div class="bar q"><div class="r"><span>No publica con regularidad</span><b>42%</b></div><div class="t"><i style="width:42%"></i></div>
    <p style="font-size:13.5px;color:#6E6E73;margin-top:8px">17 de 40.</p></div>

  <h2>El hallazgo que no esperábamos</h2>
  <p>De las 19 clínicas que fallaron, solo 3 fallaron por lentitud. <b>Siete fallaron porque el canal estaba roto</b>: el 37% de las fallas. El anuncio corre, el presupuesto se gasta, el paciente toca el botón y no se abre nada.</p>
  <p>Nadie se entera, porque un botón roto no manda alerta. No aparece como venta perdida en ningún reporte. Simplemente parece un mes flojo.</p>
  <p>Una de esas clínicas lleva el mismo anuncio desde octubre de 2024. Trece meses.</p>

  <h2>El tamaño no protege</h2>
  <p>Suponíamos que las cuentas grandes estarían mejor armadas. No es así: de las clínicas con más de 5,000 seguidores, el 70% tampoco tiene un sitio utilizable. La cuenta más grande de la muestra, con 17,000 seguidores, no tiene sitio y no contestó.</p>
  <p>Tener audiencia no es tener un negocio ordenado.</p>

  <h2>Qué puede hacer usted hoy</h2>
  <ul>
    <li>Abra su propio anuncio desde su celular, con datos móviles, no con el wifi del consultorio.</li>
    <li>Toque su propio botón como si fuera paciente. Si abre WhatsApp con un chat a su número, está bien. Si abre otra cosa, o nada, está roto.</li>
    <li>Si está roto: Administrador de anuncios, su anuncio, Editar, la sección de destino. Borre el número y vuelva a escribirlo con lada. Guarde y <b>vuelva a probarlo después de guardar</b>.</li>
  </ul>
  <p>Toma dos minutos y no hace falta contratar a nadie para hacerlo.</p>

  <div class="note">
    <p><b>Ninguna clínica se menciona por su nombre</b>, aquí ni en ningún otro lado, ni aunque nos lo pregunten. Las cifras son agregadas y provienen de páginas públicas de Facebook consultadas en noviembre de 2026.</p>
  </div>

  <div class="note" style="border-left-color:#A1A1A6">
    <p style="color:#6E6E73"><b>Correcciones.</b> Una versión anterior de este conteo clasificaba mal las respuestas y usaba una definición distinta de "sitio utilizable". Las cifras publicadas aquí son las corregidas: 40 clínicas, 78% sin sitio utilizable, 42% sin publicación regular y 18% con el botón roto.</p>
  </div>
</main>
""" + FOOT
open('investigaciones/camino-del-paciente-tijuana-2026-11/index.html','w',encoding='utf-8').write(study)
print("built 2 pages")
