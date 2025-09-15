const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const envFile = "cypress.env.json";
      if (fs.existsSync(envFile)) {
        const env = JSON.parse(fs.readFileSync(envFile));
        config.env = { ...config.env, ...env };
      }
      return config;
    },
  },
});
