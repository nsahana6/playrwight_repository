import{test}from "@playwright/test"
test("noukri",async({page})=>{
    await page.goto("https://www.naukri.com/nlogin/login?msg=0&URL=https%3A%2F%2Fmy.naukri.com%3A80")
    await page.locator('//a[@title="Jobseeker Register"]').click()
    await page.locator('//input[@ id="name"]').fill("sahana")

    await page.locator('//input[@ id="email"]').click()
    await page.locator('//input[@ id="email"]').fill('hkjhguhjgfvujhyku1@gmail.com')
    await page.locator('//input[@ id="password"]').click()
    await page.locator('//input[@ id="password"]').fill("14523566")
    await page.locator('//input[@ id="mobile"]').click()
    await page.locator('//input[@ id="mobile"]').fill("6363860000")
    await page.getByText("I'm a fresher").click()
    await page.locator('//i[@ class="removeLocationIcon resman-icon resman-icon-cross resman-pos-left"]').click()
    await page.getByText("Hyderabad").click()
    await page.locator('//i[@ class="ico resman-icon resman-icon-check-box"]').click()
    await page.getByText('Register now').click()

await page.getByPlaceholder("What is your name?").fill("Sahana")
await page.getByPlaceholder("Tell us your Email ID").click()
await page.getByPlaceholder("Tell us your Email ID").fill("hjjgfftyr@gmail.com")
await page.getByLabel("Full name*").click()
await expect(page.getByLabel("Full name*")).fill("sahana")
await page.goto("https://www.amazon.in/s?k=watch+for+woman&crid=1AZLHUX52ITKC&sprefix=wattch%2Caps%2C344&ref=nb_sb_ss_mvt-t11-ranker_2_6")
await page.waitForTimeout(3000)
//let c =await page.locator("//span[@class='a-price-whole' and translate(text(),'₹,.00','')>1200]/ancestor::div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/div[@data-cy='title-recipe']/a/h2/span").allTextContents()
let c=await page.locator("//span[@class='a-price-whole' and translate(text(),'₹,.00','')>1200]/ancestor::div[@class='a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro']/div[@data-cy='title-recipe']/a/h2/span")|("//span[@class='a-price-whole' and translate(text(),'₹,.00','')>1200]").allTextContents()
console.log(c);

})