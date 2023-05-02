import {useLocation,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Header from '../components/header.js'
import Button from 'react-bootstrap/Button'
const Product = () => {

  let location = useLocation()
  const navigate = useNavigate()

  const [idToken, setIdToken] = useState("")
  const [userName, setUserName] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [prodName,setProdName] = useState("test")
  const [cart,setCart] = useState([])
  const [added,setAdded] = useState(false)

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
      setProdName(location.state.item.name)
    }
  }, [location])

  useEffect(() =>{
    if(added == true){
      navigate("/",{state:{userName:userName, admin:isAdmin, idToken:idToken, cart:cart}})
    }
  },[added])
  return(
    <div>
      <Header idToken = {idToken} userName = {userName} isAdmin = {isAdmin} cart = {cart}/>

      Hi from product
      product is {prodName}
      <Button onClick = {() => {
        setCart((cart) => [
          ...cart,
          location.state.item
        ]);
        setAdded(true)
      }} >
        Add to cart
      </Button>
    </div>
  )

}
export default Product
