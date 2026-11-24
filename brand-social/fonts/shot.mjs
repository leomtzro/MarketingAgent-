import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1200,height:900},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/specimens.html');
await p.waitForTimeout(4000); await p.evaluate(()=>document.fonts.ready);
const loaded=await p.evaluate(()=>['Inter Tight','Newsreader','Instrument Serif','Source Serif 4','Archivo','Fraunces']
  .map(f=>f+':'+(document.fonts.check(`700 60px "${f}"`)?'ok':'MISSING')).join('  '));
console.log(loaded);
for(let i=0;i<6;i++) await p.locator('#f'+i).screenshot({path:`spec-${i}.png`});
await b.close();
