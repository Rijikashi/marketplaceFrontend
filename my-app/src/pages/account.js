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

  useEffect(() => {
    if(location.state != null){
      if(location.state.admin == 1){
        setIsAdmin(true)
      }
      setUserName(location.state.username)
      setIdToken(location.state.id_token)
    }
  }, [location])

  return (
    <div>
      <Header userName = {userName} idToken = {idToken} isAdmin = {isAdmin}/>

      {(userName != "") ? (
        <UserInfo idToken = {idToken} userName ={userName}/>
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
