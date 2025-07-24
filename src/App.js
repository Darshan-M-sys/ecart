import React from 'react'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
const App = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/productDetails/:id" element={<ProductDetails/>}/>
    <Route path="*" element={<NotFound />} />
  </Routes>
      
   

    </div>
  )
}

export default App
