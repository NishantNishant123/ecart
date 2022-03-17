import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import MyRouter from './Router/Router';
import CartCount from './CartCount';
import Order from './OrderComponent/Order';
const Header = () => {
  return (<>
    {/* <ul>
        <li>
        <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
            </li>
            <li>
                ADD
            </li>
            <li>
                LIST PRODUCT

            </li>
            <li>  
          <NavLink to="/cart" exact activeStyle={  
             {color:'red'}  
          }>CartPage</NavLink>  
        </li>  
            
        </ul> */}
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">E-CART</a>
        <button class="navbar-toggler">

          <NavLink to="/order" exact class="navlink">OrderPage</NavLink>
          </button>
        <button class="navbar-toggler" type="button" >

          <CartCount />


        </button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>



        </button>
        


      


        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/" exact class="navlink">HOME</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/add" exact class="navlink">ADD</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/cart" exact class="navlink">CARTPAGE</NavLink>
            </li>
            <li class="nav-item" id="cart_count">
              <CartCount />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </>)
}
export default Header;