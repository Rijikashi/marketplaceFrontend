import {useState, useEffect, Form, Button} from 'react'
import {useLocation} from 'react-router-dom'
import SignIn from '../components/signin.js'
import UserInfo from '../components/userinfo.js'
import Header from '../components/header.js'

const Account = () => {

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

  return (
    <div>
      <Header userName = {userName} idToken = {idToken} isAdmin = {isAdmin} cart = {cart}/>

      {(userName !== "") ? (
        <UserInfo idToken = {idToken} userName ={userName} isAdmin = {isAdmin} setUserName = {setUserName} setIdToken = {setIdToken} setIsAdmin = {setIsAdmin}/>
      )
      :
      (
        <SignIn />
      )}
    </div>
  )
}

//  {loginFailure ? (<h3> Login Failed </h3>) : (<></>)}
//   <form onSubmit = {onSubmit}>
//     <label>
//      Username:
//        <input type = 'text' value = {username} onChange = {(e) => { setUsername(e.target.value); setLoginFailure(false);setCreateAccountSuccess(false)}} />
//     </label>
//     <label>
//      Password:
//        <input type = 'password' value ={password} onChange ={(e) => {setPassword(e.target.value); setLoginFailure(false); setCreateAccountSuccess(false)}} />
//    </label>
//     <input type="submit" value="Login" />
//   </form>
// {createAccountSuccess ? (<h3> Account successfully created! </h3>) : (<></>)}
export default Account
