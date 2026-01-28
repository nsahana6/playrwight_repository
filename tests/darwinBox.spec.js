import{test}from "@playwright/test"
test("amazon" ,async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung s24")
    await page.keyboard.press('Enter')
    await page.locator()
})
