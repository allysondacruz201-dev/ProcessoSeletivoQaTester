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
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('Teste123')
    cy.get('[data-test="postalCode"]').type('12345')
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

describe('Login with Problem User and buy products', () => {
    it('There should be an error at checkout', () => {  

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('Teste123')
    cy.get('[data-test="postalCode"]').type('123456')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="cancel"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.get('.login_wrapper-inner').should('be.visible') 
    
  })
    
})
