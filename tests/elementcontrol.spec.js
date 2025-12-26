import{test}from"@playwright/test"
test("elements controls",async({page})=>{
    //await page.goto("https://demoapps.qspiders.com/")
    // await page.locator('//main[@class="h-[55vh] w-[40vw] bg-no-repeat pt-[-5rem] ps-12 bg-center bg-contain aos-init aos-animate"]').click()
    //await page.getByRole('link').filter({ hasText: 'UI Testing ConceptsExperience' }).click()
    //await page.locator("#name").fill("sahana")
    //input value:to get the text which is not present in dom
    //let p=await page.locator("#name").inputValue()
    //console.log(p);
    
    //await page.locator("#email").fill("sahana@gmail.com")
    //await page.locator('//button[@type="submit"]').click()
    //await page.pause(3000)
    // let a=await page.locator('//section[@class="poppins text-[14px]"and text()="Radio Button"]').innerText()
// console.log(a);
//let b=await page.locator('//section[@class="poppins text-[14px]"and text()="Radio Button"]').textContent()
//console.log(b);
//allTextContent
//let c=await page.locator('//section[@class="poppins text-[14px]"]').allTextContents()
//console.log(c);
//getAttribute("att_name")=>page.locator("selector").getAttribute("att_name")
//await page.goto("https://www.google.com/")
//let s=await page.locator('//textarea[@jsname="yZiJbe"]').getAttribute('aria-controls')
//console.log(s);
//all():no autowait
// await page.goto("https://www.flipkart.com/")
// let p=await page.locator('//img[@alt="Image"]').all()//if we dont use all() then it will judt return the selector
// console.log(p);
//isVisible():no autowait
//await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//let q1=await page.locator('//input[@id="phone"]').fill("smsmsmsm")//=>to make isVisible to wait or we can use waitFor
//waitFor():waits till locator is loaded(default settime)
// let q1=await page.locator('//input[@id="phone"]').waitFor()
// let q=await page.locator('//input[@id="phone"]').isVisible()
// console.log(q);
//isEnabled()
// let q1=await page.locator('//input[@id="phone"]').waitFor()
// let q=await page.locator('//input[@id="phone"]').isEnabled()
// console.log(q);
//isDisabled()
// let q1=await page.locator('//input[@id="phone"]').waitFor()
// let q=await page.locator('//input[@id="phone"]').isDisabled()
// console.log(q);
//isEditables()

 //let q1=await page.locator('//input[@id="phone"]').waitFor()
// let q=await page.locator('//input[@id="phone"]').isEditable()//for text field:true
await page.goto("https://demoapps.qspiders.com/ui/radio")
await page.locator('(//input[@type="radio"])[2]').waitFor()
let q=await page.locator('(//input[@type="radio"])[2]').isEditable()
console.log(q);
//isChecked()
//await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
// await page.locator('//input[@id="domain_a"]').click()
// let a=await page.locator('//input[@id="domain_a"]').isChecked()//here we will clicking on it and checking so we will get true 
//console.log(a);
// await page.locator('//input[@id="domain_a"]').waitFor()
// let a=await page.locator('//input[@id="domain_a"]').isChecked()//false because we are not clicking on that chechbox
// console.log(a);

})
