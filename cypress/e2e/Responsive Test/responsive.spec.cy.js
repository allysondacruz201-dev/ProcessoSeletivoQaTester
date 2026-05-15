import users from "../../fixtures/users.json"
import LoginPage from "../Pages/loginPage"
import Products from "../Pages/productsPage"  
import CartPage from "../Pages/cartPage"
import CheckoutPage from "../Pages/checkoutPage"

const loginPage = new LoginPage()
const products = new Products()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

describe('Responsive Tests', () => {

  const devices = [
    'iphone-16',
    'ipad-2',
    'macbook-15'
  ]

  devices.forEach((device) => {

    it(`Should render correctly on ${device}`, () => {

      

      loginPage.accessLoginPage()

      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(users.standardUser.username, users.standardUser.password)
      loginPage.checkProductsPage()
    })
  })
})