import React from 'react'
import './Services.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
//import Services_Data from '../../Assets/Services_Data.js'
import arrow_icon from '../../Assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className="Services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        <div className="sevice-format">
          <h3>01</h3>
          <h2>web design</h2>
          <p>Web development is the process of building, programming...</p>
          <div className="services-readmore">
            <p> Read More</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="sevice-format">
          <h3>02</h3>
          <h2>web design</h2>
          <p>Web development is the process of building, programming...</p>
          <div className="services-readmore">
            <p>Read more</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="sevice-format">
          <h3>03</h3>
          <h2>web design</h2>
          <p>Web development is the process of building, programming...</p>
          <div className="services-readmore">
            <p>Read more</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="sevice-format">
          <h3>04</h3>
          <h2>web design</h2>
          <p>Web development is the process of building, programming...</p>
          <div className="services-readmore">
            <p>Read more</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services ;
