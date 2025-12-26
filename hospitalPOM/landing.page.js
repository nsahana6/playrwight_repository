class landing{
    constructor(page){
      this.page=page
      this.adminUN=page.locator('//input[@id="field"]')
      this.adminPW=page.locator('//input[@type="password"]')
      this.submit=page.locator('//button[@type="submit"]')
    }
    async adminlogin(url,adminUN,adminPW){
      await this.page.goto(url)
      await this.adminUN.fill(adminUN)
      await this.adminPW.fill(adminPW)
      await this.submit.click()
    }
}
export default landing
