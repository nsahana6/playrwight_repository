import{test}from "@playwright/test"
test("amazon",async({page})=>{
//     await page.goto("https://www.amazon.in/s?k=samsug+phones&crid=3TICP3BJQMOS4&sprefix=samsug+phones%2Caps%2C362&ref=nb_sb_noss_2")
//     await page.locator('//input[@id="twotabsearchtextbox"]').click()
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("Samsung phones")

//    let a= await page.locator("((//span[contains(text(),'Samsung Galaxy A55 5G')])[1]/../../../following-sibling::div/following-sibling::div/div/div/div/div/div/a/span/span)[1]").allTextContents()
//    console.log(a);
//.....................................................
await page.goto("https://www.amazon.in/")
await page.locator('//input[@id="twotabsearchtextbox"]').click()
await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
await page.keyboard.press("Enter")
await page.locator('(//i[@class="a-icon a-icon-checkbox"])[71]').click()
//await page.locator('//span[text()="Android 13.0"]/ancestor::li[@id="p_n_g-1003517064111/51258698031"]/descendant::i[@class="a-icon a-icon-checkbox"]').click()
   
})