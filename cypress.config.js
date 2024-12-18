const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
  env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
);
