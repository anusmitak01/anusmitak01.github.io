import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/img/me.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5> Hello I'm </h5>
            <h1> Anusmita Kundu </h1>
            <h2 className="text-light">I'm a Frontend Developer</h2>
            <CTA/>
            <div className="container_me">
            <div className="me">
              <img src={me}/>
            </div>
            </div>
            <Socials />
        </div>
    </header>
  )
}

export default Header
