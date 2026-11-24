import{createRequire}from'module';const req=createRequire('/home/user/x.js');const{chromium}=req('playwright');
import {writeFileSync} from 'fs';

const PAGES=[['index.html','Inicio'],['metodologia.html','Metodología'],['calculadora.html','Calculadora'],
             ['demo.html','Demo'],['investigaciones/index.html','Investigaciones'],
             ['investigaciones/camino-del-paciente-tijuana-2026-11/index.html','Estudio 01']];

const AUDIT = () => {
  const out=[];
  const add=(rule,sev,msg,el)=>out.push({rule,sev,msg,el:el?(el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+' "'+(el.textContent||'').trim().slice(0,46)+'"'):''});

  const lum=c=>{const v=c.map(x=>{x/=255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)});
    return .2126*v[0]+.7152*v[1]+.0722*v[2]};
  const parse=s=>{const m=s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m?{c:[+m[1],+m[2],+m[3]],a:m[4]===undefined?1:+m[4]}:null};
  const bgOf=el=>{let n=el;while(n&&n!==document.documentElement){const s=getComputedStyle(n);
      const p=parse(s.backgroundColor);
      if(s.backgroundImage&&s.backgroundImage!=='none')return{img:true};
      if(p&&p.a>0.85)return{c:p.c}; n=n.parentElement}
    return {c:[245,245,247]}};
  const ratio=(a,b)=>{const la=lum(a),lb=lum(b);const hi=Math.max(la,lb),lo=Math.min(la,lb);return (hi+.05)/(lo+.05)};

  // --- contrast (4.1/5.1) ---
  let imgBg=0;
  document.querySelectorAll('p,span,div,a,li,h1,h2,h3,h4,button,label,dt,dd').forEach(el=>{
    if(el.children.length>0 && el.childNodes.length && ![...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))return;
    const t=(el.textContent||'').trim(); if(t.length<3)return;
    const r=el.getBoundingClientRect(); if(r.width<2||r.height<2)return;
    const s=getComputedStyle(el); if(s.visibility==='hidden'||s.display==='none'||+s.opacity===0)return;
    const fg=parse(s.color); if(!fg)return;
    const bg=bgOf(el); if(bg.img){imgBg++;return}
    const size=parseFloat(s.fontSize), w=parseInt(s.fontWeight)||400;
    const large = size>=24 || (size>=18.66 && w>=700);
    const cr=ratio(fg.c,bg.c), need=large?3:4.5;
    if(cr<need) add('5.1 Contraste de texto','ALTO',`${cr.toFixed(2)}:1 (necesita ${need}:1) · ${size}px`,el);
  });

  // --- tap targets (7.6 / 13.3) ---
  document.querySelectorAll('a,button,input,select,[role=button]').forEach(el=>{
    const r=el.getBoundingClientRect(); if(r.width<2||r.height<2)return;
    const s=getComputedStyle(el); if(s.display==='none')return;
    const m=Math.min(r.width,r.height);
    if(m<24) add('7.6 Área tocable','ALTO',`${Math.round(r.width)}x${Math.round(r.height)}px (mínimo WCAG 24)`,el);
    else if(m<44) add('7.6 Área tocable','MEDIO',`${Math.round(r.width)}x${Math.round(r.height)}px (recomendado 44)`,el);
  });

  // --- accessible names ---
  document.querySelectorAll('a,button').forEach(el=>{
    const n=(el.textContent||'').trim()||el.getAttribute('aria-label')||el.getAttribute('title')||'';
    const r=el.getBoundingClientRect(); if(r.width<2)return;
    if(!n) add('12.4 Nombre accesible','ALTO','enlace/botón sin texto ni aria-label',el);
    else if(/^(aqu[ií]|click|clic|leer m[áa]s|m[áa]s|ver m[áa]s|aqui)$/i.test(n)) add('7.8 Texto de enlace','MEDIO',`"${n}" no dice a dónde lleva`,el);
  });

  // --- images ---
  document.querySelectorAll('img').forEach(el=>{
    if(!el.hasAttribute('alt')) add('12.2 Alt','ALTO','imagen sin atributo alt',el);
    else if(el.getAttribute('alt').trim()==='' && el.width>120) add('12.2 Alt','BAJO','imagen grande con alt vacío',el);
    if(!el.getAttribute('loading') && el.getBoundingClientRect().top>window.innerHeight) add('13.6 Carga','BAJO','imagen fuera de pantalla sin loading=lazy',el);
  });

  // --- headings ---
  const hs=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(h=>h.getBoundingClientRect().width>0);
  const h1=hs.filter(h=>h.tagName==='H1');
  if(h1.length===0) add('9.2 Jerarquía','ALTO','la página no tiene h1 visible');
  if(h1.length>1) add('9.2 Jerarquía','MEDIO',`${h1.length} elementos h1`);
  let prev=0; hs.forEach(h=>{const l=+h.tagName[1];
    if(prev&&l>prev+1) add('9.2 Jerarquía','MEDIO',`salto de h${prev} a h${l}`,h); prev=l});

  // --- forms ---
  document.querySelectorAll('input,select,textarea').forEach(el=>{
    if(['hidden','submit','button'].includes(el.type))return;
    const id=el.id, lab=id?document.querySelector(`label[for="${CSS.escape(id)}"]`):el.closest('label');
    if(!lab && !el.getAttribute('aria-label') && !el.getAttribute('aria-labelledby'))
      add('8.1 Etiqueta de campo','ALTO','campo sin etiqueta asociada',el);
  });

  // --- line length (4.4) ---
  document.querySelectorAll('p').forEach(el=>{
    const t=(el.textContent||'').trim(); if(t.length<90)return;
    const r=el.getBoundingClientRect(); if(r.width<2)return;
    const ch=parseFloat(getComputedStyle(el).fontSize)*0.5;
    const cpl=r.width/ch;
    if(cpl>95) add('4.4 Longitud de línea','MEDIO',`~${Math.round(cpl)} caracteres por línea (ideal 45-75)`,el);
  });

  // --- small text on mobile ---
  if(window.innerWidth<500){
    document.querySelectorAll('p,li,span,div').forEach(el=>{
      const t=(el.textContent||'').trim(); if(t.length<25)return;
      if([...el.children].length>0)return;
      const s=parseFloat(getComputedStyle(el).fontSize);
      if(s<14) add('13.4 Tamaño de texto móvil','MEDIO',`${s}px de cuerpo`,el);
    });
  }
  return {out, imgBg};
};

const b=await chromium.launch({args:['--no-sandbox']});
const findings=[];
for(const [w,h,vp] of [[1280,900,'escritorio'],[390,844,'móvil']]){
  const ctx=await b.newContext({viewport:{width:w,height:h}});
  const p=await ctx.newPage();
  for(const [f,name] of PAGES){
    await p.goto('http://127.0.0.1:8099/'+f,{waitUntil:'networkidle'});
    await p.waitForTimeout(1800); await p.evaluate(()=>document.fonts.ready);
    const {out,imgBg}=await p.evaluate(AUDIT);
    // page-level
    const meta=await p.evaluate(()=>({lang:document.documentElement.lang,title:document.title,
      desc:(document.querySelector('meta[name=description]')||{}).content||'',
      ov:document.documentElement.scrollWidth-window.innerWidth,
      rm:[...document.styleSheets].some(ss=>{try{return [...ss.cssRules].some(r=>r.conditionText&&/prefers-reduced-motion/.test(r.conditionText))}catch(e){return false}}),
      focus:[...document.styleSheets].some(ss=>{try{return [...ss.cssRules].some(r=>r.selectorText&&/focus-visible/.test(r.selectorText))}catch(e){return false}})}));
    if(!meta.lang) out.push({rule:'12.7 Idioma',sev:'MEDIO',msg:'<html> sin atributo lang',el:''});
    if(!meta.desc) out.push({rule:'9.7 Meta descripción',sev:'BAJO',msg:'falta meta description',el:''});
    if(meta.ov>1) out.push({rule:'13.1 Viewport',sev:'ALTO',msg:`scroll horizontal de ${meta.ov}px`,el:''});
    if(!meta.rm) out.push({rule:'11.4 Reduced motion',sev:'MEDIO',msg:'sin @media prefers-reduced-motion',el:''});
    if(!meta.focus) out.push({rule:'12.5 Foco visible',sev:'MEDIO',msg:'sin estilo :focus-visible propio',el:''});
    findings.push({vp,page:name,file:f,imgBg,out});
    console.log(`${vp.padEnd(11)} ${name.padEnd(16)} ${out.length} hallazgos`);
  }
  await ctx.close();
}
await b.close();
writeFileSync('/tmp/audit.json',JSON.stringify(findings,null,1));
console.log('written /tmp/audit.json');
