import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-modal';

import {useState, useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

import Cart from './cart.js'
import loginImage from '../assets/login_button.png'
import cartImage from '../assets/cart_button.png'
import logoImage from '../assets/logo_button.png'

const Header = ( {idToken, userName,isAdmin,cart} ) => {
  const navigate = useNavigate()

  const [modalShow, setModalShow] = useState(false)

  useEffect( () => {
    console.log("a")
    console.log(idToken)
    console.log(userName)
    console.log(isAdmin)
    console.log(cart)
    console.log("b")
  },[])
  //navigate("/", {state: {username: parsedData.username, admin: parsedData.admin, id_token:id_token}})

  function handleLogoClick(){
    navigate("/",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken, cart:cart}})
  }
  function handleShopClick(type){
    //setShopType(type)
    navigate("/shop",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken, shopType:type,cart: cart}})
  }
  function handleContactClick(){
    navigate("/contact",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken, cart: cart}})
  }
  function handleAboutClick(){
    navigate("/about", {state: {userName:userName, isAdmin:isAdmin, idToken:idToken,cart: cart}})
  }
  function handleLoginClick(){
    navigate("/account",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken,cart: cart}})
  };
  function handleCartClick(){
    setModalShow(!modalShow)
  };

  return(
    <div className = "header">
    IdToken is : {idToken}
    UserName is :{userName}
    isAdmin is : {isAdmin}
      <button onClick = {handleLogoClick}>
        <img src = {logoImage} alt = "Logo"  width = "20" height = "20" />
      </button>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ↓ shop ↓
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item onClick = {() => handleShopClick("sticker")}> Stickers </Dropdown.Item>
          <Dropdown.Item onClick = {() => handleShopClick("part")}> Parts </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button onClick = {handleContactClick}>
        contact
      </button>
      <button onClick = {handleAboutClick}>
        about
      </button>

      { (userName == "") ?
      (<> </>)
      :
      (<>
        Hello {userName}
      </>)
      }

      <button onClick = {handleLoginClick} size = 'sm'>
        <img src = {loginImage} alt = "Login"  width="20" height ="20" />
      </button>
      <button onClick = {handleCartClick}>
        <img src =  {cartImage} alt = "Cart"  width ="20" height = "20"/>
      </button>
    <Modal isOpen={modalShow}>
      <div>
        <button onClick = {handleCartClick}>
          X
        </button>
        <Cart idToken = {idToken} userName = {userName} isAdmin = {isAdmin} cart = {cart} />
      </div>
    </Modal>

    </div>
  )

}
export default Header
