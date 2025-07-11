import React from 'react'

const Hero = () => {
  const handleDownload = () => {
    window.open(
      'https://github.com/Lah-deh/PhisGuard_Zip/archive/refs/heads/main.zip',
      '_blank'
    );
  }
  return (
    <div className='Hero'>
      <div className='heroo'>
        <h1>Stay Safe Online with PhisGuard</h1>
        <p>PhisGuard is a lightweight broswer extension that detects phishing sites in real time. It's not an ad blocker. It simply analyze links you visit and shows a red warning if a link is phising and a green if it's safe, so you can browse with confidence. </p>
        <button onClick={handleDownload}>Install Extension</button>
      </div>
    </div>
  )
}

export default Hero
