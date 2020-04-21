Download or clone repository then run yarn or yarn install to install all dependencies.
Create a .env file in the project root directory (i.e. Where index.js is located).
Create environment variables IGUSERNAME and IGPASS in the .env file. 
    - Example:
        IGUSERNAME=your_username
        IGPASS=your_password
        
Save the .env file and run index.js.
You should see a screenshot in your project root directory called homepage.png.
Open and see the screenshot of your page.
To see the process happening live in browser, uncomment the commented field in puppeteer.lauch() and uncomment await browser.close