import{test}from "@playwright/test"
test("handling multiple tabs",async({browser})=>{
    let context=await browser.newContext() 
    let page=await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').click()
    await page.locator('//input[@id="twotabsearchtextbox"]').fill(" tops for women") 
     await page.locator('//input[@id="nav-search-submit-button"]').click()  
     //await  page.locator('//input[@id="twotabsearchtextbox"]').click()   
        let [array]=await Promise.all([page.waitForEvent('popup'),
            // page.keyboard.press("Enter"),
         page.locator('//div[@class="a-section aok-relative s-image-tall-aspect"]/img[@data-image-index="1" and@alt="Sponsored Ad - DOMIN8 Women T-Shirt" ]').click({force:true})
         
])
        //await page.locator('(//a[@class="a-link-normal _c2Itd_link_pJ4S_ _c2Itd_hidden_9Hszh"])[1]').click()
        console.log(await array.url());
        
})
