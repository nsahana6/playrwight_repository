class request{
    constructor(page){
        this.name=page.locator('//input[@name="name"]')
        this.cNo=page.locator('//input[@name="contact"]')
        this.company=page.locator('//input[@name="company"]')
        this.servicerequested=page.locator('(//input[@class="icheckbox"])[7]')
        this.query=page.locator('//textarea[@class="form-control"]')
        this.submit=page.locator('//input[@type="submit"]')
    }
}
export default request











// class signin{
//     constructor(page){
//         this.email=page.locator('//input[@id="txtusername"]')
//         this.pwd=page.locator('//input[@id="txtpassword"]')
//         this.loginbutton=page.locator('//button[@class="btn btn-primary btn-cons pull-right"]')
//     }
// }
// export default signin