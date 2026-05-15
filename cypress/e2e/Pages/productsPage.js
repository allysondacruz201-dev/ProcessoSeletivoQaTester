class Products {

    selectorsList() {
    const selectors = {
        backPack: '[data-test="add-to-cart-sauce-labs-backpack"]',
        backPackDetails: '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]',
        bikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
        bikeLightDetails: '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]',
        boltTShirt: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        boltTShirtDetails: '[data-test="item-1-title-link"] > [data-test="inventory-item-name"]',
        fleeceJacket: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        fleeceJacketDetails: '[data-test="item-5-title-link"] > [data-test="inventory-item-name"]',
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
        cy.get(this.selectorsList().backPack).click({ multiple: true })
    }

    detailBackPack() {
        cy.get(this.selectorsList().backPackDetails).click()
    }

    selectBikeLight() {
        cy.get(this.selectorsList().bikeLight).click()
    }

    detailBikeLight() {
        cy.get(this.selectorsList().bikeLightDetails).click()
    }

    selectBoltTShirt() {
        cy.get(this.selectorsList().boltTShirt).click()
    }

    detailBoltTShirt() {
        cy.get(this.selectorsList().boltTShirtDetails).click()
    }

    selectFleeceJacket() {
        cy.get(this.selectorsList().fleeceJacket).click()
    }

    detailFleeceJacket() {
        cy.get(this.selectorsList().fleeceJacketDetails).click()   
    }

    selectOnesie() {
        cy.get(this.selectorsList().onesie).click()
    }

    detailOnesie() {
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