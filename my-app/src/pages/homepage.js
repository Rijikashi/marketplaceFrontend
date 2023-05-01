import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../components/header.js'
import Cart from '../components/cart.js'

const Homepage = () => {

  let location = useLocation()
  const [idToken, setIdToken] = useState("")
  const [userName, setUserName] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [cart,setCart] = useState([])

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
      console.log(cart)
    }
  }, [location])

  return(
    <div>
      <Header idToken = {idToken} userName = {userName} isAdmin ={isAdmin} cart = {cart}/>
      Hi from Homepage

    </div>
  )

}
export default Homepage
