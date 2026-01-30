import{test,expect}from "@playwright/test"
test("Darwin",async({page})=>{
    await page.goto("https://practice.expandtesting.com/inputs")
    await expect(page).toHaveURL("https://practice.expandtesting.com/inputs")
    let a=await page.locator('//input[@id="input-number"]')
    await a.pressSequentially("-12.2+")
    let c=await a.inputValue()
    await expect(c).toMatch(/^\d*$/)
})
