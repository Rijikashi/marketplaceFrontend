import {useLocation} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Header from '../components/header.js'
const Contact = () => {

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

  return(
    <div>
      <Header idToken = {idToken} userName = {userName} isAdmin = {isAdmin}/>
      Hi from Contact
    </div>
  )

}
export default Contact
