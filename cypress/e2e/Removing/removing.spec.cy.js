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


describe('Removing Products From Cart', () => {
  it('should Remove Products From The Shopping Cart', () => {

    loginPage.accessLoginPage()

    loginPage.loginWithAnyUser(users.standardUser.username, users.standardUser.password)
    loginPage.checkProductsPage()
    
    products.selectBackPack()
    products.selectBikeLight()
    products.selectBoltTShirt()
    products.selectFleeceJacket()
    products.selectOnesie()
    products.selectRedTShirt()

    cartPage.enterCart()
    cartPage.removingBackPack()
    cartPage.removingBikeLight()
    cartPage.removingOnesie()
    cartPage.removingBoltTShirt()
    cartPage.removingFleeceJacket()
    cartPage.removingRedTShirt()
    cartPage.returnShopping()
    

    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()    
    
    
  })
})