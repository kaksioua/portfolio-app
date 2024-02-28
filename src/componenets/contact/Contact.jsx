import React from 'react'
import './contact.css'
import client1 from '../../assets/walmart.png'
import client2 from '../../assets/adobe.png'
import client3 from '../../assets/microsoft.png'
import client4 from '../../assets/facebook.png'
import facebookicon from '../../assets/facebook-icon.png'
import instaicon from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
const Contact = () => {
  return (
    <section className="contactPage">
      {/* <Client /> */}

      <Contactme />
    </section>
  )
}
// function Client() {
//   return (
//     <div id="clients">
//       <h1 className="contactPageTitle">My Client</h1>
//       <p className="clientDesc">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquid
//         corporis culpa totam aliquam voluptatem eum obcaecati perspiciatis,
//         minima facere libero voluptates ducimus pariatur possimus soluta
//         numquam. Laboriosam, odit fuga.
//       </p>
//       <div className="clientimgs">
//         <img src={client1} alt="" className="clientimg" />
//         <img src={client2} alt="" className="clientimg" />
//         <img src={client3} alt="" className="clientimg" />
//         <img src={client4} alt="" className="clientimg" />
//       </div>
//     </div>
//   )
// }
function Contactme() {
  return (
    <div id="contact">
      <h1 className="contactpagetitle">Contact Me</h1>
      <span className="contactdesc">
        please fill ou the form below to contact me
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message her "
          className="message"
        ></textarea>
        <button className="submit" type="submit" value="send">
          Submit
        </button>
        <div className="links">
          <img src={facebookicon} alt="" className="link" />
          <img src={instaicon} alt="" className="link" />
          <img src={twitter} alt="" className="link" />
          <img src={youtube} alt="" className="link" />
        </div>
      </form>
    </div>
  )
}
export default Contact
