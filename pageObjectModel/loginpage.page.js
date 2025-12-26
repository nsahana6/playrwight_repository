class loginpage{
    constructor(page){
      this.untf=page.locator('//input[@id="username"]') 
      this.pwdtf=page.locator('//input[@id="password"]') 
      this.submit=page.locator('//button[@id="submit"]')
    }
}
export default loginpage