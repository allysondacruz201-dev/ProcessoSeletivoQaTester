describe('Accessibility Tests', () => {

  it('Should not have accessibility violations on login page', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.injectAxe()

    cy.checkA11y()
  })
})