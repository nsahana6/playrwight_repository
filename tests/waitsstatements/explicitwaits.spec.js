import{test} from "@playwright/test"
import { TIMEOUT } from "dns"
import { promises } from "readline"
test("explict",async({page})=>{
    //wait foe method
    // await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@type="text"]').click()
    // await page.locator('//input[@type="text"]').fill("tops")
    // await page.locator('//div[@role="row"]',{hasText:"tops for woman"}).waitFor({timeout:5000})
    // let p=console.log(await page.locator('//div[@role="row"]').allTextContents());
    // console.log(p);
    //wait for timeout
    // await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@type="text"]').click().waitFor({timeout:3000})
    // await page.locator('//input[@type="text"]').fill("tops")
    //  await page.locator('//div[@role="row"]',{hasText:"tops for woman"}).waitFor()
    // let p=console.log(await page.locator('//div[@role="row"]').allTextContents());
    //  console.log(p);
     //wait for element state
    //  await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@type="text"]').waitFor({timeout:3000,state:'visible'})
    //  await page.locator('//input[@type="text"]').click()
    // await page.locator('//input[@type="text"]').fill("tops")
    //  await page.locator('//div[@role="row"]',{hasText:"tops for woman"}).waitFor()
    // let p=console.log(await page.locator('//div[@role="row"]').allTextContents());
    //  console.l 
     //wait for selector
//     await page.goto("https://www.amazon.in/")
//     await page.waitForSelector('//input[@type="text"]',{state:'visible'})
//     await page.locator('//input[@type="text"]').click()
// await page.locator('//input[@type="text"]').fill("tops")
//wait for navigation
// await page.goto("https://www.amazon.in/")
// await promise.all([page.waitForNavigation({waitUntil:"load"}),//by defauld load state
//      page.click('//span[@class="nav-cart-icon nav-sprite"]')   
//])
//..............................
//wait for loadstate
// await page.goto("https://www.amazon.in/")
// await page.click('//span[@class="nav-cart-icon nav-sprite"]')
// await page.waitForLoadState('load')
//wait for event 
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.fill('#writeArea',"i am downloading")
 let [downloadedfiles]=await Promise.all([
     page.waitForEvent('download'),
    page.click('#downloadButton')
   
 ])
 console.log(await downloadedfiles.path());
 //...............................
 //custom waits
 //...wait for function
test("Custom waits", async({page})=>{
   await page.goto("https://www.amazon.in/")
   await page.locator('input#twotabsearchtextbox').fill('  HP Laptop')
   await page.waitForFunction(()=>{let e = document.querySelectorAll('.s-suggestion-container')
   return e.length>1
   })
   let a = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
   console.log(a);
})
// 2nd scenario - all html,css, image has to be loaded
test("Custom waits", async({page})=>{
   await page.goto("https://www.amazon.in/")
   await page.waitForFunction(()=>{return document.readyState==='complete'})
   await page.locator('input#twotabsearchtextbox').fill('  HP Laptop')
})
 
})