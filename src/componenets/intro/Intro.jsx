import React from 'react'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

import './intro.css'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="into_cont">
          <span className="hello">Hello I'm Kamal.</span>
          <span className="introText">Front-end Developer.</span>
        </div>
        <div className="intro_icon">
          <button className="socail-btn">
            <a href="https://www.linkedin.com/in/kamal-askioua/">
              <span>Linkedin</span> <CiLinkedin />
            </a>
          </button>

          <button className="socail-btn">
            <a href="https://github.com/kaksioua">
              <span>Github</span> <FaGithub />
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro
