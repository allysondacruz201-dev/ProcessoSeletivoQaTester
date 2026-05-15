import users from '../../fixtures/users.json'
import LoginPage from '../Pages/loginPage'
import Products from '../Pages/productsPage'

const loginPage = new LoginPage()
const products = new Products()

describe('Login with Standard User',  () => {
  it('Login And open the main page', () => {  
    
    loginPage.acessLoginPage()

    loginPage.loginWithAnyUser(users.standardUser.username, users.standardUser.password)
    loginPage.checkProductsPage()
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()
   
  })
})

describe('Login with Locked User', () => {
 it('Login should fail', () => {  
  
  loginPage.acessLoginPage()

  loginPage.loginWithAnyUser(users.lockedUser.username, users.lockedUser.password)
  loginPage.checkLoginFail()
    
  })
})

describe('Login with Problem User', () => {
 it('The user must be experiencing a problem', () => {  
  
  loginPage.acessLoginPage()

  loginPage.loginWithAnyUser(users.problemUser.username, users.problemUser.password)
  loginPage.checkProductsPage()
  loginPage.menuButton()
  loginPage.clickForLogout()
  loginPage.checkLoginPage() 

  })
})

describe('Login With Performance Glitch User', () => {
 it('User is experiencing navigation problems', () => {  
  
  loginPage.acessLoginPage()

  loginPage.loginWithAnyUser(users.performanceUser.username, users.performanceUser.password)
    loginPage.checkProductsPage()
    products.clickBackPack()
    products.checkDetailsProduct()
    products.backProductsPage()
    loginPage.checkProductsPage()
    products.clickBoltTShirt()
    products.checkDetailsProduct()
    products.backProductsPage()
    loginPage.checkProductsPage()
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()


  })
})

describe('Login With Error User', () => {
 it('The Login Should Fail', () => {  
  
  loginPage.acessLoginPage()

  loginPage.loginWithAnyUser(users.errorUser.username, users.errorUser.password)
    loginPage.checkProductsPage()
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()
    
 })
})

describe('Login With Visual User', () => {
 it('User reports visual bugs.', () => {  
  
  loginPage.acessLoginPage()

  loginPage.loginWithAnyUser(users.visualUser.username, users.visualUser.password)
    loginPage.checkProductsPage()
    loginPage.menuButton()
    loginPage.clickForLogout()
    loginPage.checkLoginPage()

  })
})