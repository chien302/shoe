import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import Contact from '../pages/contact/Contact'
import Cart from '../pages/cart/Cart'
import CheckOut from '../pages/checkout/CheckOut'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import ProductDetail from '../pages/productDetail/ProductDetail'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>
    )

}
export default Routers
