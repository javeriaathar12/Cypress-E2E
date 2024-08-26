const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement Node.js event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    env: {
      URL: 'https://parabank.parasoft.com/parabank/register.htm;jsessionid=87462AEA73E8DFB2944D4F5383FE1722'
    },
  },
});
