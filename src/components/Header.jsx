import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuClockArrowDown } from "react-icons/lu";
import ProductType from './ProductType';
import {Link} from 'react-router-dom'
import icon from './images/icon.jpg'
const Header = () => {
  

  return (
    <div>
    <header>
    
      <div className="header-container">
        <div className="header-logo-container">
          <img src="https://i.ibb.co/NdcJfVw3/product.jpg" ></img>
        </div>
        <div className="header-search-bar-container">
<input type="search" placeholder='Search here...' ></input>
<span className="search-icon"><span><CiSearch /> </span> </span>
        </div>
        <div className="header-cart-container">
<span><IoCartOutline /></span>
<h3>Cart</h3>
        </div>
        <div className="header-login-container">
          <span> <CgProfile />
</span><h3>Login </h3> <span className="spinner"><LuClockArrowDown /></span>
<br></br>
<div className="login-child">
  <div className="login-child-bg">
   
    <Link className="items" to="/Login">
    <div className="order-container">
  <span>Login</span>
</div></Link>
 <hr/>

<div className="order-container">
  <span> Orders</span>
 

</div>
  <hr/>

<div className="logout-container">
  <span className="spinner" >Logout</span>
</div>
</div>
</div>
        </div>
        
      </div>
   
    
    </header>
     <ProductType />
    </div>
  )
}

export default Header
