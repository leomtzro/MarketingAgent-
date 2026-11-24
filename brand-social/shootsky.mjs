import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1640,height:400}})).newPage();
await p.goto('file://'+process.cwd()+'/sky-preview.html');
await p.waitForTimeout(1200);
await p.locator('#w').screenshot({path:'/tmp/skyline-solo.png'});
console.log('ok'); await b.close();
