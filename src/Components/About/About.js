import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg';
import profile from '../../Assets/profile.jpg';
const About = () => {
  return (
    <div id='about'  className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p> I am fresher front end developer with </p>
            <p> 1 years of experience in web development. I am </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML&CSS </p> <hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React js </p> <hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>JavaScript </p> <hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>SQL</p> <hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEAR OF experience</p>
        </div>
      </div>
    </div>
  );
}

export default About
