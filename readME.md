## Download or Clone Repository

Run `git clone <repository-link>`.
Or Download the zip file and extract it.

## Install Dependencies

Run `yarn` or `yarn install` if you have yarn installed.
if you are using npm run `npm i` or `npm install`

## Set environment variables

Create a [.env] file in the project root directory (i.e where index.js is located) and set
IGUSERNAME=<your_instagram_username>
IGPASS=<your_instagram_password>
Make sure you save the .env file

## Run the program

Run `yarn start` or `npm start` or `node index` in your terminal to run the script.
When the script is done, you should see an image file in your project root directory called `homepage.png`
Open the image file to see the screenshot

## If failed

If it didn't work it's probably because your username or password is incorrect so check and try again.

## Run Headful Chrome

If you want to see the script working in preview mode (i.e open a browser) you can disabled the comments in `puppeteer.launch()`.
Comment `browser.close()` to keep the browser open

## Requirements

1 - Install git <br>
2 - Have node install <br>
3 - Install yarn (Optional)

If you don't have `yarn` then delete `yarn.lock` file before running `npm i`
