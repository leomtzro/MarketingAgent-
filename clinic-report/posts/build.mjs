import { writeFileSync } from 'fs';
import { POSTS } from './data.mjs';

const css = `
:root{--bg:#f7f4f0;--ink:#1d1d1f;--muted:#67676c;--accent:#9b2226;--cream:#f7f4f0;--L:92px}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#ddd;font-family:"Inter",-apple-system,system-ui,sans-serif;
 -webkit-font-smoothing:antialiased;font-feature-settings:"ss01","tnum"}
.card{width:1080px;height:1350px;background:var(--bg);color:var(--ink);
 padding:var(--L);display:flex;flex-direction:column;position:relative;overflow:hidden}
.card.hook{background:var(--accent);color:var(--cream)}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:84px}
.top img{height:54px}
.pg{font-size:25px;font-weight:600;letter-spacing:.16em;opacity:.55}
.lbl{font-size:27px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;
 color:var(--accent);margin-bottom:36px}
.hook .lbl{color:var(--cream);opacity:.8}
h2{font-family:"Fraunces",Georgia,serif;font-variation-settings:'SOFT' 0,'WONK' 0;font-size:80px;font-weight:700;line-height:1.1;letter-spacing:-.022em;max-width:900px}
.hook h2{font-size:86px}
h2 em{font-style:normal;color:var(--accent)}
.hook h2 em{color:var(--cream);text-decoration:underline;text-decoration-thickness:5px;
 text-underline-offset:12px}
.sub{font-size:38px;font-weight:500;line-height:1.35;margin-top:44px;opacity:.78;max-width:800px}
.body{font-size:38px;font-weight:400;line-height:1.46;margin-top:40px;max-width:840px;color:#3a3a3d}
.body b{font-weight:600;color:var(--ink)}
ul{list-style:none;margin-top:44px;display:grid;gap:26px;max-width:860px}
li{font-size:35px;line-height:1.36;color:#3a3a3d;padding-left:42px;position:relative}
li::before{content:"";position:absolute;left:0;top:16px;width:20px;height:3px;background:var(--accent)}
.note{margin-top:auto;padding-top:40px;border-top:2px solid rgba(29,29,31,.14);
 font-size:30px;line-height:1.4;color:var(--muted);max-width:840px}
.hook .foot{margin-top:auto;font-size:28px;letter-spacing:.16em;text-transform:uppercase;opacity:.75}
`;

let html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style></head><body>`;

for (const p of POSTS) {
  p.slides.forEach((s, i) => {
    const hook = s.kind === 'hook';
    html += `<section class="card${hook ? ' hook' : ''}" id="${p.id}-${i + 1}">
 <div class="top"><img src="${hook ? 'mark-cream.png' : 'mark.png'}"><span class="pg">${i + 1} / 4</span></div>
 <div class="lbl">${s.lbl}</div>
 <h2>${s.h}</h2>
 ${s.sub ? `<p class="sub">${s.sub}</p>` : ''}
 ${s.body ? `<p class="body">${s.body}</p>` : ''}
 ${s.list ? `<ul>${s.list.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
 ${s.note ? `<p class="note">${s.note}</p>` : ''}
 ${hook ? `<div class="foot">Meridian · Diagnóstico Tijuana</div>` : ''}
</section>`;
  });
}
html += `</body></html>`;
writeFileSync('posts.html', html);
console.log('posts.html written:', POSTS.length * 4, 'slides');
