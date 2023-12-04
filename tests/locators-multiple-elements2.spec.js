import {test, expect} from '@playwright/test';

test("Finding Locators, Mutliple Elements 2", async ({page})=>{
    
    //visiting the page
    await page.goto("https://www.demoblaze.com/");

    //capturing all the products available in the webpage
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); //waits for all the items form the selector to display
    const allTheProducts = await page.$$("//div[@id='tbodyid']//div//h4/a"); //locator using custom Xpath

    for(const singleProduct of allTheProducts)
    {
        const productNames = await singleProduct.textContent();
        console.log(productNames);


    };

});