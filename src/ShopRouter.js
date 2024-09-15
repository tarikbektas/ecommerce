import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './views/home'
import ProductDetials from './views/ProductDetials'
 const ShopRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product-detials' element={<ProductDetials></ProductDetials>}></Route>
        </Routes>

    </div> 
  )
}

export default ShopRouter