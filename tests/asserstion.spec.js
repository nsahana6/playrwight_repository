import{test,expect}from "@playwright/test"

//test("assertion",async({page})=>{
    //attached
    //await expect(page.getByText('Hidden text')).toBeAttached();
//await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//await expect(page.locator('//input[@id="phone"]')).toBeAttached()
 //await expect(locator).toBeChecked()
//  await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
//  await page.locator('//input[@id="domain_a"]').click()
//  await expect(page.locator('//input[@id="domain_a"]')).toBeChecked()
 //await expect(locator).toBeDisabled()
  //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
 //await page.locator('//input[@id="phone"]').waitFor()
//await expect(page.locator('//input[@id="phone"]')).toBeDisabled()
//await expect(locator).toBeEditable()
//await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//await page.locator('//input[@id="phone"]').waitFor()
//await expect(page.locator('//input[@id="password"]')).toBeEditable()
//await expect(locator).toBeEnabled()
//await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//await expect(page.locator('//input[@id="password"]')).toBeEnabled()
//await expect(locator).toBeHidden():Element is not visible
//..............
//..............
//..............
//await expect(locator).toBeVisible()
//await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//await page.locator('//input[@id="phone"]').waitFor()
//await page.locator('//input[@id="phone"]').isVisible()
//await expect(locator).toContainText()

//})
//Non-retrying assertions
    test("nonrwtrying",async({page})=>{
        //expect(value).toBe()
        await page.goto("https://www.amazon.in/")
     let c=await page.locator('//a[@class="nav-a"]').allTextContents()
await expect(c).toBe(c)
await expect("sahana,12").toContain("12")
await expect([1,2,5,8]).toContain(2)
//expect(value).toBeCloseTo()
await expect(2.25).toBeCloseTo(2.25,3)//it should match any one of the value

let s="sahana"
await expect(s).toBeTruthy()
//expect(value).toBeFalsy()
await expect(null).toBeFalsy()
//expect(value).toBeGreaterThan()
await expect(4).toBeGreaterThan(2)
//expect(value).toBeGreaterThanorEqual()
await expect(55).toBeGreaterThanOrEqual(50)
//expect(value).toBeNaN()
await expect("hi"*55).toBeNaN()
//expect(value).toBeLessThan()
await expect(56).toBeLessThan(60)
//expect(value).toBeLessThanOrEqual()
await expect(60).toBeLessThanOrEqual(70)
//expect(value).toBeNull()
await expect(null).toBeNull()
//expect(value).toBeNull()
await expect("sahana").toBeTruthy()//Ensures that value is true in a boolean context, anything but false, 0, '', null, undefined or NaN. Use this method when you don't care about the specific value.
//expect(value).toBeUndefined()
var a
await expect(a).toBeUndefined()
//expect(value).toContain()
await expect([10,20,30]).toContain(30)
//expect(value).toEqual()
await expect([20,30,66]).toEqual([20,30,66])
//expect(value).toHaveLength()
await expect([20,30,65,54]).toHaveLength(4)
//expect(value).toHaveProperty()
await expect({abc:"sahana",def:"manoj",ghi:"sama"}).toHaveProperty('ghi')
//expect(value).toMatch()
await expect("hey").toMatch(/[aeiouAEIOU]/)
//expect(value).toMatchObject()
await expect({a:"b",b:"c",c:"d",d:"e"}).toMatchObject({a:"b"})

    })
//any
//anything
//objectContaining
//stringContaining
//arrayContaining