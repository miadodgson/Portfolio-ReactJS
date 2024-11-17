import React from 'react'
import Header from './Header.js'
import LeftContent from './LeftContent.js'
import RightContent from './RightContent.js'
import Footer from './Footer.js'
import './App.css'


const LandingPage = () => {

  return (
    <div>
	  <Header />
	  <div className='content-container'>
		  <LeftContent />
		  <RightContent />
	  </div> 
	  <Footer />
    </div>
  )
}

export default LandingPage
