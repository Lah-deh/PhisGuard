import React from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Work from '../Components/Work';
import Features from'../Components/Features';
import Watch from '../Components/Watch';
import Feed from '../Components/Feed';
import Privacy from '../Components/Privacy';
import FAQ from '../Components/Faq';
import About from '../Components/About';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Work/>
      <Features/>
      <Watch/>
      <Feed/>
      <Privacy/>
      <FAQ/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
