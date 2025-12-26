import{test} from "@playwright/test"
test("key",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    // await page.locator('//input[@id="name"]').fill("sahana")
    // //...type.....
    // //1)
    // await page.locator('//input[@id="name"]').type("sahana")
    // //2)
    // await page.type('//input[@id="name"]','sahana')
    // //3)
    // await page.locator('//input[@id="name"]').click()
    // await page.keyboard.type("sahana")
    // await page.waitForTimeout(2000)
    
    //......insert()..........
    // await page.locator('//input[@id="name"]').click()
    // await page.keyboard.insertText("sahana")
    // await page.waitForTimeout(2000)

    // //.......down() and up().........
    // await page.keyboard.down("Space")
    // await page.keyboard.up("Space")
    // await page.keyboard.down("S")
    // await page.keyboard.up("S")
    // await page.waitForTimeout(2000)

    // //.......press()............
    // await page.keyboard.press("Tab")
    // await page.keyboard.type("sahana@gmail.com")
    // await page.keyboard.press("Control+A")
    // await page.keyboard.press("Control+C")
    // await page.keyboard.press("Tab")
    // await page.keyboard.press("Control+V")
    // await page.waitForTimeout(2000)
   //.........scroll using keyboard actions..........
    await page.goto("https://www.amazon.in/")
    for(let i=0; i<10;i++){
    await page.keyboard.press("ArrowDown")

    }
    await page.waitForTimeout(2000)
    for(let i=1;i<6;i++){
    await page.keyboard.press("ArrowUp")

    }
    await page.waitForTimeout(2000)

})

