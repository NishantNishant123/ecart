
import React from "react";
import Product from './Product'
import './index.css'
const ListProduct = ({ products }) => {


    return(<>
     <div className="cards">  {
            products.map((prod) => {
                
               const {id,image,price,description}=prod;
              
              return     <div className="card">  <Product id={id} image={image} description={description} price={price} /></div>
            
            })
        
}</div>

    </>)
}
export default ListProduct;