import React from 'react'
import Bolu from '../assets/Images/bolu.jpg'
import Leo from '../assets/Images/leo.jpg'
import Wale from '../assets/Images/wale.jpg'
import Emma from '../assets/Images/emma.jpg'

const About = () => {
  return (
    <div className='About' id='about'>
      <h2>About Us</h2>
      <div className='about'>
        <div className='Bolu'> 
            <div className='boluu'>
                <img src={Bolu}/>
            </div>
            <h3>Asokere Sucess</h3>
            <p>Frontend Developer</p>
        </div>
        <div className='Leo'>
            <div className='leoo'>
                <img src={Leo}/>
            </div>
            <h3>Anietie Prince </h3>
            <p>Project Manager</p>
        </div>
        <div>
            <div className='walee'>
                <img src={Wale}/>
            </div>
            <h3>Olawale Olaitan</h3>
            <p>Backend Developer</p>
        </div>
        <div>
            <div className='emmaa'>
                <img src={Emma}/>
            </div>
            <h3>Emmanuel Ofobutu</h3>
            <p>AI and ML Engineer</p>
        </div>
      </div>
    </div>
  )
}

export default About
