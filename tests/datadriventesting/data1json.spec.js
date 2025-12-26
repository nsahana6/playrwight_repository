import{test}from "@playwright/test"
import data from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/data.json"
test("json",async({page})=>{
    //....itterate over array.....
for(let d of data.valid){
    await page.goto(d.url)
    await page.locator('//input[@id="username"]').fill(d.username)
    await page.locator('//input[@id="password"]').fill(d.password)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
}
for(let d of data.invalid){
 await page.goto(d.url)
    await page.locator('//input[@id="username"]').fill(d.username)
    await page.locator('//input[@id="password"]').fill(d.password)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
}
})
test.only("itterate over object",async({page})=>{
    //...itterate through object->to reduse number of lines.....
    for(let key of data){
        for(let d of data[key]){
           await page.goto(d.url)
    await page.locator('//input[@id="username"]').fill(d.username)
    await page.locator('//input[@id="password"]').fill(d.password)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    } 
        }
    }
})