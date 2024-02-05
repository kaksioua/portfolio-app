import React from 'react'
import './skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTtitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam
        dicta omnis eaque tempora velit, debitis ab porro ipsam repellendus
        necessitatibus impedit tempore ipsa ea culpa architecto maxime sint
        nobis.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillbarimg" />
          <div className="skillbarText">
            <h2>UI/UX Design</h2>
            <p>
              Lore. Minima, sobcaecati sapiente quae sed velit ad sint vero
              cumque, at quasi natus libero enim voluptate accusantium vel.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillbarimg" />
          <div className="skillbarText">
            <h2>Web Design</h2>
            <p>
              Lore. Minima, sobcaecati sapiente quae sed velit ad sint vero
              cumque, at quasi natus libero enim voluptate accusantium vel.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillbarimg" />
          <div className="skillbarText">
            <h2>App Design</h2>
            <p>
              Lore. Minima, sobcaecati sapiente quae sed velit ad sint vero
              cumque, at quasi natus libero enim voluptate accusantium vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
