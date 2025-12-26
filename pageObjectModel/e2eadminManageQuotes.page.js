class manageQoute{
    constructor(page){
        this.view=page.locator('(//button[@class="btn-danger-dark"])[9]')
        this.remark=page.locator('//textarea[@name="adminremark"]')
        this.submit=page.locator('//input[@type="submit"]')
    }
}
export default manageQoute