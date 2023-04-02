import React from 'react'
import lala from "../../assets/img/lala.jpeg"
import './about.css'
import {BiRightArrow} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h1>About Me</h1>

        <div className="container about_container">
        {/* <p>Hi! I am a budding Bachelor in Electronics and Communication and a developer in the making. I have had a handful experiences in frontend developing. I am also a freelancer. If you have made it to my website do contact me for any software service. Cheers!</p> */}
          <div className="about_me">
            <div className="about_me-image">
              <img src={lala} />
            </div>
          </div>

          <div class="container">
          <div className="about_content">
          {/* <p>Hi! I am a budding Bachelor in Electronics and Communication and a developer in the making. I have had a handful experiences in frontend developing. I am also a freelancer. If you have made it to my website do contact me for any software service. Cheers!</p> */}
           <div className="left-content">
          <div className="content">
          <BiRightArrow/>
          <div className='content_item'><strong>Birthday </strong>
          <small className='text-light'>30 December 2001</small></div> 
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>Age </h4>
          <small className='text-light'>21</small>
          </div>
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>Contact Number </h4>
          <small className='text-light'>+91 8017508706</small>
          </div>
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>City </h4>
          <small className='text-light'>Kolkata, India</small>
          </div>
          </div>

        </div> 

        <div className="right-content">
          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
            <h4>Institution </h4>
          <small className='text-light'>St. Thomas' College of Engineering and Technology</small></div>
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>Degree </h4>
          <small className='text-light'>B. Tech in Electronics and Communication</small>
          </div>
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>Language Proficiency </h4>
          <small className='text-light'>English, Bengali, Hindi</small>
          </div>
          </div>

          <div className="content">
          <BiRightArrow/>
          <div className='content_item'>
          <h4>Freelance </h4>
          <small className='text-light'>Available</small>
          </div>
          </div>

        </div> 


          </div>
         </div>
      </div>
          
      </section>
  )
  }

export default About




   