describe('Responsive Tests', () => {

  const devices = [
    'iphone-16',
    'ipad-2',
    'macbook-15'
  ]

  devices.forEach((device) => {

    it(`Should render correctly on ${device}`, () => {

      cy.viewport(device)

      cy.visit('https://www.saucedemo.com/')

      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="inventory-container"]').should('be.visible')
    })
  })
})