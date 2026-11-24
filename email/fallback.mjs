import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const ctx=await b.newContext({viewport:{width:700,height:1200},deviceScaleFactor:2});
// simulate a client that strips remote fonts and blocks remote images
await ctx.route('**fonts.googleapis.com**', r=>r.abort());
await ctx.route('**fonts.gstatic.com**', r=>r.abort());
const p=await ctx.newPage();
await p.goto('file://'+process.cwd()+'/diagnostico.html');
await p.waitForTimeout(1800);
await p.screenshot({path:'/tmp/mail-fallback.png',fullPage:true});
console.log('fallback rendered (Georgia, no web font)');
await b.close();
