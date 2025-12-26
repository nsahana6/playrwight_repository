// import{test} from "@playwright/test"
// test("asyncawait",async()=>{
// await //launch url
// await//add to cart 
//     })
import{test} from "@playwright/test"
// test("asyncawait",async({page})=>{
// await page.goto("https://www.amazon.in/") 
//     })
//
// test("asyncawait",async({browser})=>{
// let context=await browser.newContext() 
// let page=await context.newPage()
// await page.goto("https://www.amazon.in/") 
//     })
//
test("asyncawait",async({browserName,browser})=>{
    console.log(browserName);
    
let context=await browser.newContext() 
let page=await context.newPage()
 await page.goto("https://www.amazon.in/") 
    })