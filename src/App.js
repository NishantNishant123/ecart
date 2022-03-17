
import './App.css';

import ListProduct from './ListProduct';
import './index.css';
import Header from './Header';
import { useState } from 'react';
import CartPage from './CartPage';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Order from './OrderComponent/Order';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Addproduct from './Addproduct';
import { useSelector } from 'react-redux';
function App() {
  
 let products=useSelector(state=>state.allitems)


  return (
    <>
      <div className="hcontainer">
        <div className="header">  <Header /></div>
        {/* <div className="cartcount">
          <CartCount />
        </div> */}
      </div>
      <Routes>
      <Route exact path="/add" element={<>
          <Addproduct/></>} />
        <Route exact path="/" element={<>
        
          <ListProduct products={products} /></>} />
        <Route exact path="/cart" element={<>
          <CartPage />
        </>} />
        <Route exact path="/order" element={<>
          <Order />
        </>} />
        <Route exact path="/details/:productid" element={<div class="productdetail" style={{ justifyContent: 'center' }}><ProductDetail /></div>} />
        
        
      </Routes>


    </>
  );
}

export default App;
