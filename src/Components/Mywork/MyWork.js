import React from 'react'
import './MyWork.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import Car_img from '../../Assets/Car_img.jpg'
import Food_img from "../../Assets/Food_img.jpg";
import Football_img from "../../Assets/Football_img.jpg";
import Boot_img from "../../Assets/Boot_img.jpg";
import Calculator_img from "../../Assets/Calculator_img.jpg";
import arrow_icon from '../../Assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <img src={Car_img} alt="" />
        <img src={Football_img} alt="" />
        <img src={Food_img} alt="" />
        <img src={Boot_img} alt="" />
        <img src={Calculator_img} alt="" />
      </div>
      <div className='mywork-showmore'>
        <p>Show more</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
}

export default MyWork
