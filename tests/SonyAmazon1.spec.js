import {test} from "@playwright/test";
test("Amazon1", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("tops");
    await page.locator('//div[@class="nav-search-submit nav-sprite"]').click();
    let [a] = await Promise.all([page.waitForEvent('popup'),
        page.locator('(//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]//span[contains(.,"Girl\'s & Women\'s Beige Eyelet Embroidery Knitted Square Neck Casual Slim Fit Women T-Shirt")])[1]').click()])
    await a.locator('//input[@id="add-to-cart-button"]').click();
    await a.locator('//span[@class="a-button a-spacing-top-base a-button-span12 a-button-base celwidget"]').click();
})