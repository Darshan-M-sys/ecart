import React, { useState, useEffect } from 'react';
import './Homeproduct.css';
import ProductDetails from '../Pages/ProductDetails';
import { IoCartOutline } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import {Link} from 'react-router-dom'

const HomeProducts = () => {
  const [product, setProduct] = useState([]);

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
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="product-container">
        {
          product.map((item, index) => {
            const originalPrice = item.price * 10;
            const discountedPrice = (originalPrice * 50) / 100; // 50% off

            return (
              <div className="product-card" key={index}>
            <Link to={`/productDetails/${item.id}`}>
                <img src={item.image} className="product-images" alt={item.title} /></Link>
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
               <Link  className="items" to= {`/Order/${item.id}`} > <button className="cart-btn">
                    <AiFillThunderbolt className="cart-icon" /><span>Buy</span>

                  </button></Link>
                </div>
                <div className="rating-container">

                <p >
                  Rating: {item.rating.rate} &nbsp;<span className="ratings"> {renderStars(item.rating.rate)}</span>
                </p>
                 <p className="quantity">Quantity <span className="quantity-Number">0</span></p>
            
               </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default HomeProducts;
