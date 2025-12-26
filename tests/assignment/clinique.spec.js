import{test}from "@playwright/test"
test("clinique",async({page})=>{
    await page.goto("https://www.clinique.com/")
    //await page.locator('//div[@class="gnav-block__nav-container container-max-width-x-large container-max-width--padded "]/descendant::div[@class="header-gnav-cart__icon-wrapper"]/a//*[name()="svg" and @role="img"]').click()
    //await page.locator('//div[@class="gnav-block__courtesy-logo"]/following-sibling::div/div[@class="gnav-block__courtesy-utilities"]/div[@class="gnav-block__courtesy-cart gnav-block__courtesy-utilities-item"]/descendant::a').click()
    await page.locator('//div[@class="gnav-block__courtesy-logo"]/following-sibling::div/div[@class="gnav-block__courtesy-utilities"]/div[@class="gnav-block__courtesy-cart gnav-block__courtesy-utilities-item"]/descendant::a//*[name()="svg" and @aria-labelledby="gnav-cart-icon"]').click()
})
    
