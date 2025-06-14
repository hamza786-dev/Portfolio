import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import './Components/Navbar.css'
import Hero from './Hero'
import './Hero.css'
import About from './About'
import './About.css'
import Services from "./Services"
import "./Services.css"
import Portfolio from './Portfolio'
import "./Portfolio.css"
import Footer from './Footer'
import "./Tabs.css"


function Home() {
  return (
    <div>
        
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Footer/>
    </div>
  )
}

export default Home