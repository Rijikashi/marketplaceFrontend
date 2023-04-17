import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-modal';

import {useState, useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'

import loginImage from '../assets/login_button.png'
import cartImage from '../assets/cart_button.png'
import logoImage from '../assets/logo_button.png'

const Header = ( {idToken, userName,isAdmin} ) => {
  const navigate = useNavigate()

  const [modalShow, setModalShow] = useState(false)


  //navigate("/", {state: {username: parsedData.username, admin: parsedData.admin, id_token:id_token}})

  function handleLogoClick(){
    navigate("/",{state: {username:userName, admin:isAdmin, idToken:idToken}})
  }
  function handleShopClick(type){
    //setShopType(type)
    navigate("/shop",{state: {username:userName, admin:isAdmin, idToken:idToken, shopType:type}})
  }
  function handleContactClick(){
    navigate("/contact",{state: {username:userName, admin:isAdmin, idToken:idToken}})
  }
  function handleAboutClick(){
    navigate("/about", {state: {username:userName, admin:isAdmin, idToken:idToken}})
  }
  function handleLoginClick(){
    navigate("/account",{state: {username:userName, admin:isAdmin, idToken:idToken}})
  };
  function handleCartClick(){
    setModalShow(!modalShow)
  };

  return(
    <div className = "header">
      <Button>
        <img src = {logoImage} alt = "Logo" onClick = {handleLogoClick} width = "20" height = "20" />
      </Button>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ↓ shop ↓
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item onClick = {() => handleShopClick("sticker")}> Stickers </Dropdown.Item>
          <Dropdown.Item onClick = {() => handleShopClick("part")}> Parts </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button onClick = {handleContactClick}>
        contact
      </Button>
      <Button onClick = {handleAboutClick}>
        about
      </Button>

      <Button size = 'sm'>
        <img src = {loginImage} alt = "Login" onClick = {handleLoginClick} width="20" height ="20" />
      </Button>
      <Button>
        <img src =  {cartImage} alt = "Cart" onClick = {handleCartClick} width ="20" height = "20"/>
      </Button>
    <Modal isOpen={modalShow}>
      <div>
        <Button onClick = {handleCartClick}>
          X
        </Button>
      </div>
    </Modal>
    </div>
  )

}
export default Header
