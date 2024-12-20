import '../Navbar/Navbar.css';
import React, { useState, useRef } from 'react';
import NavIcon from '../../Assets/Images/NavIcon.png';
import {Link} from "react-router-dom";
import plant from '../../Assets/Images/Plant.png'
import Dropdown from '../../Components/Dropdown/Dropdown.js'


function Nav() {
  return (
    <Navbar>
      	<NavItem icon={<img src={NavIcon} className='nav-button' alt="Nav Icon" />}>
		 <DropdownMenu/>
		</NavItem>
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="nav-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const dropdownRef = useRef(null);


  function DropdownItem({leftIcon, route, routeName}) {
    return (
      <Link
		  to={route}
		className="menu-item">
        <span className="icon-button">{leftIcon}
		</span>
		<span className="route-name">{routeName}
		</span>
	</Link>
    )
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
        <div className="menu">
			<DropdownItem 
				leftIcon=
					{<img src={plant} className='menu-item' alt="plant" height={100}/>}
				route='/'
				routeName='Home'/>

			<DropdownItem 
				leftIcon='@'
				route='/Education'
				routeName='Education'/>

			<DropdownItem 
				leftIcon='@'
				route='/Experience'
				routeName='Experience'/>

			<DropdownItem 
				leftIcon='@'
				route='/Publications'
				routeName='Publications'/>

			<DropdownItem 
				leftIcon='@'
				route='/Contact'
				routeName='Contact'/>
				
		</div>
	</div>
)
}

export default Nav
