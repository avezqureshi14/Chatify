import React from 'react'
import d3 from '../assets/d3.png'
const ChatInfo = () => {
  return (
    <>
    <section>
        <div className="about_chat_main_container">
            <div className="about_chat_container">
                <div className="about_chat_image">
                    <img src={d3} alt=""/>
                </div>
                <div className="about_chat_content">
                    <h1>Create an invite to the place where you belong</h1>
                    <p>Chatify servers are organized into topic-based channels where you can collaborate, share, and
                        just talk about your day without clogging up a group chat.</p>
                        <div className="button-grop">
                            <button style={{"marginLeft":0}} className="blue-btn">Start the Gossips Now !</button>
                        </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ChatInfo