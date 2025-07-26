import React from 'react'
import "./productType.css"
import logo from './images/all.png'
import Mobiles from './images/mobile.png'
import appliance from'./images/cars.png'
import beauty from './images/beauty.png'
import Electronics from './images/Electronic.png'
import books from './images/bike.png'
import grocery from './images/grocerys.png'
import Sports from './images/sports.png'
import fashion from './images/fashion.png'
import home from './images/home.png'
import {Link} from 'react-router-dom'

const ProductType = () => {
  
  return (
    <div>
<div >
  <div className="item-container">
   <div className="product-list">
     <Link to="/allProducts">
   <img src={logo} alt="" />
   </Link>
    <Link  className="items" to="/allProducts"> <h2 className="items" >All </h2>
     </Link>
  </div>
 
 
<div className="product-list">
    <Link to="/Mobile">  
   <img src={Mobiles} alt="" />
   </Link>  
   <Link   className="items"  to="/Mobile">  

<h2 className="items" >Mobiles </h2>
 </Link>
  </div>
  

   
    <div className="product-list">
      <Link to="/Fashion"> 
   <img src={fashion} alt="" />
  </Link>
   <Link   className="items"  to="/Fashion">
     <h2 className="items" >Fashion </h2>
     </Link>
  </div>
   
   
    <div className="product-list">
       <Link to="/HomeProduct"> 

   <img src={home} alt="" />
   </Link>
   <Link   className="items"  to="/HomeProduct">
     <h2 className="items" >Home </h2>
     </Link>
  </div>

    <div className="product-list">
        <Link to="/appliance"> 
   <img src={appliance} alt="" />
   </Link>
     <Link   className="items"  to="/appliances">
     <h2 className="items" >Cars </h2>
      </Link>
  </div>

 <div className="product-list">
        <Link to="/bike"> 
   <img src={books} alt=""/>
   </Link>
        <Link   className="items"  to="/bike">
     <h2 className="items" >Bike </h2>
     </Link>



  </div>
   
    <div className="product-list">
      <Link to="/Beauty"> 
   <img src={beauty} alt="" />
    </Link>
    <Link   className="items"  to="/Beauty">
     <h2 className="items" >Beauty </h2>
      </Link>

  </div>
   

    <div className="product-list">
          <Link to="/Grocery"> 
         
   <img src={grocery} alt="" />
     </Link>
   <Link   className="items"  to="/Grocery">
     <h2 className="items" >Grocery </h2>
       </Link>
  </div>
   
    <div className="product-list">
       <Link to="/Sports"> 
   <img src={Sports} alt="" />
   </Link>
   <Link   className="items"  to="/Sports">
  <h2 className="items" >Sports </h2>
  </Link>

  </div>
   
  </div>
</div>
     
    </div>
  )
}

export default ProductType
