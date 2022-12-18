import React from 'react'
import cigg from '../assets/ciglong.png'
const Aware = () => {
  return (
    <>
    <section className='smokers' >
    <div className="smokemain">
    <div class="coffee_card newCard sha">
        <div class="image_shop">
            <img src={cigg} alt="" />
        </div>
        <h3> Smoking causes almost <span className='s1' >7</span> <span className='s2' >million</span> deaths per year, So to prevent this there are number of <span>NGO's</span> working around the World</h3>
    </div>
    <div className="smokeCiggContent">
    <h3>Instead smoking <b style={{"color":"red"}} >One Cigarette</b> , donate that much amount for cure of those <b style={{"color":"red"}} >CANCER PATIENTS</b>  </h3>
    </div>
    <div id='store'  class="align-right "><span style={{ "color":"#000","padding":"3px 8px", "borderRadius":"50%"}} > <a href="#store"><i style={{"color":"#000","fontSize":"4rem"}} class='bx bxs-down-arrow-square' ></i></a> </span></div>

    </div>
    </section>
    </>
  )
}

export default Aware