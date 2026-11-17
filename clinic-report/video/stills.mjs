import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const T=[2.8,8.6,15.0,21.8,28.0,33.8,38.8,43.2];
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1080,height:1920},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/reel.html');
await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
await p.addStyleTag({content:'.rail{display:none!important}'});
for(let i=0;i<T.length;i++){
  await p.evaluate(t=>{for(const a of document.getAnimations()){a.pause();a.currentTime=t}},T[i]*1000);
  await p.screenshot({path:`stills/p${i+1}.png`});
}
console.log('stills done');await b.close();
