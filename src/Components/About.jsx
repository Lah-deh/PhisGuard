import React from 'react'
import Bolu from '../assets/Images/bolu.png'
import Leo from '../assets/Images/leo.png'
import Wale from '../assets/Images/wale.png'
import Emma from '../assets/Images/emma.png'

const About = () => {
  return (
    <div className='About'>
      <h1>About Us</h1>
      <div className='about'>
        <div className='Bolu'> 
            <img src={Bolu}/>
            <h3>Asokere Sucess</h3>
            <p>Frontend Developer</p>
        </div>
        <div className='Leo'>
            <img src={Leo}/>
            <h3>Aniete Prince </h3>
            <p>Project Manager</p>
        </div>
        <div>
            <img src={Wale}/>
            <h3>Olawale Olaitan</h3>
            <p>Backend Developer</p>
        </div>
        <div>
            <img src={Emma}/>
            <h3>Emmanuel Ofobutu</h3>
            <p>AI and ML Engineer</p>
        </div>
      </div>
    </div>
  )
}

export default About
