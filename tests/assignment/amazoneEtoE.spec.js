import {test} from "@playwright/test"
test("end to end", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops for women")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
   let [w]=await Promise.all([ page.waitForEvent("popup"),
     page.locator('(//div[@class="a-section aok-relative s-image-tall-aspect"])[1]').click({force:true})])
     await w.waitForLoadState('domcontentloaded');
    await w.locator('//span[@id="submit.add-to-cart"]').click()
    await w.locator('//span[@id="sc-buy-box-ptc-button"]').click()
})

