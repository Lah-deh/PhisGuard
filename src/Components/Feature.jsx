import React from 'react'
import feature1 from '../assets/Images/feature1.png'
import feature2 from '../assets/Images/feature2.png'
import feature3 from '../assets/Images/feature3.png'

const Feature = () => {
  return (
    <>
    <div className='feature'>
      <h1>Features</h1>
      <div className='feature1'>
        <div>
          <h2>Real-Time Threat detection</h2><br/>
          <p>PhisGuard actively monitors websites and downloads for malicious contents, providing instant<br/> and blocking threat before they can harm your system.</p>
        </div>
        <img src={feature1}/>
      </div>
      <div className='feature2'>
        <div>
          <h2>Enhanced Privacy Protection</h2>
          <p>Our extension safeguards your personal information by blocking trakers and preventing<br/>unauthorized access to your broswing data.</p>
        </div>
        <img src={feature2}/>
      </div>
      <div className='feature3'>
        <div>
          <h2>Seamless integration</h2>
          <p>Phisguard integrate smoothly with your broswer, offering robust security without<br/>compromising performance or user experience.</p>
        </div>
        <img src={feature3}/>
      </div>
    </div>
    </>
  )
}

export default Feature
