import{test}from "@playwright/test"
import path from "path";
import fs from "fs";
test("upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // console.log(__dirname);
    //await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uploadfiles/resume2.xlsx"))
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume.txt")
    await page.waitForTimeout(4000)
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume.txt","C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume2.xlsx"])
    await page.locator('//button[text()="Upload Multiple Files"]').click()
    await page.waitForTimeout(4000)
    
})
//...........sysyem storage..........
test("upload system file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // console.log(__dirname);
    //await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uploadfiles/resume2.xlsx"))
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manoj Nayak/Desktop/New Text Document.txt")
    //await page.waitForTimeout(4000)
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.waitForTimeout(4000)

    // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume.txt","C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume2.xlsx"])
    // await page.locator('//button[text()="Upload Multiple Files"]').click()
    // await page.waitForTimeout(4000)
    
})
//............to remove files................................
test("remove  file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // console.log(__dirname);
    //await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uploadfiles/resume2.xlsx"))
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manoj Nayak/Desktop/New Text Document.txt")
    //await page.waitForTimeout(4000)
    await page.locator("#singleFileInput").setInputFiles([])
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.waitForTimeout(4000)

    // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume.txt","C:/Users/Manoj Nayak/Desktop/playwright/tests/uploadfiles/resume2.xlsx"])
    // await page.locator('//button[text()="Upload Multiple Files"]').click()
    // await page.waitForTimeout(4000)
})
//..........................DOWNLOAD FILE.......................to rojext folder or system folder
test.only("download  file",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
   
    await page.locator('//textarea[@id="writeArea"]').fill("Hi Sahana")
    await page.locator("#fileName").fill("newfile.txt")
    // let [download]=await Promise.all([
    // page.waitForEvent("download"),
    // page.locator('//button[@id="downloadButton"]').click()
    // ])
    //.....without using promise.all...
     let downloads=page.waitForEvent("download")

    await page.locator('//button[@id="downloadButton"]').click()
    let download=await downloads

    let file="C:/Users/Manoj Nayak/Desktop/playwright/downloadedFiles"// here we can pass local system folder path 
    let filename=await download.suggestedFilename()
    let fullpath=path.join(file,filename)
    //console.log(filename);
    await download.saveAs(path.join(__dirname,"../../downloadedFiles",filename))
    await download.saveAs(path.join(file,filename))
    // console.log(await download.path());
    
    await page.waitForTimeout(4000)
    //.......verify if saved........
  if (fs.existsSync(fullpath)){
    console.log(fullpath);
    
  }
  else{
    console.log("no such files exists");
    
  }
})
    