import React from 'react'
import './about2.css'
import lala from "../../assets/img/lala.jpeg"
import {BiRightArrow} from 'react-icons/bi'
const About2 = () => {
  return (
    <section id='about2'>
        <h5>Get To Know</h5>
        <h1>About Me</h1>
        <p>Hi! I am a budding Bachelor in Electronics and Communication and a developer in the making. I have had a handful experiences in frontend developing. I am also a freelancer. If you have made it to my website do contact me for any software service. Cheers!</p>

        <div className="about_container">
            <div className="about_image">
            <img src={lala} />
            </div>
        

        <div className="about_content">
            <div className="about_leftcontent">
                <ul>
                    <li><BiRightArrow/><strong>Birthday  :  </strong>30 December 2001</li>
                    <li><BiRightArrow/><strong>Age : </strong> 21</li>
                    <li><BiRightArrow/><strong>Residence : </strong>Kolkata, India</li>
                    <li><BiRightArrow/><strong>Hobbies : </strong>Playing, Sketching, Binge watching</li>
                </ul>
            </div>

            <div className="about_rightcontent">
                <ul>
                    <li><BiRightArrow/><strong>Areas Of Interest : </strong>Problem Solving, Content Writing</li>
                    <li><BiRightArrow/><strong>Degree : </strong>B.Tech in ECE</li>
                    <li><BiRightArrow/><strong>Instituition : </strong>St. Thomas' College of Engineering and Technology</li>
                    <li><BiRightArrow/><strong>Language Proficiency : </strong>English, Bengali, Hindi</li>
                </ul>
            </div>
        </div>
    </div>
    </section> 
  )
}

export default About2

 