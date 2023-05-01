import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from '../components/header.js'

const About = () => {

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
    }
  }, [location])

  return(
    <div>
      <Header idToken = {idToken} userName = {userName} isAdmin = {isAdmin} cart = {cart}/>

      Hi from About
    </div>
  )

}
export default About
