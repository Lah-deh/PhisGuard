import { useState } from 'react';
import Logo from '../assets/Images/IMG-20250704-WA0013.jpg'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header" id='home'>
      
      <div className="logo"><img src={Logo}/></div>
      <button
        className="hamburger"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      
      <nav className="nav-links">
        {/* <a href="#works">How It works</a> */}
        <a href="#features">Features</a>
        <a href="#feed">Feedbacks</a>
        <a href="#faq">FAQs</a>
        <a href="#about">About Us</a>
        <a className="install-btn" href="#install">Get PhisDuard</a>
      </nav>

      
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <a onClick={() => setIsOpen(false)} href="#home">Home</a>
        <a onClick={() => setIsOpen(false)} href="#features">Features</a>
        <a onClick={() => setIsOpen(false)} href="#feed">Feedbacks</a>
        <a onClick={() => setIsOpen(false)} href="#faq">FAQs</a>
        <a onClick={() => setIsOpen(false)} href="#about">About Us</a>
        <a onClick={() => setIsOpen(false)} className="install-btn" href="#install">
          Get PhisGuard
        </a>
      </div>
    </header>
  );
}
