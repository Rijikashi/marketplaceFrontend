import {useEffect, useState} from 'react'
import ShopItem from './shopitem.js'

const Shop = ( {shopType}) => {
  const [shopItems,setShopItems] = useState([])
  const [shopLoaded,setShopLoaded] = useState(false)
  const apiURL = process.env.REACT_APP_API_URL

  useEffect( () => {
    fetch( apiURL + "/product?type=" + shopType, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then((response) => response.json())
    .then((json) => {
      setShopLoaded(true)
      setShopItems(json)
      console.log(json)
    })
  }, [shopType])

  return(
    <>
      <div className = 'shop'>
      {
        shopItems.map(shopItem =>(
          <ShopItem item = {shopItem}/>
        ))
      }
      </div>
      Hi from Shop with {shopType}
    </>
  )

}
export default Shop
