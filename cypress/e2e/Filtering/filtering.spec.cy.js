import users from "../../fixtures/users.json"
import LoginPage from "../Pages/loginPage"
import Products from "../Pages/productsPage"  
import CartPage from "../Pages/cartPage"
import CheckoutPage from "../Pages/checkoutPage"
import checkout from "../../fixtures/check-out.json"




const loginPage = new LoginPage()
const products = new Products()
const checkoutPage = new CheckoutPage()
const cartPage = new CartPage()


describe('Filtering and Buying', () => {
    it('You must filter and buy products', () => {  

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
    products.selectBoltTShirt()
    products.selectFleeceJacket()
    products.selectOnesie()
    products.selectRedTShirt()

    cartPage.enterCart()
    cartPage.checkOut()

    checkoutPage.fillFirstName(checkout.checkout.firstName)
    checkoutPage.fillLastName(checkout.checkout.lastName)
    checkoutPage.fillPostalCode(checkout.checkout.postalCode)
    checkoutPage.ClickContinue()
    checkoutPage.ClickFinish()

    products.backProductsPage()

    loginPage.checkProductsPage()
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()
    
  })
    
})