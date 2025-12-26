import{test} from "@playwright/test"
import fs from "fs"
let data =fs.readFileSync("C:/Users/Manoj Nayak/Desktop/playwright/testdata/singlesetofdata.json")
let data1=JSON.parse(data)
//........for single object........
test("get data from json",async({page})=>{
console.log(data1);

})
//...........for multiple object which in an array......
test("multiple data",async({page})=>{
    data1.forEach(d => {
        console.log(d.greet);     
    });
})
//..........for passing data from json to application through testscript.............
test("application",async({page})=>{
    await page.goto(data1.url)
    await page.locator('//input[@id="username"]').fill(data1.username)
    await page.locator('//input[@id="password"]').fill(data1.password)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    console.log(title);
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
    
})
//............for passing data from json to application through testscrip for multiple set of data.............
test.only("application with multiple data",async({page})=>{
    // data1.forEach(d=>{
    //     let url=d.url
    //     let username=d.username
    //     let password=d.password
    // })//here inside this we cant use await so we have to use for-of
    for(let d of data1){
        // storing it separatly in a variable
        let url=d.url
        let username=d.username
        let password=d.password
        await page.goto(url)
    await page.locator('//input[@id="username"]').fill(username)
    await page.locator('//input[@id="password"]').fill(password)
    await page.locator('//button[@id="submit"]').click()
    let title=await page.title()
    console.log(title);
    if(title==="Logged In Successfully | Practice Test Automation"){
        console.log("valid credentials");
        
    }
    else{
        console.log("invalid credentials");
        
    }
    
    }
   
    
})