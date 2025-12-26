class landing{
    constructor(page){
        this.link=page.locator('//a[@class="btn btn-primary btn-xl rounded-pill mt-5"]')
        this.loginlink=page.locator('//a[@href="login.php"]')
        this.adminlink=page.locator('//a[@href="admin/"]')
    }
}
export default landing