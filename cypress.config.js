const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl : 'https://naveenautomationlabs.com/opencart/index.php?route=account/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  // created an env object variable to store website URL and use in Page class
env: {
  URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
}

});
