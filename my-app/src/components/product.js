import {useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react'

const Product = () => {

  const [prodName,setProdName] = useState("test")
  let {state} = useLocation();

  useEffect( ()=> {
    if(state != null){
      console.log(state)
      console.log(state.item.name)
      setProdName(state.item.name)
    }
  },[state])
  return(
    <div>
      Hi from product
      product is {prodName}
    </div>
  )

}
export default Product
