import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct';
import Order from './OrderComponent/Order';



const CartProductList = () => {
  const cartproducts = useSelector(state => state.items);


  return (<>
    <div className='cardscolumn'><div className='leftside'>{cartproducts.map((cproduct) => {

      return <CartProduct {...cproduct} />



    })}</div><div className='rightside'><Order /></div>
     
    </div>
   
</>
  )
}

export default CartProductList