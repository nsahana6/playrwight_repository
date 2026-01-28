import {test} from "@playwright/test";
import { log } from "console";
// test("MMT", async({page})=>{
//      await page.goto("https://www.makemytrip.com/");
//      await page.locator('//span[@class="commonModal__close"]').click();
//      await page.locator('//span[@class="lbl_input appendBottom10" and contains(.,"Departure")]').click();
//      let a = "Jan"
//      let b = "17"
//      await page.locator(`//div[@class="DayPicker-Caption" and contains(.,"${a}")]/..//descendant::p[(text()="${b}")]`).click()
//      await page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]').click();
// })

test("MMT", async({page})=>{
     await page.goto("https://www.makemytrip.com/");
     await page.locator('//span[@class="commonModal__close"]').click();
     await page.locator('//span[@class="lbl_input appendBottom10" and contains(.,"Departure")]').click();
     let a = await page.locator('//div[@class="DayPicker-Caption" and contains(.,"Jan")]/..//descendant::p[(text()="17")]/../p[2]').textContent();
     console.log(a);
     
    })