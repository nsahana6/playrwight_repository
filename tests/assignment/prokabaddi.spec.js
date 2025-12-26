import{test}from "@playwright/test"
test("pro",async({page})=>{
    // await page.goto("https://www.prokabaddi.com/")
    // let a=await page.locator('//div[@class="table-body"]/div/div/descendant::div[@class="team-name"]|//p[.="18"]/../../descendant::div[@class="table-data matches-play"]').allTextContents()
    // console.log(a);
    //...................................................
    //await page.locator('//div[@class="stats-listing"]/div/div/p[.="Rank"]|//p[@class="stats-count"]')
    await page.goto('https://www.prokabaddi.com/teams/bengaluru-bulls-profile-1')
    //let b=await page.locator('//div[@class="stats-listing"]/div/div').allTextContents()
    //console.log(b);
    //...................................................
    let abc = "Overall"
   let c= await page.locator(`(//div[@class='waf-body'])[5]/descendant::div[@class='card-list']/descendant::div[@class='card-head']/p[.=\'${abc}\']/../following-sibling::div/descendant::div[@class='stats-listing']`).allTextContents()
   console.log(c);
   await page.pause()
})