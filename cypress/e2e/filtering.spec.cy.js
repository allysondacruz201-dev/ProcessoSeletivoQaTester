describe('Filtering and Buying', () => {
    it('You must filter and buy products', () => {  

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click() 
    cy.get('[data-test="cart-quantity-label"]').should('be.visible')
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('Teste123')
    cy.get('[data-test="postalCode"]').type('123456')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="pony-express"]').should('be.visible')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.get('.login_wrapper-inner').should('be.visible')
    
  })
    
})