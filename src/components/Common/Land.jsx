import React from 'react'
import d1 from '../assets/d1-removebg-preview.png'
import d2 from '../assets/d2-removebg-preview.png'
import Navbar from './Navbar'
const Land = () => {
  return (
    <>
    <div class="animated">
        <div class="wrapper">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
        </div>
    </div>
    <Navbar/>
    <div id="content">
        <div class="container">
            <div class="grid-3-1">
                <div class="colmun">
                    <div class="info">
                        <h2>Chatify</h2>
                        <h1>Easiest way to hangout👋 </h1>
                        <div class="button-grop">
                         <a href="#move"><button class="blue-btn">Get Started</button></a>   
                        </div>
                    </div>
                </div>
                <div class="colmun align-right m-sl-hide">
                <img class="d1" src={d2} alt=""/>
                <img class="d2" src={d1} alt=""/>

                </div>
            </div>
        </div>
    </div>
    <div id="move"></div>
    </>
  )
}

export default Land