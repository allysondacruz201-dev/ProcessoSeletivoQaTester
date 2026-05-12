describe('Login with Standard User', () => {
  it('Login And open the main page', () => {  
  
  cy.visit('https://www.saucedemo.com/')
   
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
    
    
  })
})

describe('Login with Locked User', () => {
 it('Login should fail', () => {  
  
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    
  })
})

describe('Login with Problem User', () => {
 it('The user must be experiencing a problem', () => {  
  
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get("#react-burger-menu-btn[type='button']").click()
    cy.get("[data-test='logout-sidebar-link']").click()
    cy.get('.login_wrapper-inner').should('be.visible')

  })
})

describe('Login With Performance Glitch User', () => {
 it('User is experiencing navigation problems', () => {  
  
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="inventory-item-desc"]').should('be.visible')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('.inventory_details_desc_container').should('be.visible')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')


  })
})

describe('Login With Error User', () => {
 it('The Login Should Fail', () => {  
  
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('error_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
   
  })
})

describe('Login With Visual User', () => {
 it('User reports visual bugs.', () => {  
  
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('visual_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="inventory-container"]').should('be.visible')
   
  })
})