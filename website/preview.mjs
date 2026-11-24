// Renderiza cada página completa a PNG, para revisar cambios sin publicar.
// Requiere el sitio servido en local:
//   cd website/site && python3 -m http.server 8099
// Luego:  node website/preview.mjs   -> website/preview/*.png (ignorado por git)
import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const P=[['index.html','inicio'],['metodologia.html','metodologia'],
         ['calculadora.html','calculadora'],['investigaciones/index.html','investigaciones'],
         ['investigaciones/camino-del-paciente-tijuana-2026-11/index.html','estudio']];
const p=await(await b.newContext({viewport:{width:1280,height:900},deviceScaleFactor:1})).newPage();
for(const [f,n] of P){
  await p.goto('http://127.0.0.1:8099/'+f,{waitUntil:'networkidle'});
  await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90))}window.scrollTo(0,0)});
  await p.waitForTimeout(600);
  await p.screenshot({path:`/home/user/MarketingAgent-/website/preview/${n}.png`,fullPage:true});
  console.log('shot',n);
}
await b.close();
