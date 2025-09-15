describe('Rounding', () => {
  beforeEach(() => { 
    cy.login()
  })

  it('interest & total display 2 decimal places', () => {
    cy.get('#customRange1').invoke('val', 1234).trigger('input')
    cy.get('#dropdownMenuButton').click()
    cy.get('[id="rate-11%"]').check({ force:true })
    cy.get('#durationList [data-value="Monthly"]').click(({ force:true }))
    cy.get('#gridCheck1').check({ force:true })
    cy.contains('button','Calculate').click()

    cy.get('#interestAmount')
      .invoke('text')
      .should('match', /^Interest Amount: \d+\.\d{2}$/)

    cy.get('#totalAmount')
      .invoke('text')
      .should('match', /^Total Amount with Interest: \d+\.\d{2}$/)
  })
})
