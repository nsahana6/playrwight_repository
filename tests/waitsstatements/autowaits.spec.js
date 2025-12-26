import{test}from "@playwright/test"
test("autowait",async({page})=>{
    page.setDefaultTimeout(60000)
    await page.goto("https://demoapps.qspiders.com/ui/checkbox")
    await page.locator('//input[@id="domain_b"]').click()
})