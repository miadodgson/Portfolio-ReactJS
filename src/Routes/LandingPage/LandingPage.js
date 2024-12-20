import React from 'react'
import LeftContent from '../../Routes/LandingPage/LeftContent.js'
import RightContent from '../../Routes/LandingPage/RightContent.js'
import './LandingPage.css'


const LandingPage = () => {

  return (
	  <div className='content-container'>
		  <LeftContent />
		  <RightContent />
    </div>
  )
}

export default LandingPage
