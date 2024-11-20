import React from 'react'
import './App.css'
import Nav from './Navbar'
import img from './BiochemistryLogo.png'

const Header = () => {

return (
	<div>
		<h1 className="header">
		<img src={img}  alt="biochemistry-logo" />
        <Nav/>
		</h1>
	</div>
	)
}

export default Header