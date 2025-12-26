import{test}from "@playwright/test"
test("icc",async({page})=>{
    await page.goto("https://www.icc-cricket.com/rankings")
    await page.locator('//a[@data-id="d1e5eba5-0efb-4f9f-8a82-a5fd4c1947b7"]').click()
    let a=await page.locator('//span[.="783"]/../preceding-sibling::div/..').textContent()
    console.log(a);
    
})