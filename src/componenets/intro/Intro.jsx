import React from 'react'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import './intro.css'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          i'am <span className="introName">kamal</span> <br />
          front-end developer
        </span>
        <p className="introPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Dolor, alias praesentium. Veniam, assumenda? Commodi,
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
