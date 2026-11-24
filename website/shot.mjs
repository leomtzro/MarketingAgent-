import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const ctx=await b.newContext({viewport:{width:1280,height:1000},deviceScaleFactor:1});
const p=await ctx.newPage();
for(const [f,out] of [['investigaciones/index.html','/tmp/inv-index.png'],
                      ['investigaciones/camino-del-paciente-tijuana-2026-11/index.html','/tmp/inv-study.png']]){
  await p.goto('file://'+process.cwd()+'/'+f);
  await p.waitForTimeout(2200); await p.evaluate(()=>document.fonts.ready);
  await p.screenshot({path:out,fullPage:true});
}
// phone check
const m=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
await m.goto('file://'+process.cwd()+'/investigaciones/index.html');
await m.waitForTimeout(2000);
const ov=await m.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
console.log('phone horizontal scroll:', ov?'YES - PROBLEM':'none');
await b.close();
