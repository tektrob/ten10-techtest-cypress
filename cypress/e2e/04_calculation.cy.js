// --- Helpers ---
const rateDec = p => p / 100
const money = n => n.toFixed(2)
const interestFor = (P, r, dur) => {
  const R = rateDec(r)
  if (dur === 'Daily')   return P * (R / 365)
  if (dur === 'Monthly') return P * (R / 10)
  if (dur === 'Yearly')  return P * R
  return 0
}

function selectRate(rate) {
  cy.get('#dropdownMenuButton').click()
  cy.get(`[id="rate-${rate}%"]`).check({ force: true })
}

function selectDuration(duration) {
  cy.get(`#durationList [data-value="${duration}"]`).click(({ force: true }))
}

// --- Tests ---
describe('Calculation correctness', () => {
  beforeEach(() => {
    cy.login()
  })

  const scenarios = [
    { P: 10000, r: 12, dur: 'Monthly' },
    { P: 7500,  r: 5,  dur: 'Daily' },
    { P: 1200,  r: 8,  dur: 'Yearly' },
  ]

  scenarios.forEach(({ P, r, dur }) => {
    it(`computes ${dur} interest for £${P} @ ${r}%`, () => {
      // principal
      cy.get('#customRange1').invoke('val', P).trigger('input')

      // rate
      selectRate(r)

      // duration
      selectDuration(dur)

      // consent
      cy.get('#gridCheck1').check({ force: true })

      // calculate
      cy.contains('button', 'Calculate').click()

      // expected
      const I = interestFor(P, r, dur)
      const T = P + I

      cy.get('#interestAmount')
      .should('contain', `Interest Amount: ${money(I)}`)

      cy.get('#totalAmount')
      .should('contain', `Total Amount with Interest: ${money(T)}`)
    })
  })
})
