import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
for(const [w,tag] of [[700,'escritorio'],[390,'movil']]){
  const p=await(await b.newContext({viewport:{width:w,height:1200},deviceScaleFactor:2})).newPage();
  await p.goto('file://'+process.cwd()+'/propuesta.html');
  await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
  await p.screenshot({path:`/tmp/mail-${tag}.png`,fullPage:true});
  console.log(tag,'ok');
}
await b.close();
