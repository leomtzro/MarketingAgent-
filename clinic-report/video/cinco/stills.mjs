import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const TS=[2.2,6.5,11.5,16.8,19.9,23.0,28.0];
const b=await chromium.launch({args:['--no-sandbox','--force-device-scale-factor=1']});
const p=await (await b.newContext({viewport:{width:1080,height:1920},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/reel.html');
await p.waitForTimeout(3000);
await p.evaluate(()=>document.fonts.ready);
for(const t of TS){
  await p.evaluate(ms=>{for(const a of document.getAnimations()){a.pause();a.currentTime=ms}},t*1000);
  await p.screenshot({path:`test/t${String(t).replace('.','_')}.png`});
}
console.log('stills done');
await b.close();
