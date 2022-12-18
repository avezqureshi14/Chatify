import React from 'react'
import no from '../assets/cross.png'
import { NavLink } from 'react-router-dom'
const Cancel = () => {
  return (
    <>
    <section className='smokers greener' >
    <div className="smokemain">
    <div style={{"padding":"18px"}} class="coffee_card newCard sha">
        <div class="image_shop">
            <img src={no} alt="" />
        </div>
        <h3>Payment Failed <NavLink to='/smokeStore' style={{"color":"red"}}>Retry</NavLink></h3>
    </div>
    </div>
    </section>
    </>
  )
}

export default Cancel