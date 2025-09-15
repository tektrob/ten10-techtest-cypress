describe('Principal input', () => {
  beforeEach(() => { cy.login() })

  it('updates selected value as the slider moves', () => {
    cy.get('#customRange1').invoke('val', 3000).trigger('input')
    cy.get('#selectedValue').should('have.text', '3000')
    cy.get('#customRange1').invoke('val', 11200).trigger('input')
    cy.get('#selectedValue').should('have.text', '11200')
  })
})