import{test} from "@playwright/test"
test("methods" ,async({page})=>{
await page.goto("https://www.amazon.in/")
await page.waitForTimeout(3000)
let a=await page.locator('//div[@class="imageOverlay--eK9PK"]').all()
console.log(a);

} )
//
import {test} from "@playwright/test"
test("end to end", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops for women")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    page.waitForEvent("popup")
    await page.locator('(//div[@class="a-section aok-relative s-image-tall-aspect"])[1]').click()
    await page.locator('//input[@id="add-to-cart-button"]').click()
    await page.locator('//span[@id="sc-buy-box-ptc-button"]').click()
})