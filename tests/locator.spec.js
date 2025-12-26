import{test} from "@playwright/test"
test("locators",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //username textfield
    //tagname[@AN='AV']://input[@name="username"]
    await page.locator('//input[@type="text"]').fill("student")
    //password textfield
    await page.locator('//input[@type="password"]').fill("password123")
//submit button
await page.locator('//button[@id="submit"]').click()
    
})





//[@id='un' & caLL=""]