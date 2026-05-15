class LoginPage {

    selectorsList() {
    const selectors = {
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        checkInventory: '[data-test="inventory-container"]',
        menuButton: '#react-burger-menu-btn',
        logoutButton: '[data-test="logout-sidebar-link"]',
        checkLoginPage: '.login_wrapper-inner',
        checkMessageError: '[data-test="error"]',
        mainPage: '[data-test="inventory-sidebar-link"]'

    }

    return selectors

}

    accessLoginPage() {
    cy.visit('https://www.saucedemo.com/')

    }

    loginWithAnyUser(username, password) {
    
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()    

    }
    
    clickForLogout() {
        cy.get(this.selectorsList().logoutButton).click()
    }

    checkProductsPage() {
        cy.get(this.selectorsList().checkInventory)
    }

    menuButton() {
        cy.get(this.selectorsList().menuButton).click()
    }

    checkLoginPage() {
        cy.get(this.selectorsList().checkLoginPage).should('be.visible')
    }

    checkLoginFail() {
        cy.get(this.selectorsList().checkMessageError).should('be.visible')
    }

   
   
}
     

export default LoginPage
    
     
    
    
        
        

    


