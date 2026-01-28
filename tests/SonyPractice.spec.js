import {test} from "@playwright/test";
test("Practice", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="name"]').fill("Snehashree");
    await page.locator('//input[@id="email"]').fill("snehashreebn@gmail.com");
    await page.locator('//input[@id="phone"]').fill("9986881328");
    await page.locator('//textarea[@id="textarea"]').fill("JP Nagar");
    await page.locator('//input[@id="female"]').click();
    await page.locator('//input[@id="friday"]').click();
    await page.locator('//select[@id="country"] ').selectOption({value:"india"});
    await page.locator('//select[@id="colors"]').selectOption({value:"red"});
    await page.locator('//select[@id="animals"]').selectOption({value:"lion"});
    await page.locator('//input[@id="datepicker"]').fill("01/17/2026");
    // let a = "Jan"
    // let b = "17"
    // await page.locator(`//div[@class="ui-datepicker-title"]//span[contains(.,"${a}")]//ancestor::div[@id="ui-datepicker-div"]//descendant::a[@class="ui-state-default ui-state-highlight ui-state-active" and contains(.,"${b}")]`)
})