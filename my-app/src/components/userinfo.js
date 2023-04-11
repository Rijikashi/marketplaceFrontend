import {useLocation} from 'react-router-dom'

const UserInfo = ( {idToken,userName} ) => {
  return(
    <div>
      Hi from UserInfo
      {idToken}
      {userName}
    </div>
  )

}
export default UserInfo
