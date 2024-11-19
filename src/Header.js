import React from 'react'
import './App.css'
import Nav from './Navbar'
import img from './BiochemistryLogo.png'

const Header = () => {

console.log(img)

return (
	<div>
		<h1 className="header">
        <Nav/>
		</h1>
	</div>
	)
}

export default Header