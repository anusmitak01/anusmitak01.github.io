import React from 'react'
import './projects.css'
import Coursera from '../../assets/img/Coursera.jpg'
import Guvi from '../../assets/img/Guvi.png'
import BSNL from '../../assets/img/BSNL.jpeg'
import geekonix from '../../assets/img/geekonix.jpeg'
import sports from '../../assets/img/sports.jpeg'
import codestudio from '../../assets/img/codestudio.jpeg'
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";


const data = [
    {
        image: Coursera,
    },
    {
        image: Guvi,
    },
    {
        image: codestudio,
    },
    {
        image: BSNL,
    },
    {
        image: geekonix,
    },
    {
        image: sports,
    },

]

const Projects = () => {
  return (
    <section id="projects">
        <h1>My Certificates</h1>
        <h3>Here are some of the Certificates. Swipe right to view all.</h3>
        <Swiper className="container projects_container" 
        modules={[Pagination]}
        spacebetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
            
            {
                data.map(({image,scrollbar}, index) => {
                    return(
                        <SwiperSlide key={index} className="projects_container">
                        <div className="project_item" >
                       
                            <img src={image}/>
                        </div>
                        
                        </SwiperSlide>
                    )
                }

                )
            }
        </Swiper>
    </section>
    
  ) 
}
 export default Projects
