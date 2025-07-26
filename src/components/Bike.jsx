import React,{useState,useEffect} from 'react'
import Footer from './Footer';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";
import {Link} from 'react-router-dom';

const Bike = () => {
const[val,setVal]=useState('');
const renderStars = (rating) => {
const star=[];
for(let i=1;i<=5;i++){
  if(i<=Math.floor(rating)){
    star.push(<span key={i}>★</span>)
  }
  else if(i-rating<1){
    star.push(<span key={i}>☆</span>)
  }
  else{
   star.push(<span key={i}>☆</span>)
  } 
  }
  return star
}
const [product,setData]=useState([]);
 const query = val.toLowerCase();

  const filtered = product.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)||
    p.category.toLowerCase().includes(query)
  );
useEffect(() => {
  fetch("https://dummyjson.com/products/category/motorcycle")
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json(); 
    })
    .then(data => {
      setData(data.products);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}, []);
  return (
    <div>
      <header style={{paddingBottom:"50px"}}>
        <div className="header-container">
<div className="header-search-bar-container">
 <input  type="search" placeholder='Search here...'  value={val} onChange={(e)=>setVal(e.target.value)}></input>
 <span className="search-icon"><span><CiSearch /> </span> </span>
 </div>
<div className="header-login-container">
<h3> About</h3>
 </div>
 <div className="header-login-container">
<h3> Contact</h3>

</div>

 <div className="header-login-container">
          <span> <CgProfile />
</span><h3>Login</h3>
        </div>

        </div>
<br>
</br>
<br></br>
      </header>
           <div className="product-container">
        {
          filtered.map((item, index) => {
            const originalPrice = item.price * 10;
            const discountedPrice = (originalPrice * 50) / 100;
            return (
              <div className="product-card" key={index}>
            <Link to={`/allProductsDe/${item.id}`}>
                <img src={item.
thumbnail
} className="product-images" alt={item.title} /></Link>
                <h4 className="product-title">{item.title}</h4>
                <h5 className="product-price-container">
                  <span className="product-price" style={{ textDecoration: 'line-through', color: 'red' }}>
                    ₹{originalPrice.toFixed(2)}
                  </span>
                  &nbsp;
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    ₹{(originalPrice - discountedPrice).toFixed(2)}
                  </span>
                  <span className='discount'> | 50% OFF</span>
                </h5>
                <div className="button-container">
                  <button className='order-btn'>
                    <IoCartOutline className="cart-icon" /> Add Cart
                  </button>
                  <button className="cart-btn">
                    <AiFillThunderbolt className="cart-icon" /><span>Buy</span>
                  </button>
                </div>
                <div className="rating-container">
                <p >
                  Rating: {item.rating.rate} &nbsp;<span className="ratings"> {renderStars(item.rating)}</span>
                </p>
                 <p className="quantity">Quantity <span className="quantity-Number">0</span></p>
               </div>
              </div>
            );
          })
        }
      </div>
      <br>
      </br>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Bike
