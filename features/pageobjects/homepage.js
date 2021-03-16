
class HomePage {
 
    get searchField() { return $("//*[@id='twotabsearchtextbox']")}

    get searchButton() { return $("//*[@id='nav-search-submit-button']")}

    get productname() {return $$("span.a-size-medium.a-color-base.a-text-normal")}

    get addcart() { return $("#add-to-cart-button")}

    get message() { return $("//*[@id='huc-v2-order-row-confirm-text']/h1")}

    get errorMsg() { return $("//span[contains(text(),'Try checking your spelling or use more general ter')]")}

    searchProduct(prodname){
        this.searchField.setValue(prodname);
        this.searchButton.click();
    }

    visitHomePage(){
         browser.url("https://www.amazon.in/");
         browser.maximizeWindow();
    }

    selectProduct(product){
        let productList = $$("span.a-size-medium.a-color-base.a-text-normal")
        productList.forEach(element => {
            if(element.getText() === product){
                    element.click();
                    
            }
        });
       
        const handles = browser.getWindowHandles();
        if (handles.length > 1) {
            browser.switchToWindow(handles[0]);
            browser.closeWindow();
            browser.switchToWindow(handles[1]);
        }
        this.addcart.click();
        browser.pause(5000);
    }

    verifyMsg(){
        expect(this.message).toBeDisplayed();
    }

    verifyErrorMsg(){
        expect(this.errorMsg).toBeDisplayed();
    }
}

export const homePage =  new HomePage();