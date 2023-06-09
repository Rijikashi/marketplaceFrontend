import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import stickerImage from '../assets/sticker_placeholder.png'
import {useNavigate} from "react-router-dom"

const ShopItem = ( {item,idToken,userName,isAdmin,cart} ) => {
  const navigate = useNavigate()

  function handleItemClick(){
    navigate("/product", {state: {userName:userName, isAdmin:isAdmin, idToken:idToken, item:item, cart:cart}})
  }

  return(
    <Card >
      <Card.Img variant = "top" src = {stickerImage} />
      <Card.Body>
      <Card.Title> <Button onClick = {handleItemClick}> {item.name} </Button> </Card.Title>
      <Card.Text>
        id: {item.id }
        price: {item.price}
        type: {item.type}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default ShopItem
