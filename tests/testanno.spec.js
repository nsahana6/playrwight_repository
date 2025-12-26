import {test} from "@playwright/test"
// test("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
    
// })
//test.skip()
// test("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
// test.skip("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
    
// })
//conditional skip
// test("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
// test("test 2",async({browserName})=>{
//     test.skip(browserName=="chromium")

//    // test.skip(browserName==="firefox")
// })
// test("test 3",async({})=>{
//     console.log("test 3");
    
// })
//
//only one test to execute
// test.only("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
// })
//
//fail
// test.fail("test annotation",async({page})=>{
//     console.log("test 1");//here i will get error beacuse here the code is correct so it is not failing
    
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
// }) 
// 
// test.fail("test annotation",async({page})=>{
//     await page.goto("hgyghyg1236")
    
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
// }) 
//
//fixme
// test.fixme("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
// }) 
//
//slow
// test("test annotation",async({page})=>{
//     console.log("test 1");
    
// })
test("test 2",async({})=>{
    //test.slow();
    console.log("running");
    
})
test.slow();
test("test 3",async({})=>{
    
    console.log("running");
    
})
// test.slow("test 3",async({})=>{
//     console.log("test 3");//it will skip 

// }) 
//
//describe
//  test.describe("login",async()=>{
//     test("valid cred",async({browserName})=>{
// console.log("test 1");
//     })
    
    
// })
// test("invalid cred",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
    
// })
//
//setTimeout()
// test("asyncawait",async({page})=>{
// await page.goto("https://www.amazon.in/")
//  test.setTimeout(3000)
//     })

// test("test annotation",async({page})=>{
//     console.log("test 1");
//     //test.setTimeout(3000)
// })
// test("test 2",async({})=>{
//     console.log("test 2");
    
// })
// test("test 3",async({})=>{
//     console.log("test 3");
    
// })