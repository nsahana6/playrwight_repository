import {test,expect} from "@playwright/test";
test("Amazon",async({page})=>{
   await page.goto("https://www.makemytrip.com/");
   await page.locator('//img[@alt="minimize"]').click();
   await page.locator('//span[@class="commonModal__close"]').click();
  //  await page.locator('//div[@class="imageSlideContainer"]').click()
   await page.locator('//span[@class="lbl_input appendBottom10" and text()="Departure"]').click();
   let a = await page.locator('//div[@class="DayPicker-Caption" and contains(.,"Feb")]//following-sibling::div[@class="DayPicker-Body"]//descendant::p[contains(.,"27")]/following-sibling::p')
   .textContent();
   await expect(a).toBe("5,497")
   
})