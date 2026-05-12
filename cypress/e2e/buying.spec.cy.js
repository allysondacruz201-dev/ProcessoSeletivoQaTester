describe('Login with Standard User and buy products', () => {
    it('You must login and purchase products', () => {  

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    
  })
    
})
