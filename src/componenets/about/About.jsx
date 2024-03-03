import React from 'react'
import './aboutest.css'
import aboutimg from '../../assets/image.png'
const About = () => {
  return (
    <section id="about">
      <div className="title-container">
        <h1 className="skillTtitle">About me</h1>
      </div>
      <div className="about-container">
        <div className="itro-content">
          <p className="introPara">
            {' '}
            <img src={aboutimg} alt="" />
            I'm a web developer switching fields after graduating with a BA in
            linguistics. I've dreamed about getting to tech since i was a kid
            writing html in a note file smiling after it renders in the browser.
            i love the sense of accomplishment coding gives after doing even the
            little tasks, and how rewarding the feeling is. problem solving and
            consistent learning is two of the most skills that i try to build
            day after day because i know they are the keys to make a good
            developer.
          </p>{' '}
        </div>
        {/* <div className="about-img"></div> */}
      </div>
    </section>
  )
}

export default About
