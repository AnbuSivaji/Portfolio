import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/profile_img.jpg';
const Hero = () => {
  return (
    <div id='home' className="hero">
       <img src={profile_img} alt="" />
       <h1><span>I'm Anbu ,</span>Front end developer based in INDIA</h1>
       <p>Specialized in building websites and applications with modern technologies like React, Node, Express, MongoDB, etc.
       </p>
       <div className="hero-action">
         <div className="hero-connect"><a className='anchor-link' offset={50}href='#contact'>Connect with me</a></div>
         <div className="hero-resume">My resume</div>
       </div>
    </div>
  )
}

export default Hero
