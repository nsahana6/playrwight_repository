import test from "@playwright/test"

test("pagin", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let x = true
    let required = ["Gaming Console", "Television"]
    let pg =1
    let numpages = [1,2,3,4]
    for(let i=0; i<=numpages.length-1; i++){
        let count = 0
        let products = await page.locator("//table[@id='productTable']//tbody//tr//td[2]").all()
        for(let product of products){
            if(required.includes(await product.innerText())){
                count++
                await page.locator(`//table[@id='productTable']//tbody//tr//td[.='${await product.innerText()}']//following-sibling::td[2]//input`).click()
            }
        }
        if(count>0){
            break;
        }
        pg++
        await page.locator(`//ul[@id = 'pagination']//li//a[.="${pg}"]`).click()
    }
    await page.pause()
})