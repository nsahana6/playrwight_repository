import{test,expect}from "@playwright/test"
// test("new tab",async({browser})=>{
//     //creating multiple tabs manually
//     let context=await browser.newContext()
//      let page1=await context.newPage()
//      await page1.goto("https://www.amazon.in/")
//     // let page2=await context.newPage()
//     // await page2.goto("https://www.flipkart.com/")
//     //.............
//     let page3=await context.newPage()
//     await page3.goto("https://www.amazon.in/s?k=tops+for+woman&crid=33G574U4EU9GB&sprefix=tops%2Caps%2C409&ref=nb_sb_ss_mvt-t11-ranker_1_4")
//     await page3.locator('(//a[@class="a-link-normal _c2Itd_link_pJ4S_ _c2Itd_hidden_9Hszh"])[1]').click({force:true})
//     await page3.waitForTimeout(3000)
//     console.log(await page3.url());

    
// })
// test.only("handling multiple tabs",async({browser})=>{
//     let context1=await browser.newContext()
//     let page=await context1.newPage()
//     await page.goto("https://www.amazon.in/s?k=watch+for+man&i=apparel&crid=2X8NJ7PWCONT4&sprefix=watch%2Capparel%2C362&ref=nb_sb_ss_mvt-t11-ranker_1_5")
//     let [c]=await Promise.all([
//         page.waitForEvent('popup'),
//         page.locator('(//div[@class="a-section aok-relative s-image-tall-aspect"])[1]').click({force:true}),
    

//     ])
    
//     await page.waitForTimeout(3000)
//     console.log(await c.url());
//     await expect(c.url()).not.tobe("https://www.amazon.in/s?k=watch+for+man&i=apparel&crid=2X8NJ7PWCONT4&sprefix=watch%2Capparel%2C362&ref=nb_sb_ss_mvt-t11-ranker_1_5")

//})
//how to handle multiple windows 
test.only("window",async({browser})=>{
let context1=await browser.newContext()
    let page=await context1.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
   let [window]=await Promise.all([ page.waitForEvent('popup'),
     page.click('//button[text()="Shop Now"]')])

    await window.click('//button[.="Add to Cart"]')
   let title1= await page.title()
   await expect(await window.title()).not.toBe(title1)
})

