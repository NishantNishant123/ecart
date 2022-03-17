import React from 'react'
import productarr from './Productarr';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
const Addproduct = () => {

    const dispatch=useDispatch();
    const [product, setProduct] = useState({id:0,image:"",price:0,description:"",});

    const changeHandler = (event) => {
       
        setProduct({ ...product, [event.target.name]: event.target.value })

    };
    const addtoarray = (event) => {
        event.preventDefault();
        dispatch({type:"ALLITEM",product:product});

    }
    
   
    return (<>
       
     
        <div><pre><h1 align="center">Fill New Product</h1>
        <form align="center" onSubmit={addtoarray}><pre>
        <h5>Id:</h5>  
        <input type="number" name="id" onChange={changeHandler} /><br/>
        <h5> Image Url: </h5>  
        <input type="text" name="image" onChange={changeHandler}/><br/>
        <h5>Price: </h5>  
       <input type="number" name="price" onChange={changeHandler}/><br/>
        <h5> Description:</h5>
         <input type="text" name="description" onChange={changeHandler}/><br/></pre>
            <input type="submit" name="submit" /><br/>
        </form>
</pre>

        </div>
    </>
    )
}

export default Addproduct