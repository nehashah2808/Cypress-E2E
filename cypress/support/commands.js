// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import registerPage from "../pages/registerPage";
import registerData from "../fixtures/registerData.json"

// Common login functionality for all tests (Reusable function)
Cypress.Commands.add('login', (email, password) => {

    cy.visit('/login'); // base url will be fetched from config file
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('input.btn.btn-primary').click();
});

Cypress.Commands.add('userRegistration', () => {
    cy.visit('/register');
    registerPage.enterFirstName(registerData.firstName)
    registerPage.enterLastName(registerData.lastName)
    registerPage.enterEmail(registerData.email)
    registerPage.enterTelephone(registerData.telephone)
    registerPage.enterPassword(registerData.password)
    registerPage.selectCheckbox()
    registerPage.clickOnContinue()
})