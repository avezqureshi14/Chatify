import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState , useContext} from 'react'
import { CartContext } from '../CartContext'
const Navbar = () => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (

    <>
    <header id="master-header">
        <div className="container">
            <div className="navbar grid-row">
                <div className="branding">
                    <NavLink to='/' style={{"fontWeight":1000}}  className="logo" >Chatify</NavLink>
                </div>
                <div className="toggle-menu align-right">
                    <img src="d1-removebg-preview.png" alt=""/>
                </div>
                <div className="toggle-menu-close">
                    <div className="mobile-menu-close">
                        <img src="d1-removebg-preview.png" alt=""/>
                    </div>
                </div>
                <nav className="navigation">
                    <ul className="menus">
                        <li className="menu">
                        <NavLink to='/'  >Home</NavLink>
                        </li>
                        <li className="menu">
                        <NavLink to='/smokeStore'  >Start Chat with a Puff</NavLink>
                        </li>
                        <li className="menu">
                        <NavLink to='/about'  >About Us</NavLink>
                        </li>
                    </ul>
                </nav>
                <div class="align-right "><NavLink to='/cart'  ><i style={{"color":"#fff"}} class='bx bx-cart' ></i><span style={{"backgroundColor":"#fff", "color":"#000","padding":"3px 8px", "borderRadius":"50%"}} >{productsCount}</span></NavLink></div>
                <div class="sign-in align-right "><a href="#"><i class='bx bxl-youtube' ></i></a></div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar