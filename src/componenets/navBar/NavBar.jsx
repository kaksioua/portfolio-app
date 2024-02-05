import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuItem"
        >
          Client
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuItem"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopMenuButton"
        onClick={() =>
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        <img src={contactImg} alt="" className="desktopMenuimg" />
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar
