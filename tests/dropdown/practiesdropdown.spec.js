import{test,expect}from "@playwright/test"
test("dropdown",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops")
await page.waitForTimeout(3000)

    
    //await page.locator('//div[@role="row"]').click()
   let b=await page.locator('//div[@role="row"]').all()
   for(let k of b){
    let text=await k.textContent()
    if(text.includes(" for women western")){
        await k.click()
        await page.waitForTimeout(3000)
    }
   }
//await page.waitForTimeout(3000)
//await expect 
})