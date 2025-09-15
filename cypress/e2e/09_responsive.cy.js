const sizes = [[375,812], [768,1024], [1280,800]] // phone, tablet, desktop

describe('Responsive layout', () => {
  beforeEach(() => { cy.login() })

  sizes.forEach(([w,h]) => {
    it(`renders key controls at ${w}x${h}`, () => {
      cy.viewport(w,h)
      cy.get('#customRange1').should('be.visible')
      cy.get('#dropdownMenuButton').should('be.visible')
      cy.get('#durationList').should('be.visible')
      cy.contains('button','Calculate').should('be.visible')
    })
  })
})