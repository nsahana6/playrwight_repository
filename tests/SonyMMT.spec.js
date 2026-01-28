import {test} from "@playwright/test";
test("Make My Trip", async({page})=>{
    await page.goto("https://www.makemytrip.com/");
    await page.locator('//span[@class="commonModal__close"]').click();
    await page.locator('//span[@class="lbl_input appendBottom10" and contains(.,"Departure")]').click();
    let v = "Jan"
    let d = "17"
    await page.locator(`//div[@class="DayPicker-Caption" and contains(.,"${v}")]/..//descendant::p[(text()="${d}")]`).click();
    await page.getByText('Search').click();
})
