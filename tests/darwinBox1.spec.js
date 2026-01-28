import{test} from "@playwright/test"
import homepage from "../pageObjectModel/darwinBoxhomepage"
import cart from "../pageObjectModel/darwinBoxcartpage"
import testdata from "../testdata/amazon.json"
test("amazon",async({page})=>{
   let url= testdata.url
   let search=testdata.search
   let amazonhomepage=new homepage(page)
 
   await page.goto(url)
   await amazonhomepage.searchTF.fill(search)
   await amazonhomepage.searchicon.click()
   let [w]=await Promise.all([ page.waitForEvent("popup"),
    await amazonhomepage.top.click()])

      let cartpage=new cart(w) 
   await cartpage.cart.click() 
})
// let [w]=await Promise.all([ page.waitForEvent("popup"),
//page.locator('(//div[@class="a-section aok-relative s-image-tall-aspect"])[1]').click({force:true})])
