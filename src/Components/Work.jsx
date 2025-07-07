import React from 'react'
import Install from '../assets/Images/install.png'
import Broswe from '../assets/Images/broswe.png'
import Get from '../assets/Images/ger.png'


const Work = () => {
  return (
    <div className='Work' id='works'>
        <h2>How PhisGuard works?</h2>
        <div className='cards'>
            <div className='card1'>
                <img src={Install}/>
                <h3>Install the extension</h3>
                <p>Add PhisGuard to your broswer in one click from the chrome Web store.</p>
            </div>
            <div className='card2'>
                <img src={Broswe}/>
                <h3>Browse the web safely</h3>
                <p>Continue using the internet as usual while PhisGuard runs quietly in the background.</p>
            </div>
            <div className='card3'>
                <img src={Get}/>
                <h3>Get instant phishing alerts</h3>
                <p>See red warnings for phishing sites and green indicators when links are safe.</p>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default Work
