import LoginPage from "../Pages/loginPage"

const loginPage = new LoginPage()

describe('Accessibility Tests', () => {

  it('Should not have accessibility violations on login page', () => {

    loginPage.accessLoginPage()

    cy.injectAxe()

    cy.checkA11y()
  })
})