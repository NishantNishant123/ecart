import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const CartCount = () => {




    const cartcounter = useSelector(state => state.cartcounter)
  
    return (<>

      CartCount  {cartcounter}
    </>)
}
export default CartCount;