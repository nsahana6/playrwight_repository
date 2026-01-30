import{test,expect}from "@playwright/test"
test("get by methods",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('//input[@id="displayed-text"]')).toBeVisible();
    await page.locator('//input[@id="hide-textbox"]').click()
    await expect(page.locator('//input[@id="displayed-text"]')).toBeHidden();
})