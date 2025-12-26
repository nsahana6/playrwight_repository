class signin{
    constructor(page){
        this.email=page.locator('//input[@id="txtusername"]')
        this.pwd=page.locator('//input[@id="txtpassword"]')
        this.loginbutton=page.locator('//button[@class="btn btn-primary btn-cons pull-right"]')
    }
}
export default signin