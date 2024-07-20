const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // created an env object variable to store website URL and use in Page class
env: {
  URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
}

});
