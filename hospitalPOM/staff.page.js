
class staff{
    constructor(page){
        this.staffName=page.locator('//input[@id="fname"]')
        this.stafflastName=page.locator('//input[@id="lname"]')
        this.staffadress=page.locator('//input[@class="form-control" and@placeholder="Address"]')
        this.staffPNO=page.locator('//input[@class="form-control" and @placeholder="Contact Number"]')
        this.staffemail=page.locator('//input[@type="email"]')
        this.staffgender=page.locator('//select[@placeholder="Select your Gendere"]')
        this.date=page.locator('//input[@class="form-control" and@name="smbdd"]')
        this.stafftype=page.locator('//select[@name="typesm"]')
        this.workingtime=page.locator('//select[@name="workt"]')
    }
    async staffdetail(name,lname,adress,pNO,email,staffgender,stafftype,workingtime,date){
        await this.staffName.fill(name)
        await this.stafflastName.fill(lname)
        await this.staffadress.fill(adress)
        await this.staffPNO.fill(pNO)
        await this.staffemail.fill(email)
        await this.staffgender.selectOption({index:staffgender})
        await this.stafftype.selectOption({index:stafftype})
        await this.workingtime.selectOption({index:workingtime})
        await this.date.type(date)

    }
}
export default staff