import{test}from "@playwright/test"
import landing from "../../pageObjectModel/e2elanding.page.js"
import signup from "../../pageObjectModel/e2esignup.page.js"
import signin from "C:/Users/Manoj Nayak/Desktop/playwright/pageObjectModel/e2esignin.page.js"
import homepage from "../../pageObjectModel/e2ehomepage.page.js"
import createTicket from "../../pageObjectModel/e2ecreatticken.page.js"
import profile from "../../pageObjectModel/e2eprofile.page.js"
import testdata from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/pomandjsone2e.json"
test("e2e",async({page})=>{
    let url=testdata.url
    let un=testdata.un
    let email=testdata.email
    let pwd=testdata.pwd
    let rpwd=testdata.rpwd
    let pNO=testdata.cNO
    let subject=testdata.sub
    let des=testdata.des
    let altmail=testdata.altmail
    let adress=testdata.adress
    page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepages=new homepage(page)
    let createticket=new createTicket(page)
    let profilepage=new profile(page)
    //lounch url
    await page.goto(url)
    await landingpage.link.click()
    //pass name for name tf
    await signuppage.un.fill(un)
    //email tf
    await signuppage.email.fill(email)
    //password tf
    await signuppage.pwd.fill(pwd)
    //re enter pwd tf
    await signuppage.rpwd.fill(rpwd)
    //contact no tf
    await signuppage.pNO.fill(pNO)
    //gender radio button 
    await signuppage.female.click()
    //submit button
    await signuppage.submit.click()
    //alert -get the message


    //email tf
    await signinpage.email.fill(email)
    //password tf
    await signinpage.pwd.fill(pwd)
    //click on login
    await signinpage.loginbutton.click()
    //click on profile 
    await homepages.profile.click()
    //enter alternative email
    await profilepage.alternatEmail.fill(altmail)
    //change gender from male to female 
    await profilepage.gender.selectOption({index:1})
    //fill adress 
    await profilepage.adress.fill(adress)
    //click on update
    await profilepage.update.click()
    // alert
    await page.waitForTimeout(3000)

    //take ss of updated profile page
    
    let time=new Date().getTime()
    await page.screenshot({path:`screenshot/ticket${time}.png`})
    //click on logout icon
    await homepages.logouticon.click()
    //click on logout  
    await homepages.logout.click()
})