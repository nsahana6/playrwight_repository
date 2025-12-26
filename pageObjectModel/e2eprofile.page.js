class profile{
    constructor(page){
        this.alternatEmail=page.locator('//input[@name="alt_email"]')
        this.adress=page.locator('//textarea[@name="address"]')
        this.gender=page.locator('//select[@name="gender"]')
        this.update=page.locator('//input[@name="update"]')
        
    }
}
export default profile