import {test}from "@playwright/test"
test("zluri",async({page})=>{
    await page.goto("https://chatgpt.com/")
    await page.locator('//p[@data-placeholder="Ask anything"]').fill('hey give some idea on playwright')
    await page.locator('//button[@id="composer-submit-button"]').click()
    await page.waitForTimeout(5000)
    await page.screenshot({path:"screenshot.png"})
    await page.waitForTimeout(5000)
    
})