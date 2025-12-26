import{test} from "@playwright/test"
import landing from "../../hospitalPOM/landing.page"
import hospitaldata from "C:/Users/Manoj Nayak/Desktop/playwright/hospitaltestdata/hospitaldata.json"
import staffdata from 'C:/Users/Manoj Nayak/Desktop/playwright/hospitaltestdata/staffdata.json'
import home from "../../hospitalPOM/home.page"
import staff from "../../hospitalPOM/staff.page"
test("hospital",async({page})=>{
     page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
    })
   
    let landingpage=new landing(page)
    let homepage=new home(page)
    let staffpage=new staff(page)

//login as admin
await landingpage.adminlogin(hospitaldata.url,hospitaldata.adminUN,hospitaldata.adminPW)
//
await homepage.staff.click()
//fill the staff details
await staffpage.staffdetail(staffdata.name,staffdata.lname,staffdata.adress,staffdata.pNO,staffdata.email,staffdata.staffgender,staffdata.stafftype,staffdata.workingtime,staffdata.date)

})
