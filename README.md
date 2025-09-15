
# Boris Bonev Test

A brief description of what this project does

# Ten10TechTest – Cypress E2E Tests

This folder contains Cypress end-to-end tests for the **Ten10TechTest Interest Calculator** application.  
Each feature from the product requirements has been mapped to a dedicated test spec for clarity and maintainability.

---
# Getting Started
---
1. Clone the repo
```text
git clone https://github.com/tektrob/ten10-techtest-cypress.git
```
2. Install dependencies
```text
npm ci
```

## 📂 Folder Structure
```text
cypress/e2e/
01_duration_options.cy.js # Duration options (Daily, Monthly, Yearly)
02_principle_amount.cy.js # Principal amount input
03_rates.cy.js # Interest rate selection
04_calculation.cy.js # Correct interest calculation
05_display.cy.js # Displays interest & total
06_mandatory.cy.js # All fields mandatory
07_missing_feedback.cy.js# Missing inputs feedback
08_rounding.cy.js # Values rounded to 2 decimals
09_responsive.cy.js # Responsive layout checks
10_error_messages.cy.js # Error message handling

support/commands.js # Custom Cypress commands (cy.login)
cypress.config.js # Cypress configuration
cypress.env.json # Local-only environment variables (not committed)
```
---

## 🔑 Environment Variables

All secrets are managed via `cypress.env.json` (ignored from git).  

Example `cypress.env.json` (dummy data):

```json
{
  "EMAIL": "user@example.com",
  "PASSWORD": "Password123!",
  "URL": "http://localhost:3000/"
}
```
---
## In CI pipelines, set these as environment variables:

npx cypress run --spec "cypress/e2e/" --browser chrome

```
⚠️ Notes
The app currently only displays one generic error message (Please fill in all fields.).
Tests are written against that behaviour, but can be extended when field-specific errors are added.

Some calculations (e.g. Monthly interest) follow the app’s current logic (rate / 10) rather than financial convention (rate / 12). Tests are aligned to app behaviour for now.

Images or missing assets (404s) may throw console errors, but tests focus only on functional behaviour.
