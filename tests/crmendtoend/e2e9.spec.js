import{test}from "@playwright/test"
import landing from "../../pageObjectModel/e2elanding.page.js"
import signup from "../../pageObjectModel/e2esignup.page.js"
import signin from "C:/../Users/Manoj Nayak/Desktop/playwright/pageObjectModel/e2esignin.page.js"
import homepage from "../../pageObjectModel/e2ehomepage.page.js"
import createTicket from "../../pageObjectModel/e2ecreatticken.page.js"
import testdata from "C:/Users/Manoj Nayak/Desktop/playwright/testdata/pomandjsone2e.json"
import request from "C:/Users/Manoj Nayak/Desktop/playwright/pageObjectModel/e2erequest.page.js"
import profile from "../../pageObjectModel/e2eprofile.page.js"
import changepassword from "../../pageObjectModel/e2echangepassword.page.js"


test("e2e",async({page})=>{
    let url=testdata.url
    let un=testdata.un
    let email=testdata.email
    let pwd=testdata.pwd
    let rpwd=testdata.rpwd
    let pNO=testdata.cNO
    let subject=testdata.sub
    let des=testdata.des
    let query=testdata.query
    let company=testdata.company
    let altmail=testdata.altmail
    let adress=testdata.adress
    let oldpw=testdata.oldPW
    let newPW=testdata.newPW

    // page.on("dialog",async(dialog)=>{
    //     console.log(await dialog.message());
    //     await dialog.accept()
    //})
    let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signinpage=new signin(page)
    let homepages=new homepage(page)
    let createticket=new createTicket(page)
    let requests=new request(page)
    let profilepage=new profile(page)
    let changePW= new changepassword(page)
    
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
   //click on request quesry
    await homepages.request.click()
   //enter company name
    await requests.company.fill(company)
   //select any one option in service required
    await requests.servicerequested.click()
   //fill query textfield
    await requests.query.fill(query)
   //click on submit
    await requests.submit.click()
    await page.waitForTimeout(3000)
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
    //click on requrst quesry
    await homepages.request.click()
   //enter company name
    await requests.company.fill(company)
   //select any one option in service required
    await requests.servicerequested.click()
   //fill query textfield
    await requests.query.fill(query)
   //click on submit
    await requests.submit.click()
    await page.waitForTimeout(3000)
    await homepages.createtickectlink.click()
    //add subject to sub tf
    await createticket.subject.fill(subject)
    //select an option from task type dropdown
    await createticket.taskDD.selectOption({value:"ot1"})
    //priority dropdown
    await createticket.priorityDD.selectOption({value:"important"})
    //des textf
    await createticket.description.fill(des)
    //send button
    await createticket.send.click() 
    //alert message

    //click on view ticket
    await homepages.viewticketlink.click()
    //take screen short
    let time1=new Date().getTime()
    await page.screenshot({path:`screenshot/ticket${time1}.png`})
    //open change password page
    await homepages.changepassword.click()
    //click on old password TF
    await changePW.oldPW.fill(pwd)
    //fill new password
    await changePW.newPW.fill(newPW)
    //enter confirm pw
    await changePW.cofirmPW.fill(newPW)
    //click on change
    await changePW.change.click()
    //click on logout icon
    await homepages.logouticon.click()
    //click on logout  
    await homepages.logout.click()
})
   