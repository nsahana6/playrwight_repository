import {test,expect}from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder('Search Amazon.in').fill("iphone17pro")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let [page2]=await Promise.all([ page.waitForEvent("popup"),page.locator('//img[@alt="iPhone 17 Pro Max 1 TB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fu..."]').click()
])
    await page2.locator('//input[@id="gift-wrap"]').click()
    await page2.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click()
    await page2.locator('//input[@aria-labelledby="chooseButton-announce"]').click()
    await page2.locator('(//span[@class="a-button-text a-declarative" and @aria-hidden="true" and@data-action="a-dropdown-button"])[1]').click()
    await page2.locator('(//a[@href="javascript:void(0)"and @role="option"])[28]').click()
    await page2.locator('//span[@id="SamsungId"]').click()
    await page2.locator('//a[@id="Samsung_137"]').click()
        await page2.locator('//span[@id="SamsungGalaxy S24 5GId"]').click()
        await page2.locator('//a[@id="SamsungGalaxy S24 Ultra 5G_2"]').click()
        await page2.locator('(//i[@class="a-icon a-icon-checkbox"])[2]').click()
        await page2.locator('//input[@aria-labelledby="value-commensurate-with-granularity-continue-button-announce"]').click()



})