import React from 'react'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productsQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <>

            <div class="about_chat_container sha newShop">
                <div class="about_chat_image newShopImage">
                    <img src={product.image} alt="" />
                </div>
                <div class="about_chat_content newChat">
                    <h1>{product.title}</h1>
                    <h3>Price:₹{product.price}</h3>
                    { productsQuantity > 0 ? 
                        <div>
                            <h3>Quantity: {productsQuantity} </h3>
                            <div class="incrDec">
                                <button onClick={()=>cart.addOneToCart(product.id)} class="positive" >+</button>
                                <button onClick={()=>cart.removeOneFromCart(product.id)}  class="negative" >-</button>
                            </div>
                            <div class="button-grop">
                                <button onClick={()=>cart.deleteFromCart(product.id)}    style={{ "marginLeft": "0" }} class="blue-btn">Remove</button>
                            </div>
                        </div>
                        : 
                        <div class="button-grop">
                        <button onClick={()=>cart.addOneToCart(product.id)}  style={{ "marginLeft": "0" }} class="blue-btn">Add to Cart</button>
                        </div>
                    }
                    </div>
            </div>

        </>
    )
}

export default ProductCard