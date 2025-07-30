import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import './order.css';

const Order = () => {
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState("");
  const { id } = useParams();

  const handleAddToCart = (e) => {
    e.preventDefault();
    alert(`"${product.title}" added to cart!`);
  };

  const handleOrderNow = (e) => {
    e.preventDefault();
    alert(`Order placed for "${product.title}"`);
  };

  const handleCashOnDelivery = (e) => {
    e.preventDefault();
    setOrder(`Your "${product.title}" order is placed successfully with Cash on Delivery!`);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Failed to fetch product", err));
  }, [id]);

  return (
    <div className="order-container">
      <div className="product-card">
        <h2>{product.title}</h2>
        <img className="product-image" src={product.image} alt={product.title} />
      </div>

      <form className="order-form">
        <label className="price-label">
          Price: <span className="price-value">₹{(product.price * 10 / 2).toFixed(2)}</span>
        </label>

        <div className="button-group">
          <button onClick={handleAddToCart} className="btn add-cart">
            <IoCartOutline className="icon" /> Add to Cart
          </button>

          <button onClick={handleOrderNow} className="btn order-now">
            <AiFillThunderbolt className="icon" /> Order Now
          </button>

          <div className="payment-buttons">
            <button className="btn pay">Pay</button>
            <button onClick={handleCashOnDelivery} className="btn cod">Cash on Delivery</button>
          </div>
        </div>

        {order && <p className="order-message">{order}</p>}
      </form>
    </div>
  );
};

export default Order;
