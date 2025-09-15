// Login custom function using ENV file 
Cypress.Commands.add('login', (email = Cypress.env('EMAIL'), password = Cypress.env('PASSWORD'), url = Cypress.env('URL')) => {
  if (!email || !password || !url) {
    throw new Error('Missing EMAIL, PASSWORD or URL. Set in cypress.env.json or env vars CYPRESS_EMAIL / CYPRESS_PASSWORD / CYPRESS_URL.')
  }

  cy.visit(url)
  cy.contains('button', 'Login').click()

  cy.get('#UserName').clear().type(email)
  cy.get('#Password').clear().type(password, { log: false }) // hide in logs
  cy.get('#login-submit').click()

  cy.contains(`Hello ${email}!`).should('be.visible')
})
