import{test}from "@playwright/test"
import landing from "../../pageObjectModel/e2elanding.page.js"
import signin from "C:/Users/Manoj Nayak/Desktop/playwright/pageObjectModel/e2esignin.page.js"
import testdata from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/pomandjsone2e.json"
import adminhomepage from "../../pageObjectModel/e2eadminHome.page.js"
import managetickets from "../../pageObjectModel/e2eManageTickets.page.js"
import manageQoute from "../../pageObjectModel/e2eadminManageQuotes.page.js"
test("e2e",async({page})=>{
    let url=testdata.url
    let admin=testdata.adminTF
    let adminPW=testdata.adminPW
    let userTA=testdata.userTA
    let remark=testdata.remark
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })
    let landingpage=new landing(page)
    let signinpage=new signin(page)
    let adminhomepages=new adminhomepage(page)
    let manageticket=new managetickets(page)
     let manageqoutes=new manageQoute(page)
    //lounch url
    await page.goto(url)
    await landingpage.adminlink.click()
    //pass name for name tf
    //email tf
    await signinpage.email.fill(admin)
    //password tf
    await signinpage.pwd.fill(adminPW)
    //click on login
    await signinpage.loginbutton.click()
    //click on manage tickets 
    await adminhomepages.managetickets.click()
    //click on any one users 
    await manageticket.userName.click()
    await page.waitForTimeout(3000)
    //fill somthing 
    await manageticket.userTextArea.fill(userTA)
    //click on update
    await manageticket.update.click()
    // take screen short of that perticuler user and make sure status sould be closed
     let time1=new Date().getTime()
    await page.screenshot({path:`screenshot/ticket${time1}.png`})
    //click on manage quote
    await adminhomepages.manageQoute.click()
    //click on view of any one user 
    await manageqoutes.view.click()
    //select any one user and click on view
    await manageqoutes.remark.fill(remark)
    //click on submit
    await manageqoutes.submit.click()
     // take screen short 
     let time2=new Date().getTime()
    await page.screenshot({path:`screenshot/ticket${time2}.png`})
    //click on logout icon
    await adminhomepages.logouticon.click()
    //click on logout  
    await adminhomepages.logout.click()
})