import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './views/home'
 const ShopRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
 
        </Routes>

    </div> 
  )
}

export default ShopRouter