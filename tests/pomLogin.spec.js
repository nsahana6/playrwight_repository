import{test} from "@playwright/test"
import loginpage from "C:/Users/Manoj Nayak/Desktop/playwright/pageObjectModel/loginpage.page.js"
import logindata from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/login.json"
test("login",async({page})=>{
    let lpage=new loginpage(page) 
    //lounch url
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //pass usn
    await lpage.untf.fill("student")
    //pass pwrd
    await lpage.pwdtf.fill("password123")
    //click on submit button
    await lpage.submit.click() 
    await page.waitForTimeout(3000)

})
//...........taking login data from json............
test.only("login using jason file and pom",async({page})=>{
    let lpage=new loginpage(page) 
    let url=logindata.url
    let un=logindata.un
    let pwd=logindata.pwd
    //lounch url
    await page.goto(url)
    //pass usn
    await lpage.untf.fill(un)
    //pass pwrd
    await lpage.pwdtf.fill(pwd)
    await page.waitForTimeout(3000)
    //click on submit button
    await lpage.submit.click() 
    await page.waitForTimeout(3000)
})

