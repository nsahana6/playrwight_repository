import{test}from"@playwright/test"
test("hard",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000)
    await page.getByText("Username",{exact:true}).fill("studen")
    await page.waitForTimeout(2000)
    await page.getByText("Password",{exact:true}).fill("Password123")
        await page.waitForTimeout(2000)
    await page.locator('button#submit').click()
        await page.waitForTimeout(4000)
})
test("autosuggetions",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops")
    await page.waitForTimeout(2000)//to avoid flaky test 
    let s=await page.locator('//span[@class="s-heavy"]').allTextContents()
    console.log(s);
    
})