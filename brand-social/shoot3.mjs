import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1640,height:856}})).newPage();
await p.goto('file://'+process.cwd()+'/covers-sky.html');
await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
for(const id of ['t1','t2']) await p.locator('#'+id).screenshot({path:`cover-sky-${id}.png`});
console.log('ok'); await b.close();
