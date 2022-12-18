import React from 'react'
import { CartContext } from '../CartContext';
import { getProductsData } from '../Shop/productsStore';
import { useContext } from 'react';
function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductsData(id);

    return (
        <>
        <div class="product_cart">
        <div class="cart_container">
            <h2>{productData.title}</h2>
            <h3> {quantity} Total</h3>
            <h3>₹{ (quantity * productData.price).toFixed(2) }</h3>
        
            <button  onClick={() => cart.deleteFromCart(id)} class="cartBtn redBtn">Remove</button>
        </div>
    </div>
        </>
    )
}

export default CartProduct;