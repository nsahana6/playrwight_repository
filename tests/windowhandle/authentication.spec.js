import{test,expect} from '@playwright/test'

test('authpopup',async({browser})=>{



    const context= await browser.newContext(
        // {httpCredentials:
        //     {
        //       username:'admin',
        //       password:'admin'  
        //     }
        // }
    )
    let page = await context.newPage()
    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    //await page.pause()
    await expect(page.locator('//p[text()="congratulations with valid credentials"]')).toContainText("valid")




})

