import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import ShopItem from '../components/shopitem.js'
import Header from '../components/header.js'

const Shop = () => {

  let location = useLocation()

  const [idToken, setIdToken] = useState("")
  const [userName, setUserName] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [cart,setCart] = useState([])

  const [shopType, setShopType] = useState("")
  const [shopItems,setShopItems] = useState([])
  const [shopLoaded,setShopLoaded] = useState(false)
  const apiURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    if(location.state != null){
      if(location.state.isAdmin == 1){
        setIsAdmin(true)
      }
      else{
        setIsAdmin(false)
      }
      if(location.state.cart != null){
        setCart(location.state.cart)
      }
      setUserName(location.state.userName)
      setIdToken(location.state.idToken)
      setShopType(location.state.shopType)
    }
  }, [location])

  useEffect( () => {
    fetch( apiURL + "/product?type=" + shopType, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => response.json())
    .then((json) => {
      setShopLoaded(true)
      setShopItems(json)
      console.log(json)
    })
  }, [shopType])

  return(
    <>
      <Header idToken = {idToken} userName = {userName} isAdmin = {isAdmin} cart = {cart}/>
      <div className = 'shop'>
      {
        shopItems.map(shopItem =>(
          <ShopItem item = {shopItem} idToken = {idToken} userName = {userName} isAdmin = {isAdmin} cart ={cart}/>
        ))
      }
      </div>
      Hi from Shop with {shopType}
    </>
  )

}
export default Shop
