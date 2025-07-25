import React,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import '../components/productDetails.css'
import { IoCartOutline } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import Footer from '../components/Footer';
const ProductDetails = () => {
const {id}=useParams()
const [item,setItem]=useState([]);
const originalPrice = item.price * 10;
const discountedPrice = (originalPrice * 50) / 100;
const renderRatings=(ratings)=>{
  const star=[];
   for( let i=1;i<=5;i++){
  if(i<=Math.floor(ratings)){
    star.push(<span>★</span>);
  }
  else if(i-ratings<1){
star.push(<span>☆</span>);
  }
  else{
star.push(<span>☆</span>);
  }
}
return star;
    }
useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res=>res.json())
  .then(data=>{
    setItem(data);
    console.log(data)
  })
})
  return (
    <div>
    <Link to='/'> <div className="logout-container"><button className="logout"><CiLogout />
</button></div></Link> 
    <div className="product-space">
<div className="container-space">
    
<h1 className="item-category"> Welcome To {item.category} </h1>
<div  className="product">
  <img  className="product-image" src={item.image}/>
<h1 className="product-heading">{item.title}</h1> 
<div>
<h5 className="product-price">
<span className="product-price" style={{ textDecoration: 'line-through', color: 'red' }}>
  ₹{originalPrice.toFixed(2)}
</span>
&nbsp;
<span style={{ color: "green", fontWeight: "bold" }}>
  ₹{(originalPrice - discountedPrice).toFixed(2)}
</span>
<span className='discount'> | 50% OFF</span>
    </h5>



    <div className="rating-space">
  <div>
<span className="rating">
  rating:{item.rating?.rate}

</span><br></br>
<span className="star">{renderRatings(item.rating?.rate)}</span> 

  
</div>
<div className="rating">
<p > Reviews:<span className='space'>{item.rating?.count}</span></p>
<p >Quantity:<span className="sp">0</span>
</p>  
</div>
</div>
    <div className='product-button'>
<button className='order-btn'>
<IoCartOutline className="cart-icon" /> Add Cart
    </button>
    <button className="cart-btn">
<AiFillThunderbolt className="cart-icon" /><span>Buy</span>
    
    </button>
    </div>
    <p className="product-description">{item.description}</p>
</div>
</div>
</div>
    </div>
    <br>
    </br>
    <Footer/>
    </div>
  )
}

export default ProductDetails
