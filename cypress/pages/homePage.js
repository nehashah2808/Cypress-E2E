

/**
 * Home Page
 * Scenario :::
 * 1. Login
 * 2. Land on Home page
 * 3. Search Product > Macbook & Hit Search
 * 4. Add product to Cart
 * 5. Validate Assertion - Success Message
 */


// Create class homePage

class Homepage {


    weblocators = {

        search_input : '#search input',
        click_search : '.btn.btn-default.btn-lg',
        product : 'img[title="MacBook"]',
        addtocart : 'Add to Cart',
        successMessages : 'div.alert.alert-success.alert-dismissible'

    }
    

    // Methods

    searchProduct(productName){
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }

    addToCart(){
        cy.contains(this.weblocators.addtocart).first().click()
    }

    VerifySuccessMessage(){
        return cy.get(this.weblocators.successMessages)

    }

}

module.exports = new Homepage();