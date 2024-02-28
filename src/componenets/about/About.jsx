import React from 'react'
import './about.css'
import aboutimg from '../../assets/image.png'
const About = () => {
  return (
    <section id="about">
      <h1 className="skillTtitle">About me</h1>
      <div className="about-container">
        <div className="itro-content">
          <p className="introPara">
            I'm a 21 year old developer living in Germany. I discovered my
            passion for coding after seeing my brother do it. I fell in love
            with using my creativity to build things for the web. Through
            persistence, self-discipline, and commitment, I achieved my goal of
            becoming a frontend developer. What kept me on this journey is that
            I always find learning new things exciting and facing unfamiliar
            challenges. In addition to coding, I enjoy building side projects
            because it allows me to explore my creativity and accomplish
            exciting things.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutimg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About
