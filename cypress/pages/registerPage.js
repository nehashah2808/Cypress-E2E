

//Naveen Automation Labs Register Page Automation 

//url --- https://naveenautomationlabs.com/opencart/index.php?route=account/register


// marking it as export , so that it can be imported in tests folder under "DESCRIBE"
class RegisterPage{



    weblocators = {

        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        telephone : '#input-telephone',
        password : '#input-password',
        passwordConfirm : '#input-confirm',
        policyCheckbox : 'input[type="checkbox"]',
        continue : '.btn.btn-primary'

    }

// Methods - Actions

    // url stored in cypress config file and access via env object. 
    // pass the Key name in env variable to access its value
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){

        //access locator using cy.get
        cy.get(this.weblocators.firstName).type(FName)
        // we are just passing reference here. Actual data will put in fixture file

    }

    enterLastName(LName){

        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email){

        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phoneNo){

        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword(password){

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }


} //class registerPage

module.exports = new RegisterPage();


