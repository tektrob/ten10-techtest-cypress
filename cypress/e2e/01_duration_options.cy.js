describe('Duration options are present and selectable', () => {
  beforeEach(() => {
    cy.login()
  })

  it('shows Daily, Monthly, Yearly (in order) and Daily is active by default', () => {
    cy.get('#durationList [data-value]')
      .should('have.length', 3)
      .then($items => {
        const values = [...$items].map(el => el.getAttribute('data-value'))
        expect(values).to.deep.equal(['Daily', 'Monthly', 'Yearly'])
      })

    cy.get('#durationList [data-value="Daily"]')
      .should('have.class', 'active')
  })

  it('activates Monthly when clicked', () => {
    cy.get('#durationList [data-value="Monthly"]').click()

    cy.get('#durationList [data-value="Monthly"]').should('have.class', 'active')
    cy.get('#durationList [data-value="Daily"]').should('not.have.class', 'active')
    cy.get('#durationList [data-value="Yearly"]').should('not.have.class', 'active')
  })

  it('activates Yearly when clicked', () => {
    cy.get('#durationList [data-value="Yearly"]').click()

    cy.get('#durationList [data-value="Yearly"]').should('have.class', 'active')
    cy.get('#durationList [data-value="Daily"]').should('not.have.class', 'active')
    cy.get('#durationList [data-value="Monthly"]').should('not.have.class', 'active')
  })
})
