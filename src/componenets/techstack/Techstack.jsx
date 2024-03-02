import React from 'react'
import './techstack.css'
import twit from '../../assets/twitter.png'
import html from '../../assets/icon/html.png'
import css from '../../assets/icon/css.png'
import js from '../../assets/icon/js.png'
import typescript from '../../assets/icon/typscript.png'
import wordpress from '../../assets/icon/wordpress.png'
import sass from '../../assets/icon/sass.png'
import figma from '../../assets/icon/figma.png'
import strapi from '../../assets/icon/strapi.png'
import Tailwind from '../../assets/icon/tailwind.png'
import nextjs from '../../assets/icon/nextnextjs.png'
import git from '../../assets/icon/gitgit.png'

const Techstack = () => {
  return (
    <div className="tech-container">
      <div id="teck-stack">
        <div className="skills-container">
          <h1 className="skills-title">Tech Stack</h1>
          <div className="skills-items">
            <div className="skill-item">
              <div className="item-image">
                <img src={html} alt="" />
              </div>
              <h2 className="item-title">Html</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={css} alt="" />
              </div>
              <h2 className="item-title">css</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={js} alt="" />
              </div>
              <h2 className="item-title">Javascript</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={sass} alt="" />
              </div>
              <h2 className="item-title">Sass</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={typescript} alt="" />
              </div>
              <h2 className="item-title">Typscript</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={Tailwind} alt="" />
              </div>
              <h2 className="item-title">Tailwind Css</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={nextjs} alt="" />
              </div>
              <h2 className="item-title">Next Js</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={wordpress} alt="" />
              </div>
              <h2 className="item-title">wordpress</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={figma} alt="" />
              </div>
              <h2 className="item-title">Figma</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={strapi} alt="" />
              </div>
              <h2 className="item-title">Strapi</h2>
            </div>
            <div className="skill-item">
              <div className="item-image">
                <img src={git} alt="" />
              </div>
              <h2 className="item-title">Git</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="skills-title2">skill set</h1>
          <div className="skills-wrapper">
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Sass</span>
            <span>Tailwind</span>
            <span>Material-UI</span>
            <span>Git</span>
            <span>Framer-Motion</span>
            <span>Firebase</span>
            <span>Jira</span>
            <span>Cypress</span>
            <span>Playwright</span>
            <span>Storybook</span>
            <span>Styled-Components</span>
            <span>Zustand</span>
            <span>GraphQL</span>
            <span>GitLab</span>
            <span>Web Accessibility</span>
            <span>Nest.js</span>
            <span>Postman</span>
            <span>Insomnia</span>
            <span>Scrum</span>
            <span>Bitbucket</span>
            <span>Confluence</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techstack
