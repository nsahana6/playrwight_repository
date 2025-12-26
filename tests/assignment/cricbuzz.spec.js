import{test}from "@playwright/test"
test("cricbuzz",async()=>{
     await page.goto('https://www.cricbuzz.com/')
      await page.getByText('Live Scores').click()
      await page.locator('(//div[@class="flex flex-col gap-px"]//a[@title="Live Score"])[1]').click()
      await page.getByText('Scorecard').click()
      let a=await page.locator('(//div[@class="font-bold " and text()="Batter"])[3]/../../../descendant::a[@class="text-cbTextLink hover:underline text-sm tb:text-xs wb:text-sm"]|(//div[@class="font-bold " and text()="Batter"])[3]/../../../descendant::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"]').allTextContents()
      console.log(a);
})