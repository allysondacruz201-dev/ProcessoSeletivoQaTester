class Products {

    selectorsList() {
    const selectors = {
        backPack: '[data-test="add-to-cart-sauce-labs-backpack"]',
        bikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
        boltTShirt: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        fleeceJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        onesie: '[data-test="add-to-cart-sauce-labs-onesie"]',
        redTShirt: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
        homeButton: '[data-test="back-to-products"]',
        filterButton: '.product_sort_container',
        setName1: '[data-layer="Content"]',
        setName2: '[data-layer="Content"]',
        setPrice1: '[data-layer="Content"]',
        setPrice2: '[data-layer="Content"]',

    }

    return selectors

}

    selectBackPack() {
        cy.get(this.selectorsList().backPack).click()
    }

    selectBikeLight() {
        cy.get(this.selectorsList().bikeLight).click()
    }

    selectBoltTShirt() {
        cy.get(this.selectorsList().boltTShirt).click()
    }

    selectFleeceJacket() {
        cy.get(this.selectorsList().fleeceJacket).click()
    }

    selectOnesie() {
        cy.get(this.selectorsList().onesie).click()
    }

    selectRedTShirt() {
        cy.get(this.selectorsList().redTShirt).click()
    }

    backProductsPage() {
        cy.get(this.selectorsList().homeButton).click()
    }

    clickToFilter(){
        cy.get(this.selectorsList().filterButton)
        
}

    byLetters() {
        cy.get(this.selectorsList().filterButton).select('Name (A to Z)')
    
    }

    byLetters2(){
        cy.get(this.selectorsList().filterButton).select('Name (Z to A)')

    }

    byPrice1() {
        cy.get(this.selectorsList().filterButton).select('Price (low to high)')
    }

    byPrice2() {
        cy.get(this.selectorsList().filterButton).select('Price (high to low)')
    }

}

export default Products