import React from 'react'
import Detect from '../assets/Images/detect.png'
import Light from '../assets/Images/lightweight.png'
import Alert from '../assets/Images/alert.png'

const Features = () => {
  return (
    <div className='Features' id='features'>
        <h2>Features</h2>
        <div className='Cards'>
            <div className='Card1'>
                <img src={Detect}/>
                <h3>Detects Fake Links Instantly</h3>
                <p>Warns you in real time about Phishing sites. </p>
            </div>
            <div className='Card2'>
                <img src={Light}/>
                <h3>Lightweight Extension</h3>
                <p>Easy to install, minimal performance impact.</p>
            </div>
            <div className='Card3'>
                <img src={Alert}/>
                <h3>Detects Fake Links Instantly</h3>
                <p>Immediate notifications for suspicious links.</p>
            </div>

        </div>
      
    </div>
  )
}

export default Features
