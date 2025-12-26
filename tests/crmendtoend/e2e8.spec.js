import{test}from "@playwright/test"
import landing from "../../pageObjectModel/e2elanding.page.js"
import signin from "C:/Users/Manoj Nayak/Desktop/playwright/pageObjectModel/e2esignin.page.js"
import testdata from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/pomandjsone2e.json"
import adminhomepage from "../../pageObjectModel/e2eadminHome.page.js"
import useracces from "../../pageObjectModel/e2eUserAcces.page.js"
test("e2e",async({page})=>{
    let url=testdata.url
    let admin=testdata.adminTF
    let adminPW=testdata.adminPW
    let search=testdata.search
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })
    let landingpage=new landing(page)
    let signinpage=new signin(page)
    let adminhomepages=new adminhomepage(page)
    let useraccess=new useracces(page)
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
    //click on user acces
    await adminhomepages.useracces.click()
    //click on search TF
    await useraccess.search.fill(search)
     // take screen short 
     let time1=new Date().getTime()
    await page.screenshot({path:`screenshot/ticket${time1}.png`})
    //click on logout icon
    await adminhomepages.logouticon.click()
    //click on logout  
    await adminhomepages.logout.click()
   
})