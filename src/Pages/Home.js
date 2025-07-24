import React from 'react'
import Header from '../components/Header'
import '../components/header.css'
import ProductType from '../components/ProductType'
import Offer from '../components/Offer';
import HomeProducts from '../components/HomeProducts';
import Footer from "../components/Footer"

const Home = () => {




  return (
    <div>
     <Header/>
     <ProductType />
     <hr/>
     <Offer/>
     <HomeProducts/>
     <Footer/>
      
    </div>
  )
}

export default Home
