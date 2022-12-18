import React from 'react'
import t1 from '../assets/th4.jpg'
import t2 from '../assets/th2.jpg'
import t3 from '../assets/th3.jpg'
import { NavLink } from 'react-router-dom'
import '../Js/otherInfo'
const OtherInfo = () => {
  return (
    <>
    <section>
        <div class="coffee_chat_main_container">
            <div class="coffee_chat_container">

                <div class="coffee_chat_content">
                    <h1>Missing those special days of <span style={{"color":"red"}} > Smoking with Friends </span>  during CHATS</h1>
                    <p>Well! no problem it is even possible now even when you are remote, on <span style={{"color":"pink"}} >Chatify</span>  you can have your Cigarette any time during in between of your chat</p>
                    <div class="button-grop">
                       <NavLink to="/smokeStore" ><button style={{"marginLeft":0}} class="blue-btn">Try it Now !</button></NavLink> 
                    </div>
                </div>

                <div class="coffee_chat_image">
                    <img  src={t1} class="coffee" alt=""/>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default OtherInfo