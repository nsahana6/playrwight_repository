import {test} from "@playwright/test";
test ("Worldometers", async({page})=>{
    await page.goto("https://www.worldometers.info/");
    // await page.locator('//div[contains(text(),"World Population")]/following-sibling::div//span')
    // let b=""
        // let a=await page.locator('//h3[.=" World Population "]/following-sibling::div/button[@aria-controls="world-population/now-hints"]').textContent()

// console.log(a)
let a= await page.locator('//button[@aria-controls="world-population/now-hints"]').textContent()
console.log(a)
})
