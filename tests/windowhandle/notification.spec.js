import{test}from "@playwright/test"
test("notification",async({browser})=>{
    let context=await browser.newContext({permission:["notification","microphone"]})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:"Notification"}).click()
    //......validation of permission status...........
    let result=await page.evaluate(()=>{return Notification.permission})
    console.log(`permition:${result}`);
    await context.clearPermissions()
    let result1=await page.evaluate(()=>{return Notification.requestPermission()})//will get default 
    let result2=await page.evaluate(()=>{return Notification.permission})//will get denied


   console.log(`permission:${result1}`);
    
    
})