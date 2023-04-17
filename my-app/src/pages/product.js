import {useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Header from '../components/header.js'

const Product = () => {

  let location = useLocation()

  const [idToken, setIdToken] = useState("")
  const [userName, setUserName] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [prodName,setProdName] = useState("test")

  useEffect(() => {
    if(location.state != null){
      if(location.state.admin == 1){
        setIsAdmin(true)
      }
      setUserName(location.state.username)
      setIdToken(location.state.id_token)
    }
  }, [location])

  // useEffect( ()=> {
  //   if(state != null){
  //     console.log(state)
  //     console.log(state.item.name)
  //     setProdName(state.item.name)
  //   }
  // },[state])
  return(
    <div>
      <Header idToken = {idToken} userName = {userName} isAdmin = {isAdmin}/>

      Hi from product
      product is {prodName}
    </div>
  )

}
export default Product
