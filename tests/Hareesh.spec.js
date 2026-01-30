import{test}from "@playwright/test"
test ("MagicBricks",async({page})=>{
    await page.goto('https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore')
    await page.locator('//input[@id="keyword"]').fill("Hyderabad")
    await page.locator('//div[@class="mb-search__auto-suggest__item" and text()=" university road, "]').click()
    await page.locator('//div[@class="mb-search__title"and @onclick="showPropertyDropDown(event, this);fireSearchBoxClickedGTM();"]').click()
    await page.locator('//label[@class="mb-search__property__item__label" and text()="House/Villa"]').click()
    await page.locator('//div[@class="mb-search__title" and @onclick="showBudgetDropDown(event, this);fireSearchBoxClickedGTM();"]').click()
    await page.locator('//div[@class="mb-search__min-max__item" and text()="Min"]').click()
    await page.locator('//div[@class="mb-search__min-max__item" and text()="Min"]//following-sibling::div[text()="₹30 Lac"]').click()
    await page.locator('//div[@class="mb-search__btn"]').click()
    
})