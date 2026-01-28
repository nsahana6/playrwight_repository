import{test}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="name"]').fill("Sahana")
    await page.locator('//input[@id="email"]').fill("sahana@gmail.com")
    await page.locator('//input[@id="phone"]').fill("6969696969")
    await page.getByLabel("textarea")
    await page.locator('//input[@id="female"]').click()
    await page.locator('//input[@id="friday"]').click()
    // await page.locator('//select[@id="country"]').click()
    await page.locator('//select[@id="country"]').selectOption({value:"india"})
    await page.locator('//select[@class="form-control" and @id="colors"]').selectOption({value:"blue"})
    await page.locator('//select[@id="animals"]').selectOption({value:"elephant"})
    // await page.locator('')

})