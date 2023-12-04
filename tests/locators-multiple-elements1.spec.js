import {test, expect} from '@playwright/test';

test("Finding Locators, Mutliple Elements", async ({page})=>{
    
    //visiting the page
    await page.goto("https://www.demoblaze.com/");

    //capturing all the links available in the webpage
    const allTheLinks = await page.$$('a'); //here, 'a' reprsents anchor tag of the element

    //printing the text of every links
    for (const link of allTheLinks)
    {
        const text = await link.textContent();
        console.log(text);

    };

});