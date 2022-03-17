import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
    const items=useSelector(state=>state.items);
    const totalamount=useSelector(state=>state.totalamount);
console.log("items"+items);

  return (
    <div><p class="orderfont">ORDER</p>
      {items.map((item)=>{
      return   <p class="orderfont"> Product Id:{item.id}|Total Product Price:{item.count}*{item.price}={item.count*item.price}</p>

      })}
     <p class="orderfont"> Total Order Amount:{totalamount}</p>
    </div>
  )
}

export default Order;