import {useState, useEffect, Form, Button} from 'react'
import SignIn from './signin.js'
import UserInfo from './userinfo.js'

const Login = ( {signedIn,idToken,userName} ) => {
  return (
    <div className = 'loginWindow'>
      {signedIn ? (
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
export default Login
