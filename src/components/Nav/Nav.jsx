import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
// import {BsBookHalf} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {BsFillBookmarksFill} from 'react-icons/bs'
import {IoMdContacts} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return(
    <nav>
        <a href="#" className={activeNav === '#' ? 'active': ''} title="Home"><AiFillHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} title="About"><FaUserAlt/></a>
        {/* <a href="#education"><BsBookHalf/></a> */}
        <a href="#Skills" onClick={()=> setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active': ''} title="Skills"><MdDesignServices/></a>
        <a href="#Projects" onClick={()=> setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active': ''} title="Projects"><BsFillBookmarksFill/></a>
        <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active': ''} title="Contact"><IoMdContacts/></a>
    </nav>
  )
}

export default Nav
