class CartPage {

    selectorsList() {       
    const selectors = {
        enterToCart: '[data-test="shopping-cart-link"]',
        finishCheckOut: '[data-test="checkout"]',
        errorMessage: '[data-test="error"]',
        buyCancelled: '[data-test="cancel"]',
        returnShopping: '[data-test="continue-shopping"]',
        removeProductCart1: '[data-test="remove-sauce-labs-backpack"]',
        removeProductCart2: '[data-test="remove-sauce-labs-bike-light"]',
        removeProductCart3: '[data-test="remove-sauce-labs-onesie"]'
        


    }
    return selectors
}

checkOut() { 
    cy.get(this.selectorsList().finishCheckOut).click()

}



enterCart() {
    cy.get(this.selectorsList().enterToCart).click()

}

buyError(){
    cy.get(this.selectorsList().errorMessage).should('be.visible')
}

cancelButton(){
    cy.get(this.selectorsList().buyCancelled).click()

}

removingProduct1(){
    cy.get(this.selectorsList().removeProductCart1).click()
}

removingProduct2(){
    cy.get(this.selectorsList().removeProductCart2).click()
}

removingProduct3(){
    cy.get(this.selectorsList().removeProductCart3).click()

}

returnShopping(){
    cy.get(this.selectorsList().returnShopping).click()
}

}

export default CartPage