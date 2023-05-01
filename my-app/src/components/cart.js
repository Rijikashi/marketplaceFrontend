import {useEffect} from 'react'
import CartItem from './cartItem.js'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'

const Cart = ({userName,idToken,isAdmin,cart}) => {

  const navigate = useNavigate()

  useEffect(() => {
      console.log(cart)
  },[]);

  function handlePurchase(){
    let blank = []
    navigate("/",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken, cart:blank}})
  }

  return(
    <div>
    {
      cart.map(item =>(
        <CartItem item = {item}/>
      ))
    }
    <Button onClick = {handlePurchase}>
      Buy
    </Button>

    </div>
  )

  // {
  //   shopItems.map(shopItem =>(
  //     <ShopItem item = {shopItem} idToken = {idToken} userName = {userName} isAdmin = {isAdmin}/>
  //   ))
  // }
}
export default Cart
