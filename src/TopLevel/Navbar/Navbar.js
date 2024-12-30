import styles from '../Navbar/Navbar.module.css'
import React, { useState, useRef } from 'react'
import NavIcon from '../../Assets/Images/NavIcon.png'
import {Link} from "react-router-dom"
import plant from '../../Assets/Images/Plant.png'
import Dropdown from '../../Components/Dropdown/Dropdown.js'


function Nav() {
  return (
    <Navbar>
      	<NavItem icon={<img src={NavIcon} className={styles.navButton} alt="Nav Icon" />}>
		 <DropdownMenu/>
		</NavItem>
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <a className={styles.navButton} onClick={() => setOpen(!open)}>
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
		className={styles.menuItem}>
        <span className={styles.iconButton}>{leftIcon}
		</span>
		<span className={styles.routeName}>{routeName}
		</span>
	</Link>
    )
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
        <div className={styles.menu}>
			<DropdownItem 
				leftIcon='🏠'
				route='/'
				routeName='Home'/>

			<DropdownItem 
				leftIcon='🎓'
				route='/Education'
				routeName='Education'/>

			<DropdownItem 
				leftIcon='📚'
				route='/Experience'
				routeName='Experience'/>

			<DropdownItem 
				leftIcon='📊'
				route='/Publications'
				routeName='Publications'/>

			<DropdownItem 
				leftIcon='✉️'
				route='/Contact'
				routeName='Contact'/>
				
		</div>
	</div>
)
}

export default Nav
