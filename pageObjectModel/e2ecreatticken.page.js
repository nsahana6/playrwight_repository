class createTicket{
    constructor(page){
        this.subject=page.locator('//input[@id="subject"]')
        this.taskDD=page.locator('//select[@name="tasktype"]')
        this.priorityDD=page.locator('//select[@name="priority"]')
        this.description=page.locator('//textarea[@name="description"]')
        this.send=page.locator('//input[@name="send"]')
    }
}
export default createTicket