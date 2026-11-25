import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const guides = process.argv[2]==='guides';
const b=await chromium.launch({args:['--no-sandbox']});
const p=await (await b.newContext({viewport:{width:1700,height:950},deviceScaleFactor:2})).newPage();
await p.goto('file://'+process.cwd()+'/cover-photo.html');
await p.waitForTimeout(2000); await p.evaluate(()=>document.fonts.ready);
if(!guides) await p.evaluate(()=>document.querySelectorAll('.g').forEach(e=>e.remove()));
await p.locator('#c1').screenshot({path: guides?'/tmp/cov-guides.png':'cover-tijuana.png'});
await b.close(); console.log(guides?'guides':'clean');
