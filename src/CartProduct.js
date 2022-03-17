import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const CartProduct = (cproduct) => {
   const dispatch=useDispatch();
    const { id, image, description, price, count } = cproduct;
    const [count1, setCount1] = useState(count);
 
    const increment = () => {
        dispatch({type:"CHANGEORDER",order:{id:id,count:count1+1}})
        setCount1(count1 => count1 + 1);

    }
    const decrement = () => {
        if (count1 > 1){
            dispatch({type:"CHANGEORDER",order:{id:id,count:count1-1}})
            setCount1(count1 => count1 - 1);}
    }
    const removehandler = () => {
        
            dispatch({type:"REMOVEITEM",removeitem:{id:id}});
            
    }
    return (<>
        <div className='cartcard'> {id}<img src={image} />{description}<br/>Price:{price}
            <br/>OrderCount:{count1}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={removehandler}>Remove Item</button>
            <NavLink to={`/details/${id}`} exact activeStyle={  
             {color:'red'}  
          }>DetailProductPage</NavLink>
        </div>
        
        </>
    )
}

export default CartProduct;