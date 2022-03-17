import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

const Product = ({id,image,description,price}) => {
  const dispatch=useDispatch();
  
const additem=(id)=>{
  dispatch({type:'ADDITEM',item:{id:Number(id),image,description,price:Number(price)}})

}

  return (
 <>
    {id}
    <img src={image} />
   <br/>
  Price: {price}
  <button onClick={()=>additem(id)}>Add to Cart</button>
    </>
  )
}

export default Product;