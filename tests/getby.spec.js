import{test}from "@playwright/test"
//getByLable
test("get by methods",async({page})=>{
     await page.goto("https://demo.nopcommerce.com/login")
    // await page.getByLabel("Email:").fill("sahana@gmail.com")
   // await page.getByLabel("Email",{exact:true}).fill("sahana@gmail.com")//we will get error why b/c here im giving exact match as true but colon is nit there so i will get error 
// await page.getByLabel("Email",{exact:false}).fill("sahana@gmail.com")
//getByPlaceholder
// await page.getByPlaceholder("Search store",{exact:true}).fill("top")
// await page.getByPlaceholder("Search ",{exact:false}).fill("top")
//getByText()
 await page.getByText("Electronics").click()
 await page.getByText("Log in").first().click()
//getByAltText
//await page.getByAltText("nopCommerce demo store",{exact:false}).click()
//await page.getByAltText("nopCommerce ").click()//partial but still working why b/c by default it will take it as false for exact
//getByTitle
// await page.goto("https://demo.nopcommerce.com/electronics")
// await page.waitForTimeout(3000)

// await page.getByTitle("Show products in category Camera & photo").first().click()
// await page.waitForTimeout(3000)
//await page.getByRole("link",{name:'camera & photo'}).first().click()
//getByTesyId
//await page.goto("https://www.saucedemo.com/")
//await page.getByTestId("username").fill("sahana")
})

