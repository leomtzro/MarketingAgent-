import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1640,height:856},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/covers.html');
await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
for(const id of ['a','b','c']) await p.locator('#'+id).screenshot({path:`cover-${id}.png`});
console.log('covers rendered'); await b.close();
