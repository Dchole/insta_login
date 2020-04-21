require("dotenv").config()
const puppeteer = require("puppeteer")

;(async () => {
  try {
    const browser = await puppeteer.launch(/* {
      headless: false,
      defaultViewport: null
    } */)
    const page = await browser.newPage()

    console.log("Loading...⌚")
    await page.goto("https://www.instagram.com")
    await page.waitForXPath(
      `//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/div/label/input`
    )
    console.log("✅")
    console.log("Signin in...⌚")
    await page.type("input[name=username]", process.env.IGUSERNAME)
    await page.type("input[name=password]", process.env.IGPASS)

    await Promise.all([
      page.waitForNavigation(),
      page.click("button[type=submit]")
    ])

    console.log("✅")
    await page.screenshot({ path: `homepage.png` })

    await browser.close() // Comment this line when you uncomment the puppeteer.launch options
  } catch (err) {
    console.log(err)
  }
})()
