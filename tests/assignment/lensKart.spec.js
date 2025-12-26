import{test}from "@playwright/test"
test("lensKart",async({page})=>{
    await page.goto("https://www.lenskart.com/")
     await page.goto('https://www.lenskart.com/')
      await page.getByLabel("Store Locator").hover()
      await page.locator("//div[@class='sc-b934bf65-10 jLvUqo' and text()='Bangalore']").click()

   
}) 