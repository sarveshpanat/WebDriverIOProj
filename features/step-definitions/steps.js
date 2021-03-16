import { Given, When, Then } from '@cucumber/cucumber';

import { homePage } from "../pageobjects/homepage";


Given(/^I am on a homepage$/, () => {
    homePage.visitHomePage()
});

When(/^I search for a (.+) and add product (.+) to cart$/, (productname, product) => {
    homePage.searchProduct(productname)
    homePage.selectProduct(product)
});


Then(/^I should see product added to cart$/, () => {
    homePage.verifyMsg()
});

When(/^I search for invalid product (.+)$/, (productID) => {
    homePage.searchProduct(productID)
});

Then(/^I should see error message on screen$/, () => {
    homePage.verifyErrorMsg()
});


