import React from 'react'

const Feed = () => {
  return (
    <div className='Feed' id='feed'>
      <div className='Check'>
            <h3>Check Any Link Instantly</h3>
            <form>
                <input type='text' placeholder='paste'/><br/>
                <button>Check link</button>
            </form>
      </div>
      <div className='feedd'>
            <h3>Feedback</h3>
            <form>
                <input type='text'/><br/>
                <button>Submit Feedback</button>
            </form> 
      </div>
    </div>
  )
}

export default Feed
