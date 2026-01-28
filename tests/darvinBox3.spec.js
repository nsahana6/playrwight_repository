import{test} from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("mobile")
        await page.locator('//input[@id="nav-search-submit-button"]').click()
        await page.locator('//a[@class="a-link-normal s-line-clamp-2 s-line-clamp-3-for-col-12 s-link-style a-text-normal"]')

})
let abc = " "
   let c= await page.locator(`(//div[@class='waf-body'])[5]/descendant::div[@class='card-list']/descendant::div[@class='card-head']/p[.=\'${abc}\']/../following-sibling::div/descendant::div[@class='stats-listing']`).allTextContents()
   console.log(c);