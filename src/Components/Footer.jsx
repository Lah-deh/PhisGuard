import React from 'react'
import x from '../assets/Images/x.png'
import fb from '../assets/Images/fb.png'
import ig from '../assets/Images/ig.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='foot'>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Contact Us</p>
      </div>
      <div className='foott'>
        <img src={x}/>
        <img src={fb}/>
        <img src={ig}/>
      </div>
      <div className='Foot'>
        <p>&copy; 2025. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
