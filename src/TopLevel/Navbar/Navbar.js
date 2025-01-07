import styles from '../Navbar/Navbar.module.css';
import React, { useState, useRef } from 'react';
import NavIcon from '../../Assets/Images/NavIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from './NavImages/HomeIcon.png';
import EducationIcon from './NavImages/EducationIcon.png';
import ExperienceIcon from './NavImages/ExperienceIcon.png';
import PublicationsIcon from './NavImages/PublicationsIcon.png';
import ResourcesIcon from './NavImages/ResourcesIcon.png';
import ContactIcon from './NavImages/ContactIcon.png';

function Nav() {
  return (
    <Navbar>
      <NavItem
        icon={<img src={NavIcon} className={styles.navButton} alt="Nav Icon" />}
      >
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <a
        className={`${styles.navButton}`}
        onClick={() => setOpen(!open)}
        style={{
          transform: open ? 'rotate(-180deg)' : 'rotate(90deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {props.icon}
      </a>
      {open && React.cloneElement(props.children, { closeMenu: () => setOpen(false) })}
    </li>
  );
}

function DropdownMenu({ closeMenu }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  function handleNavigation(route) {
    closeMenu(); // Close the menu
    navigate(route); // Navigate to the route
  }

  function DropdownItem({ leftIcon, route, routeName }) {
    return (
      <div
        onClick={() => handleNavigation(route)}
        className={styles.menuItem}
      >
        <span className={styles.iconButton}>{leftIcon}</span>
        <span className={styles.routeName}>{routeName}</span>
      </div>
    );
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.menu}>
        <DropdownItem
          leftIcon={<img src={HomeIcon} height={35} width={35} alt="Home" />}
          route="/"
          routeName="Home"
        />
        <DropdownItem
          leftIcon={
            <img
              src={EducationIcon}
              alt="Education"
              height={35}
              width={35}
            />
          }
          route="/Education"
          routeName="Education"
        />
        <DropdownItem
          leftIcon={
            <img
              src={ExperienceIcon}
              alt="Research"
              height={40}
              width={40}
            />
          }
          route="/Experience"
          routeName="Research"
        />
        <DropdownItem
          leftIcon={
            <img
              src={PublicationsIcon}
              alt="Publications"
              height={40}
              width={40}
            />
          }
          route="/Publications"
          routeName="Publications"
        />
        <DropdownItem
          leftIcon={
            <img src={ResourcesIcon} alt="Resources" height={30} width={30} />
          }
          route="/Resources"
          routeName="Resources"
        />
        <DropdownItem
          leftIcon={
            <img src={ContactIcon} alt="Contact" height={35} width={35} />
          }
          route="/Contact"
          routeName="Contact"
        />
      </div>
    </div>
  );
}

export default Nav;