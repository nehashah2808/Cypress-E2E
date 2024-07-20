
// write test case under e2e > tests folder

// Test Case for Registration Page

//imported Register Page
import registerPage from "../../pages/registerPage"

//create and initialize page object to access all methods of page class using const
const registerObj = new registerPage()

//import fixture file
import registerData from "../../fixtures/registerData.json"

describe( 'test automation', ()=>{


    it('register flow', ()=> {

        // NOTE - test data will be stored in fixture file and not to pass here explicitly in method calling
        //accessing page methods 
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    

    })




})