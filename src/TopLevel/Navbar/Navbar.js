import '../Navbar/Navbar.css';
import React, { useState, useRef } from 'react';
import { ReactComponent as ArrowIcon } from '../../Assets/Images/Arrow.svg';
import {Link} from "react-router-dom";


function Nav() {
  return (
    <Navbar>
      <NavItem icon={<ArrowIcon />}>
		<DropdownMenu> </DropdownMenu>
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
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function DropdownMenu() {
  const [menuHeight] = useState(null);
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
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <div className="menu">
			<DropdownItem 
				leftIcon=<ArrowIcon />
				route='/'
				routeName='Home'/>

			<DropdownItem 
				leftIcon='@'
				route='/Contact'
				routeName='Contact'/>
				
		</div>
	</div>
)
}

export default Nav