import{test}from "@playwright/test"
import { TIMEOUT } from "dns"
test("mmt",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
    await page.locator('//span[@data-cy="closeModal"]').click()
    await page.locator('//div[@class="tp-dt-header-icon"]/img[@alt="minimize"]').click()
    await page.locator('//div[@class="flightWidgetSection appendBottom40"]').click()
    await page.locator('//label[@for="departure"]').click()
    //await page.locator('//div[@class="dateInnerCell"]/../../following-sibling::div/div/following-sibling::div[@aria-label="Tue Dec 09 2025"]').click()

    await page.locator('//span[@class="lbl_input appendBottom10"]/../../following-sibling::div[@class="flt_fsw_inputBox dates inactiveWidget activeWidget"]/label/span').click()
    //await page.pause()
    await page.waitForTimeout(1000)
})