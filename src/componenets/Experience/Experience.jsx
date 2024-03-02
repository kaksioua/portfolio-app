import React from 'react'
import './Experience.css'
import tui from '../../assets/tui.png'
import marketing from '../../assets/marketing.png'
import villa from '../../assets/villa.jpg'
const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <h1 className="exp-title">My Experience</h1>
        <div className="experiences">
          <div className="my-experience">
            <div className="exp-header">
              <div className="rols-title">
                <img src={tui} alt="" />
                <p>operation agent</p>
              </div>
              <p>Jan 2023 - DEC 2023</p>
            </div>
            <p>
              As an Operations Agent at Groupe TUI, I handle logistics
              management, customer problem resolution, communication with
              suppliers, and operation invoicing. My approach is focused on
              efficient coordination and proactive problem-solving to contribute
              to operational success.
            </p>
          </div>
          <div className="my-experience">
            <div className="exp-header">
              <div className="rols-title">
                <img src={marketing} alt="" />
                <p>digital marketing agent</p>
              </div>
              <p>Apr 2016 - Jan 2019</p>
            </div>
            <p>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
          <div className="my-experience">
            <div className="exp-header">
              <div className="rols-title">
                <img src={villa} alt="" />
                <p>management controller assistant internship</p>
              </div>
              <p>Jun 2019 - Jul 2019</p>
            </div>
            <p>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
