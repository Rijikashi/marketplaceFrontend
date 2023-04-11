import Login from "./components/login.js"
import About from "./components/about.js"
import Header from "./components/header.js"
import Shop from "./components/shop.js"
import Contact from "./components/contact.js"
import Cart from "./components/cart.js"
import Product from './components/product.js'
import Homepage from './components/homepage.js'

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-modal';

import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import loginImage from './assets/login_button.png'
import cartImage from './assets/cart_button.png'
import logoImage from './assets/logo_button.png'

const Home = () => {

  const [scene,setScene] = useState(0)
  const [signedIn, setSignedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [idToken, setIdToken] = useState("")
  const [shopType, setShopType] = useState("part")
  const [modalShow, setModalShow] = useState(false)

  let location = useLocation();

  useEffect(() => {
    if(location.state != null){
      if(location.state.admin == 1){
        setIsAdmin(true)
      }
      setUserName(location.state.username)
      setIdToken(location.state.id_token)
      setSignedIn(true)
    }
  }, [location])

  function handleLogoClick(){
    setScene(0)
  }
  function handleShopClick(type){
    setShopType(type)
    setScene(1)
  }
  function handleContactClick(){
    setScene(2)
  }
  function handleAboutClick(){
    setScene(3)
  }
  function handleLoginClick(){
    setScene(4)
  };
  function handleCartClick(){
    setModalShow(!modalShow)
  };
  return (
    // user div "header" to format top, and create button class for header buttons
    <div>
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
      </div>
      <Modal isOpen={modalShow}>
        <div>
          <Button onClick = {handleCartClick}>
            X
          </Button>
        </div>
      </Modal>
      <div className = "body">
        {
          {
            0: <Homepage />,
            1: <Shop shopType = {shopType}/>,
            2: <Contact />,
            3: <About />,
            4: <Login signedIn = {signedIn} idToken = {idToken} userName ={userName}/>,
            5: <Cart />
          }[scene]
        }
      </div>
    </div>
  )
}

export default Home
