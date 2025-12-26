import{test} from"@playwright/test"
test("dropdowns",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator('//select[@id="select3"]')
    //selectOption
    //...........single option seletion ....................
    //await page.waitForTimeout(2000)
    //await page.locator('//select[@id="select3"]').selectOption({value:'India'}) //selecting through value
    //await page.waitForTimeout(2000)
    //await page.locator('//select[@id="select3"]').selectOption({label:'India'}) //selecting through lable(visible text)
    //await page.waitForTimeout(2000)
    //await page.locator('//select[@id="select3"]').selectOption({index:7}) //selecting through index
    //await page.waitForTimeout(2000)
    //await page.locator('//select[@id="select3"]').selectOption('India') //selecting through value or lable without using key 
    //await page.waitForTimeout(2000)
    //.............multiple selection........................
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // await page.waitForTimeout(2000)
    // // await page.locator('//select[@id="select-multiple-native"]').selectOption([{value:"Mens Cotton Jacket"},{value:"Mens Casual Slim Fit"},{value:'Solid Gold Petite Micropave '}])//multiple option using value we can do this using index and lable also
    // await page.locator('//select[@id="select-multiple-native"]').selectOption([{index:1},{index:4},{index:2}])//using idex
    // await page.waitForTimeout(2000)
    // await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    // await page.waitForTimeout(2000)
    //CUSTOM DROPDOWN..................
    //await page.goto("https://www.amazon.in/s?k=tops+for+woman&crid=1XX2OJWVTA0NQ&sprefix=top%2Caps%2C350&ref=nb_sb_ss_mvt-t11-ranker_1_3")
    //await page.locator('//span[@id="a-autoid-0-announce"]').click()
    //await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
    //let a=await page.locator('//a[@class="a-dropdown-link"]').all()
    // for(let b of a ){
    //     let text=await b.textContent()
    //     if(text.includes('Best seller'))//here we can pass partial text also
    //     {
    //       await b.click()
    //     }
    // }
    // await page.waitForTimeout(3000)
    //...............by x-path.......................
    //await page.locator('//a[@id="s-result-sort-select_1"]').click()
    //await page.waitForTimeout(3000)
    //......without hardcoding the x-path............
    //let text="Best Sellers"
    //await page.locator(`//a[@class="a-dropdown-link" and text()="${text}"]`).click()
    //await page.waitForTimeout(3000)
    //....................AUTO SUGGETION DROPDOWN......................
    // await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@id="twotabsearchtextbox"]').fill("cloth")
    // await page.waitForTimeout(3000)
    // await page.waitForSelector('//div[@class="s-suggestion s-suggestion-ellipsis-direction"][1]')
    // let b=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all()
    // for(let k of b)
    // {
    //     let text=await k.textContent()
    //     if(text.includes(" drying stand")){
    //         await k.click()
    //         break;
    //     }
        
    // }
    // await page.waitForTimeout(3000)
    //....using keyboard action .......
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("cloth")
    await page.waitForTimeout(3000)
    await page.waitForSelector('//div[@class="s-suggestion s-suggestion-ellipsis-direction"][1]')
    await page.keyboard.press("ArrowDown")//to secect first option in autosuggestions
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

})
