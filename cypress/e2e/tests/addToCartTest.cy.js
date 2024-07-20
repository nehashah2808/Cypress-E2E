import homePage from "../../pages/homePage"
import testData from '../../fixtures/testData.json'


describe('test automation' , () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add to Cart flow', () => {
        homePage.searchProduct(testData.product.productName)
        homePage.addToCart()
        homePage.VerifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);

    })

})


