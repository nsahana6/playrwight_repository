import{test} from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
    await page.locator('//span[@data-cy="closeModal"]').click()
    // await page.locator('//span[@class="lbl_input appendBottom10"]').click()
    await page.locator('//img[@alt="minimize"]').click()
    await page.locator('//div[@class=" blackText latoBlack"]').click()
    await page.locator('//span[@class="lbl_input appendBottom10" and contains(.,"Dep")]').click()
    let abc="20"
    let a="Jan"
    await page.locator(`//div[@class="DayPicker-Caption" and contains(.,"${a}")]//following-sibling::div[@class="DayPicker-Body"]//descendant::p[contains(.,"${abc}")]`).click()
    await page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]').click()
})