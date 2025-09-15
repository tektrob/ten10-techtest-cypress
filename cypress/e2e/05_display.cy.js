describe('Displays interest & total', () => {
  beforeEach(() => { cy.login() })

  it('renders both labels after calculation', () => {
    cy.get('#customRange1').invoke('val', 5000).trigger('input')
    cy.get('#dropdownMenuButton').click()
    cy.get('[id="rate-10%"]').check({ force:true })
    cy.get('#durationList [data-value="Yearly"]').click({ force: true })
    cy.get('#gridCheck1').check({ force:true })
    cy.contains('button','Calculate').click()

    // Interest line
    cy.get('#interestAmount')
      .should('be.visible')
      .invoke('text')
      .should('match', /^Interest Amount: \d+\.\d{2}$/)

      // Total line
    cy.get('#totalAmount')
      .should('be.visible')
      .invoke('text')
      .should('match', /^Total Amount with Interest: \d+\.\d{2}$/)

  })
})
