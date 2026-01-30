import{test}from "@playwright/test"
test("kavya",async({page})=>{
    await page.goto("https://www.icharts.in/opt/index.php")
    let a=await page.locator('(//div[@class="bar-data"]//parent::div[@class="data-flex"]//parent::div[@class="bar-main"])//div[@class="singlebar3 negativeColor" and @title="Vol Chg" and @style="border-radius:3px;border-top-left-radius:0px;border-bottom-left-radius:0px;top:5px;;margin-bottom:3px;font-size:11px;font-size:11px;height:14px;width: calc(45.84/100*100%);" and text()="-45.84%"]').textContent()
    console.log(a)
})