require("dotenv").config()
const puppeteer = require("puppeteer")

;(async () => {
  try {
    const browser = await puppeteer.launch()
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
      page.waitForNavigation(), // The promise resolves after navigation has finished
      page.click("button[type=submit]") // Clicking the link will indirectly cause a navigation
    ])

    console.log("✅")
    await page.screenshot({ path: `homepage${Date.now()}.png` })

    await browser.close()
  } catch (err) {
    console.log(err)
  }
})()
