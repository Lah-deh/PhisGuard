import React from 'react'
import logo from '../assets/Images/logo.png'


const Nav = () => {
  return (
    <div className='navv'>
       <div className='nav'>
            <img src={logo}/>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Feature</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li><button>Install Extension</button></li>
                </ul>
            </div>
      </div> 
    </div>
    
    
  )
}

export default Nav