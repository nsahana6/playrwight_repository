class home{
    constructor(page){
        this.staff=page.locator('(//a[@href="staff.php"])[1]')
        this.patient=page.locator('(//a[@href="patin.php"])[1]')
        //this.patientinvoice.locator('(//a[@href="invoinfo.php"])[1]')
        this.roominformation=page.locator('(//a[@href="roomavi.php"])[1]')
        this.admitedpatientinfo=page.locator('(//a[@href="admite.php"])[1]')
    }
}
export default home