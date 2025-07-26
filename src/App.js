import React from 'react'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import AllProducts from './components/AllProducts'
import AllproductDe from './components/AllproductDe'
import MobilesProduct from './components/MobilesProduct'
import FashionProduct from './components/FashionProduct'
import HomeProduct from './components/HomeProdcuts'
import Appliances from './components/Appliances'
import Bike from './components/Bike'
import Beauty from './components/Beauty'
import Grocery from './components/Grocery'
import Sports from './components/Sports'

const App = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/productDetails/:id" element={<ProductDetails/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/allProducts" element={<AllProducts/>}/>
    <Route path="/allProductsDe/:id" element={<AllproductDe/>}/>
    <Route path="/Mobile" element={<MobilesProduct/>}/>
    <Route path="/Fashion" element={<FashionProduct/>}/>
    <Route path="/HomeProduct" element={<HomeProduct/>}/>
   <Route path="/appliance" element={<Appliances/>}/>
   <Route path="/bike" element={<Bike/>}/>
   <Route path="/Beauty" element={<Beauty/>}/>
   <Route path="/Grocery" element={<Grocery/>}/>
   <Route path="/Sports" element={<Sports/>}/>

  </Routes>
      
   

    </div>
  )
}

export default App
