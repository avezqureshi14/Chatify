import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import CartProduct from './CartProduct'
import { useState , useContext} from 'react'
import { CartContext } from '../CartContext'
const Cart = () => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
    return (
        <>
            <Navbar />
            <div className="total_container">
            <NavLink to="/smokeStore" ><button className="cartBtn blackBtn"><i class='bx bx-arrow-back' ></i> &nbsp; Back to Shop</button></NavLink>    
            </div>
            <div className="cart_main_container">
                <div className="cart_head">
                    <h1>Your Products for Purchase</h1>
                </div>
                {productsCount > 0 ?
                <div className="products_cart">

                {cart.items.map( (currentProduct, idx) => (
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}
   

                </div>
                :
                <h1>Your Cart is Empty</h1>
            }

                <hr />
                <div className="total_container">
                    <h2>Total :  {cart.getTotalCost().toFixed(2)}₹</h2>
                    <button onClick={checkout} className="cartBtn greenBtn">Checkout</button>
                </div>
            </div>
           
            <Footer />
        </>
    )
}

export default Cart