import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';



const ProductDetail = () => {
  
  
  const { productid } = useParams();

  const productDetail = useSelector(state => state.items)
 
   let product=productDetail.find((p) => {
     
    return p.id === Number(productid);
   })

      
  return (
    <div class="productdetailcard">{product.id}
    <img src={product.image}  />
    {product.description}<br/>Price:{product.price}</div>
  )
}

export default ProductDetail