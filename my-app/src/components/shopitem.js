import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import stickerImage from '../assets/sticker_placeholder.png'
import Product from './product.js'
import {useNavigate} from "react-router-dom"

const ShopItem = ( {item} ) => {
  const navigate = useNavigate()
  
  function handleItemClick(){
    navigate("/product", {state: {item}})
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
