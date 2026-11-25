import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const guides=process.argv[2]==='guides';
const b=await chromium.launch({args:['--no-sandbox']});
const p=await (await b.newContext({viewport:{width:1700,height:2700},deviceScaleFactor:2})).newPage();
await p.goto('file://'+process.cwd()+'/cover-type.html');
await p.waitForTimeout(2200); await p.evaluate(()=>document.fonts.ready);
if(!guides) await p.evaluate(()=>document.querySelectorAll('.g').forEach(e=>e.remove()));
for(const id of ['e1','e2','e3'])
  await p.locator('#'+id).screenshot({path: guides?`/tmp/t-${id}.png`:`cover-${id}.png`});
await b.close(); console.log(guides?'guides':'clean');
