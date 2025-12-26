import {test} from "@playwright/test"
test.beforeAll("login",async()=>{
    console.log("beforeall");
    
})
test("open",async()=>{
    console.log("test1");
    
})
test.beforeEach("before",async()=>{
    console.log("beforeEach");
    
})
test("homepage2",async()=>{
    console.log("test2");
    
})
test.afterAll("close",()=>{
    console.log("afterAll");
    
})
test.afterEach("lofinclose",()=>{
    console.log("afterEach");
    
})