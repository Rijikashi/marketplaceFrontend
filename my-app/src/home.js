// import Login from "./components/login.js"
// import About from "./components/about.js"
// import Header from "./components/header.js"
// import Shop from "./components/shop.js"
// import Contact from "./components/contact.js"
// import Cart from "./components/cart.js"
// import Product from './components/product.js'
// import Homepage from './components/homepage.js'
//
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Modal from 'react-modal';
//
// import {useState, useEffect} from 'react'
// import {useLocation} from 'react-router-dom'
//
// import loginImage from './assets/login_button.png'
// import cartImage from './assets/cart_button.png'
// import logoImage from './assets/logo_button.png'
//
// const Home = () => {
//
//   const [scene,setScene] = useState(0)
//   const [signedIn, setSignedIn] = useState(false)
//   const [userName, setUserName] = useState("")
//   const [isAdmin, setIsAdmin] = useState(false)
//   const [idToken, setIdToken] = useState("")
//   const [shopType, setShopType] = useState("part")
//
//   let location = useLocation();
//
//   useEffect(() => {
//     if(location.state != null){
//       if(location.state.admin == 1){
//         setIsAdmin(true)
//       }
//       setUserName(location.state.username)
//       setIdToken(location.state.id_token)
//       setSignedIn(true)
//     }
//   }, [location])
//
//   return (
//     // user div "header" to format top, and create button class for header buttons
//     <div>
//       <div className = "body">
//         {
//           {
//             0: <Homepage />,
//             1: <Shop shopType = {shopType}/>,
//             2: <Contact />,
//             3: <About />,
//             4: <Login signedIn = {signedIn} idToken = {idToken} userName ={userName}/>,
//             5: <Cart />
//           }[scene]
//         }
//       </div>
//     </div>
//   )
// }
//
// export default Home
