class homepage{
    constructor(page){
        this.createtickectlink=page.getByRole("link",{name:" Create Ticket"})
        this.viewticketlink=page.getByRole("link",{name:" View Ticket"})
        this.request=page.getByRole("link",{name:" Request a Quote"})
        this.profile=page.locator('(//a[@href="profile.php"])[2]')
        this.changepassword=page.locator('//a[@href="change-password.php"]')
        this.logouticon=page.locator('//div[@class="iconset top-settings-dark "]')
        this.logout=page.locator('//a[@href="logout.php"]')
        
}
}
export default homepage