class CartPage {

    selectorsList() {       
    const selectors = {
        enterToCart: '[data-test="shopping-cart-link"]',
        finishCheckOut: '[data-test="checkout"]',
        errorMessage: '[data-test="error"]',
        buyCancelled: '[data-test="cancel"]',
        continueShopping: '[data-test="continue-shopping"]',
        removeProductCart1: '[data-test="remove-sauce-labs-backpack"]',
        removeProductCart2: '[data-test="remove-sauce-labs-bike-light"]',
        removeProductCart3: '[data-test="remove-sauce-labs-onesie"]',
        removeProductCart4: '[data-test="remove-sauce-labs-fleece-jacket"]',
        removeProductCart5: '[data-test="remove-sauce-labs-bolt-t-shirt"]',
        removeProductCart6: '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
        


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

removingBackPack(){
    cy.get(this.selectorsList().removeProductCart1).click()
}

removingBikeLight(){
    cy.get(this.selectorsList().removeProductCart2).click()
}

removingOnesie(){
    cy.get(this.selectorsList().removeProductCart3).click()

}

removingFleeceJacket(){
    cy.get(this.selectorsList().removeProductCart4).click()
}

removingBoltTShirt(){
    cy.get(this.selectorsList().removeProductCart5).click()
}

removingRedTShirt(){
    cy.get(this.selectorsList().removeProductCart6).click()
}

returnShopping(){
    cy.get(this.selectorsList().continueShopping).click()
    
}

}

export default CartPage