import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const UserInfo = ( {idToken,userName,isAdmin,setIsAdmin,setUserName,setIdToken} ) => {
  const navigate = useNavigate()

  function handleLogout(){
    let blank = []
    navigate("/",{state: {userName:"", isAdmin:0, idToken:"",cart:blank}})
  }

  return(
    <div>
      Hi from UserInfo
      {idToken}
      {userName}
      <Button onClick = {handleLogout}>
        logout
      </Button>
    </div>
  )

}
export default UserInfo
