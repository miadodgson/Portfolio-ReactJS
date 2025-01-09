import styles from '../Navbar/Navbar.module.css';
import React, { useState, useRef } from 'react';
import NavIcon from '../../Assets/Images/NavIcon.png';
import { Link, useNavigate } from 'react-router-dom';

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
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)', 
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
    closeMenu();
    navigate(route); 
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
          route="/"
          routeName="Home"
        />
        <DropdownItem
          route="/Shop"
          routeName="Shop"
        />
        <DropdownItem
          route="/Gallery"
          routeName="Gallery"
        />
        <DropdownItem
          route="/Contact"
          routeName="Contact"
        />
      </div>
    </div>
  );
}

export default Nav;