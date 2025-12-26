import{test}from "@playwright/test"
test("flipkart",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator('//a[@title="Cart"]/img[@alt="Cart"]').click()
})