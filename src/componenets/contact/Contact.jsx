import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
const Contact = () => {
  function Contactme() {
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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
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
    )
  }
}
export default Contact
