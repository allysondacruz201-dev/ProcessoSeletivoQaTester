import users from "../../fixtures/users.json"
import LoginPage from "../Pages/loginPage"
import Products from "../Pages/productsPage"  
import CartPage from "../Pages/cartPage"
import CheckoutPage from "../Pages/checkoutPage"
import checkout from "../../fixtures/check-out.json"

const loginPage = new LoginPage()
const products = new Products()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Login with Standard User and buy products', () => {
    it('You must login and purchase products', () => {  

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(users.standardUser.username, users.standardUser.password)
    loginPage.checkProductsPage()

    products.clickToFilter()
    products.byPrice1()
    products.clickToFilter()
    products.byLetters2()
    products.clickToFilter()
    products.byPrice2()
    products.clickToFilter()
    products.byLetters()
    products.selectBackPack()
    products.selectBikeLight()
    products.selectFleeceJacket()
    products.selectOnesie()
    products.selectBoltTShirt()

    cartPage.enterCart()
    cartPage.checkOut()

    checkoutPage.fillFirstName(checkout.checkout.firstName)
    checkoutPage.fillLastName(checkout.checkout.lastName)
    checkoutPage.fillPostalCode(checkout.checkout.postalCode)
    checkoutPage.ClickContinue()
    checkoutPage.ClickFinish()

    products.backProductsPage()
    
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()
    
  })
    
})

describe('Login with Problem User and buy products', () => {
    it('There should be an error at checkout', () => {  

    loginPage.accessLoginPage()

    loginPage.loginWithAnyUser(users.problemUser.username, users.problemUser.password)
    loginPage.checkProductsPage()
    loginPage.checkProductsPage()

    products.selectBackPack()
    products.selectBikeLight()
    products.selectFleeceJacket()
    products.selectOnesie()
    products.selectBoltTShirt()

    cartPage.enterCart()
    cartPage.checkOut()

    checkoutPage.fillFirstName(checkout.checkout.firstName)
    checkoutPage.fillLastName(checkout.checkout.lastName)
    checkoutPage.fillPostalCode(checkout.checkout.postalCode)
    checkoutPage.ClickContinue()

    cartPage.buyError()
    cartPage.cancelButton()
    cartPage.removingBackPack()
    cartPage.removingBikeLight()
    cartPage.removingOnesie()
    cartPage.returnShopping()
    loginPage.menuButton()
    
    loginPage.clickForLogout()
    loginPage.checkLoginPage()
    
  })
    
})
