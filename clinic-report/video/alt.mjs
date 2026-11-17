import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1080,height:1920}})).newPage();
await p.goto('file://'+process.cwd()+'/reel-alt.html');
await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
await p.addStyleTag({content:'.rail{display:none!important}'});
await p.evaluate(()=>{for(const a of document.getAnimations()){a.pause();a.currentTime=47500}});
await p.screenshot({path:'stills/p9-alt.png'});
console.log('alt rendered'); await b.close();
