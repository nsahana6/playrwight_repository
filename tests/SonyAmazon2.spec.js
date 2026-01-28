import {test} from "@playwright/test";
test("Amazon2", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("pants");
    await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]//span[contains(.,"for kids girls")]').click()
    await page.locator('(//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]//span[contains(.,"Girls Cotton Regular Fit Printed Track Pant (Pack of 5)")])[1]').click();
    let a =await page.locator('((//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]//ancestor::div[@class="a-section a-spacing-base desktop-grid-content-view"])[1]//descendant::span[@class="a-price"]//span)[1]').textContent();
    console.log(a);
    
})