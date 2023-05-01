import {useState,useEffect} from 'react'
const CartItem = ({item}) =>{

  const [itemName,setItemName] = useState("")
  useEffect( () =>{
    setItemName(item.description)
  })
  return(
    <>
      {itemName}
    </>
  )
}

export default CartItem
