class managetickets{
    constructor(page){
        this.userName=page.locator('(//h4[@class="semi-bold"])[7]')
        this.userTextArea=page.locator('(//textarea[@name="aremark"])[7]')
        this.update=page.locator('(//input[@name="update"])[7]')
    }
}
export default managetickets