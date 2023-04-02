import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/_aanushhmitaa_/" target="_blank"><GrInstagram/></a>
        <a href= "https://www.linkedin.com/in/anusmita-kundu-aa303620b/" target="_blank"><BsLinkedin/></a>
      </div>
      

      <div className="footer_copyright">
        <small>&copy; Anusmita Kundu. All rights reserved!</small>
      </div>

    </footer>
  )
}

export default Footer
