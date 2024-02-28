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
          <CiLinkedin className="linkedin sosicon" />
          <FaGithub className="github sosicon" />
        </div>
        {/* <p className="introPara">
          Hello, I’m Samantha, a web designer who likes to add a touch of
          creativity and originality to every website I create. I have a strong
          background in web design and development, and I’m always eager to take
          on new projects and challenges.
        </p> */}
        {/* <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link> */}
      </div>
      {/* <div className="introPara">
        <p>
          Hello, I’m Samantha, a web designer who likes to add a touch of
          creativity and originality to every website I create. I have a strong
          background in web design and development.
        </p>
      </div> */}
      {/* <div className="introimg">
        <img src={bg} alt="" className="bg" />
      </div> */}
    </section>
  )
}

export default Intro
