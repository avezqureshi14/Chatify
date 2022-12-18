import React from 'react'
import Stream from './components/Pages/Stream'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import SmokeStore from './components/Pages/SmokeStore'
import Cart from './components/Common/Cart'
import Aware from './components/Common/Aware'
import Success from './components/Common/Success'
import Cancel from './components/Common/Cancel'
import { Route, Routes } from 'react-router-dom'
import CartProvider from './components/CartContext'

import './App.css'
const App = () => {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/smokeStore" element={<SmokeStore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/stream-chat-app" element={<Stream />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      </CartProvider>
    </>
  )
}

export default App