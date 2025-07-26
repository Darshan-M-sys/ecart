import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductType from './ProductType';

const Header = () => {
  

  return (
    <div>
    <header>
    
      <div className="header-container">
        <div className="header-logo-container">
          <img src=""></img>
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
</span><h3>Login</h3>
        </div>
        
      </div>
   
    
    </header>
     <ProductType />
    </div>
  )
}

export default Header
