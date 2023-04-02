import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_meiyvld', 'template_7gugcsk', form.current, 'QBgmmpfz3FofO9Osv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="Contact">
      <div className="contact">
      <h2>Get In Touch</h2>
     <h1>Contact Me</h1>

     <div className="container_contact">
      <div className="container_options">
        <article className="contact_option">
          <TfiEmail/>
          <h3>Email</h3>
          <h5>15anusmitak@gmail.com</h5>
          <a href="mailto:15anusmitak@gmail.com" target="_blank">Send a mail</a>
        </article>

        <article className="contact_option">
          <BsLinkedin/>
          <h3>LinkedIn</h3>
          <h5>Anusmita Kundu</h5>
          <a href="https://www.linkedin.com/in/anusmita-kundu-aa303620b/">DM</a>
        </article>

        <article className="contact_option">
          <BsWhatsapp/>
          <h3>WhatsApp</h3>
          <h5>+91 8017508706</h5>
          <a href="https://api.whatsapp.com/send?phone=+918017508706">Send a message</a>
        </article> 
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>
     
     </div>
    </section>
  )
}



 export default Contact
