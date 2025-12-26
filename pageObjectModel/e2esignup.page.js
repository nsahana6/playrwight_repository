class signup{
    constructor(page){
        this.un=page.locator('//input[@id="name"]')
        this.email=page.locator('//input[@id="email"]')
        this.pwd=page.locator('//input[@id="password"]')
        this.rpwd=page.locator('//input[@id="cpassword"]')
        this.pNO=page.locator('//input[@id="txtpassword"]')
        this.female=page.locator('//input[@value="f"]')
        this.submit=page.locator('//input[@class="btn btn-primary btn-cons pull-right"]')  
    }
}
export default signup