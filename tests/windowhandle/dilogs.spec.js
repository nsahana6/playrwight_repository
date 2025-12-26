import{test,expect} from "@playwright/test"
test("dilog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@id="alertBtn"]').click()
    await page.locator('//button[@id="confirmBtn"]').click()
    await expect(page.locator('//p[@id="demo"]')).toContainText("Cancel!")
    await page.waitForTimeout(3000)
    await page.locator('//button[@id="promptBtn"]').click()
    await expect(page.locator('//p[@id="demo"]')).toContainText("cancelled")
    await page.waitForTimeout(3000)
//............HANDLING DIALOG..................
//1) page.on()
    // page.on("dialog",(dialog)=>{dialog.accept()})//handles only simple and confirm alert it will not handle prompt alert so to handle prompt alert we have to pass message along with accept or dismiss
    // await page.locator('//button[@id="alertBtn"]').click()
    // await page.locator('//button[@id="confirmBtn"]').click()
    // await page.locator('//button[@id="promptBtn"]').click()
    // page.on("dialog",(dialog)=>{dialog.accept("hey sahan")})//it will pass this message inside prompt and accept the prompt
page.on("dialog",async(dialog)=>{if (dialog.type()=='alert'){
            console.log(await dialog.message());
            
            await dialog.dismiss()
        }
     else if(dialog.type()=='confirm'){
        await dialog.accept()
    }
     else if(dialog.type()=='promt'){
        console.log(await dialog.defaultValue());
        
        await dialog.accept("abcd") 
}})
    await page.locator('//button[@id="alertBtn"]').click()
    await page.waitForTimeout(3000)

    await page.locator('//button[@id="confirmBtn"]').click()
    await page.waitForTimeout(3000)
    await expect(page.locator('#demo')).toContainText("OK") 
    await page.locator('//button[@id="promptBtn"]').click()
    await expect(page.locator('#demo')).toContainText("OK").toBe("Hello tom! How are you today?")

    await page.waitForTimeout(3000)
})