import React from 'react'
import './Experience.css'
import twitter from '../../assets/twitter.png'
const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <h1 className="exp-title">My Experience</h1>
        <div className="experiences">
          <div className="my-experience">
            <div className="exp-header">
              <div className="rols-title">
                <img src={twitter} alt="" />
                <p>operation agent</p>
              </div>
              <p>jan 2023 - DEC 2023</p>
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
                <img src={twitter} alt="" />
                <p>operation agent</p>
              </div>
              <p>jan 2023 - DEC 2023</p>
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
                <img src={twitter} alt="" />
                <p>operation agent</p>
              </div>
              <p>jan 2023 - DEC 2023</p>
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
