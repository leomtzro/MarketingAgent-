import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const FPS=25, DUR=49.5, N=Math.round(FPS*DUR);
const b=await chromium.launch({args:['--no-sandbox','--force-device-scale-factor=1']});
const p=await (await b.newContext({viewport:{width:1080,height:1920},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/reel.html');
await p.waitForTimeout(2500);                      // let Geist land
await p.evaluate(()=>document.fonts.ready);
const t0=Date.now();
for(let i=0;i<N;i++){
  const ms=(i/FPS)*1000;
  await p.evaluate(t=>{for(const a of document.getAnimations()){a.pause();a.currentTime=t}},ms);
  await p.screenshot({path:`frames/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});
  if(i%125===0)process.stdout.write(`${i}/${N} ${((Date.now()-t0)/1000).toFixed(0)}s\n`);
}
console.log('done',((Date.now()-t0)/1000).toFixed(0)+'s');
await b.close();
