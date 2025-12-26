import{test}from "@playwright/test"
test("dropdown",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
   let a= await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops")
   let b=await a.all()
   for(let k of b){
    let text=await k.textContent()
    if(text.includes("clothes storage box")){
        await k.click()
    }
   }


})