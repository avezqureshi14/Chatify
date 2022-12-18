import React from 'react'
import cl from '../assets/ciglong.png'
import { NavLink } from 'react-router-dom'
const ChatHeader = () => {
  return (
    <>
    <div class="mainPuffHead">
    <div class="smokeHead">
        <ul>
            <li>
                <div class="smokeImage">
                    <img src={cl} alt=""/>
                </div>
            </li>
            <li>
                <div class="heading">
                    <h3>Start today's chat with a Puff</h3>
                </div>
            </li>
            <li>
                <div class="buyNow">
                <NavLink to="/smokeStore" ><button class="puffBtn">Get it Now!</button></NavLink>
                </div>
            </li>
        </ul>
    </div>
</div>
    </>
  )
}

export default ChatHeader