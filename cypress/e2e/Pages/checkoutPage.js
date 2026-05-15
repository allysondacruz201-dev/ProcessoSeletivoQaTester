class CheckoutPage {   

    selectorsList() {
    const selectors = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        postalCode: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        finishButton: '[data-test="finish"]',
        checkOut: '[data-test="checkout"]',
        checkFinish: '[data-test="pony-express"]'
    }
    return selectors
    }

    fillFirstName(firstName){
        cy.get(this.selectorsList().firstName).type(firstName)
    }

    fillLastName(lastName){
        cy.get(this.selectorsList().lastName).type(lastName)
    }

    fillPostalCode(postalCode){
        cy.get(this.selectorsList().postalCode).type(postalCode)
    }

    ClickContinue(){  
        cy.get(this.selectorsList().continueButton).click()
    }

    ClickFinish(){
        cy.get(this.selectorsList().finishButton).click()
    }

    checkFinish(){
        cy.get(this.selectorsList().checkFinish).should('be.visible')

}

    doCheckout(){
        cy.get(this.selectorsList().checkOut)
    }

}

export default CheckoutPage