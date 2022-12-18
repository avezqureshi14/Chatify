import React from 'react'
import yes from '../assets/green.png'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
    <>
    <section className='smokers greener' >
    <div className="smokemain">
    <div style={{"padding":"18px"}} class="coffee_card newCard sha">
        <div class="image_shop">
            <img src={yes} alt="" />
        </div>
        <h3>Hurrah! you have contributed for the wellness of Millions of Peoples and breaked your Streak of Smoking, <br /><NavLink to='/stream-chat-app' style={{"color":"green"}}>Lets start the Chat  </NavLink></h3>
    </div>
    </div>
    </section>
    </>
  )
}

export default Success