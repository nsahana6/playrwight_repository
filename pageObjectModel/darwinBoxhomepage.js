class homepage{
    constructor(page){
        this.searchTF=page.getByPlaceholder('Search Amazon.in')
        this.searchicon=page.locator('//input[@id="nav-search-submit-button"]')
        this.top=page.locator(`//img[@alt="Dream Beauty Fashion Women's Long Sleeve Slim Fit Top/T-Shirt Henley Neck Casual (Top-Saiyaara-1)"]`)
        this.cart=page.locator('//input[@id="add-to-cart-button"]')

    }
}
export default homepage