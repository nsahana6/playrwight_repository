import{test,expect}from "@playwright/test"
test("r&c",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    //await page.locator('//input[@id="attended"]').click()
    await page.locator('//input[@id="attended"]').check()
    await page.waitForTimeout(2000)
    //assert
    await expect(await page.locator('//input[@id="attended"]')).toBeChecked()
    let a=await page.locator('//input[@id="attended"]').isChecked()//this method will not stop the excution  if the button is uncheched it just return true or false  
    console.log(a)
    //....to assert it is not cheched......
    await expect(await page.locator('//input[@id="attended"]').isChecked()).toBeFalsy()   
})
//....for checkBox.........
test.only("checkbox",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('//input[@id="domain_a"]').click()
    await page.waitForTimeout(2000)
    //await page.locator('//input[@id="domain_a"]').click()//to uncheck the same element after checked
    //..or
    //await page.locator('//input[@id="domain_a"]').uncheck()
    await page.waitForTimeout(2000)
    //varify checked
    await expect (page.locator('//input[@id="domain_a"]')).toBeChecked()

    //varify unchecked
    await page.locator('//input[@id="domain_a"]').uncheck()
    await expect (page.locator('//input[@id="domain_a"]')).toBeChecked()
    await page.waitForTimeout(2000)
    //or
    await expect (page.locator('//input[@id="domain_a"]').isChecked()).toBeChecked()
    await page.waitForTimeout(2000)

    

})