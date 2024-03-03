import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ihjiwxr', 'template_hc4098t', form.current, {
        publicKey: 'aTAY81FbOWCNU11b3',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }
  return (
    <div id="contact">
      {' '}
      <div className="contact-info">
        {' '}
        <h1>Let's contact</h1>
        <div className="info">
          <h4>Email : kaskioua@gmail.com</h4>
          <h4>Phone : +212 698888275</h4>
        </div>
      </div>
      <div className="contactForm">
        <h1>Send me a message</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="name"
            type="text"
            name="user_name"
            placeholder="name"
          />
          <input
            type="email"
            className="email"
            name="user_email"
            placeholder="email"
          />
          <textarea name="message" className="message" placeholder="Message" />
          <button className="submit" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
export default Contact
