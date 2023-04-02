import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'><b>Download CV</b></a>
      <a href= "#Contact" className='btn-primary'><b>Let's talk</b></a>
    </div>
  )
}

export default CTA
