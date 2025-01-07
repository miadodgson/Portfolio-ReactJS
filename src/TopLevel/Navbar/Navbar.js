import styles from '../Navbar/Navbar.module.css'
import React, { useState, useRef } from 'react'
import NavIcon from '../../Assets/Images/NavIcon.png'
import {Link} from "react-router-dom"
import HomeIcon from './NavImages/HomeIcon.png'
import EducationIcon from './NavImages/EducationIcon.png'
import ExperienceIcon from './NavImages/ExperienceIcon.png'
import PublicationsIcon from './NavImages/PublicationsIcon.png'
import ContactIcon from './NavImages/ContactIcon.png'


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
				leftIcon={<img src= {HomeIcon} className={styles.menuItem}alt="Home" height={40}/>}
				route='/'
				routeName='Home'/>

			<DropdownItem 
				leftIcon={<img src= {EducationIcon} className={styles.menuItem}alt="Education" height={40}/>}
				route='/Education'
				routeName='Education'/>

			<DropdownItem 
				leftIcon={<img src= {ExperienceIcon} className={styles.menuItem}alt="Research" height={40}/>}
				route='/Experience'
				routeName='Research'/>

			<DropdownItem 
				leftIcon={<img src= {PublicationsIcon} className={styles.menuItem}alt="Publications" height={40}/>}
				route='/Publications'
				routeName='Publications'/>

			<DropdownItem 
				leftIcon={<img src= {ContactIcon} className={styles.menuItem}alt="Contact" height={40}/>}
				route='/Contact'
				routeName='Contact'/>
				
		</div>
	</div>
)
}

export default Nav
