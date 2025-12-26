class changepassword{
    constructor(page){
       this.oldPW=page.locator('//input[@name="oldpass"]')
       this.newPW=page.locator('//input[@name="newpass"]')
       this.cofirmPW=page.locator('//input[@id="confirmpassword"]')
       this.change=page.locator('//input[@name="change"]')
    }
}
export default changepassword