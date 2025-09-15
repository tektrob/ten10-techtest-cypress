const expected = ['1%','2%','3%','4%','5%','6%','7%','8%','9%','10%','11%','12%','14%','15%']

describe('Rate selection', () => {
  beforeEach(() => { cy.login() })

  it('shows predefined rates up to 15%', () => {
    cy.get('#dropdownMenuButton').click()
    expected.forEach(label => cy.get(`[id="rate-${label}"]`).should('exist'))
  })

  it('allows choosing a single rate', () => {
    cy.get('#dropdownMenuButton').click()
    cy.get('[id="rate-12%"]').check({ force: true }).should('be.checked')
    cy.get('[id="rate-5%"]').should('not.be.checked')
  })
})
