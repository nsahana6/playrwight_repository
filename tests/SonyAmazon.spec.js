import {test,expect} from "@playwright/test"
test("Amazon", async({page})=>{
 await page.goto("https://www.amazon.in/")   
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("toys")
    await page.locator('//div[@class="nav-search-submit nav-sprite"]').click()
    let [a]= await Promise.all([page.waitForEvent("popup"), page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]//span[contains(.,"Gooyo DB2060")]').click()
])
await a.locator('//input[@id="add-to-cart-button"]').click()
await a.locator('//a[@href="/cart?ref_=sw_gtc"]').click()
let b= await a.locator('//span[@class="a-truncate-full a-offscreen"]').textContent()
await expect(b).toContain("Gooyo DB2060")
})