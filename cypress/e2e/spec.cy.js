describe('First Test', () => {//edit name
  it('Visits the page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('ترابرنت')
    cy.contains('درباره ما').click()
    cy.url().should('include', '/aboutus')
  })
})
describe('Second Test', () => {
  it('Visits the page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('sdsd')
  })
})