import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const UserInfo = ( {idToken,userName,isAdmin,setIsAdmin,setUserName,setIdToken} ) => {
  const navigate = useNavigate()

  function handleLogout(){
    setIsAdmin(false)
    setUserName("")
    setIdToken("")
    navigate("/",{state: {userName:userName, isAdmin:isAdmin, idToken:idToken}})
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
