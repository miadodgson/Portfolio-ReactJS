import React from 'react'
import './Header.css'
import Nav from '../Navbar/Navbar'
import img from '../../Assets/Images/BiochemistryLogo.png'

const Header = () => {

return (
	<div>
		<h1 className="header">
		<img src={img}  alt="biochemistry-logo" className='biochemistry-logo' />
        <Nav/>
		</h1>
	</div>
	)
}

export default Header