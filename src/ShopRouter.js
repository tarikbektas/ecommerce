import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './views/home'
import ProductDetials from './views/ProductDetials'
import Login from './views/Login'
import Register from './views/Register'
import Shop from './views/Shop'
 const ShopRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product-detials' element={<ProductDetials></ProductDetials>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/category/elektronik' element={<Shop></Shop>}></Route>
        </Routes>

    </div> 
  )
}

export default ShopRouter