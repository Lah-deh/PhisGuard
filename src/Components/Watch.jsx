import React from 'react'



const Watch = () => {
  return (
    <div className='Watch'>
      <h3>Watch PhisGuard in Action</h3>
      <video controls className='demo'>
        <source src='/video.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default Watch
