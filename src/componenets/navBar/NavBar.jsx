import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'

import './navbarstyl.css'
// import './Navbar.css'
import logo from '../../assets/lowigo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'

const handleDownload = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/askiouakamal.pdf`
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = 'askiouakamal.pdf'
  link.click()
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > 96) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <div className="desktopMenu"> */}
      <ul className={`desktopMenu ${scrolled ? '  scrolled' : ''}`}>
        <li>
          {' '}
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
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="teck-stack"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            Tech Stack
          </Link>
        </li>
        <li>
          {' '}
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuItem"
          >
            contact
          </Link>
        </li>
      </ul>
      {/* </div> */}

      <button className="resumedown" onClick={handleDownload}>
        <span>Resume</span>{' '}
        <span>
          <FaDownload />
        </span>
      </button>
    </nav>
  )
}

export default Navbar
