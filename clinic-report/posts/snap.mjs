import{createRequire}from'module';const{chromium}=createRequire('/home/user/x.js')('playwright');
import{POSTS}from'./data.mjs';
const b=await chromium.launch({args:['--no-sandbox']});
const p=await(await b.newContext({viewport:{width:1080,height:1350},deviceScaleFactor:1})).newPage();
await p.goto('file://'+process.cwd()+'/posts.html');
await p.waitForTimeout(2500); await p.evaluate(()=>document.fonts.ready);
for(const post of POSTS){
  for(let i=1;i<=4;i++){
    const id=`${post.id}-${i}`;
    await p.locator('#'+id).screenshot({path:`out/${id}.png`});
  }
}
// overflow check
const bad=await p.evaluate(()=>[...document.querySelectorAll('.card')]
  .filter(c=>c.scrollHeight>c.clientHeight+1).map(c=>c.id+' +'+(c.scrollHeight-c.clientHeight)+'px'));
console.log('overflowing cards:',bad.length?bad:'none');
await b.close();
