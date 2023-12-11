const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 60000,
  },
});

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    reportFilename: "[datetime]-automation-report",
    timestamp: "longDate",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    cacheAcrossSpecs: true,
    experimentalRunAllSpecs: true,
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    baseUrl: "https://merchant.fumopay.dev",
    defaultCommandTimeout: 60000,
    viewportHeight: 900,
    viewportWidth: 1400,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
  
      });
    },
  },
});