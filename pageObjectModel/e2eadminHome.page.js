class adminhomepage{
     constructor(page){
        this.userlink=page.locator('//a[@href="manage-users.php"]')
        this.managetickets=page.locator('//a[@href="manage-tickets.php"]')
        this.manageQoute=page.locator('//a[@href="manage-quotes.php"]')
        this.logouticon=page.locator('//div[@class="iconset top-settings-dark "]')
        this.logout=page.locator('//a[@href="logout.php"]')
        this.useracces=page.locator('//a[@href="user-access-log.php"]')
}
}
export default adminhomepage