import React, { useState } from 'react';
import './SubNav.css';
import { Link } from 'react-router-dom';

export default function SubNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="subNavbar">
      <div className="subDiv">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/' onClick={toggleMenu}>Home</Link></li>

          <li className="dropdown">
            About Library
            <div className="dropdown-content">
              <Link to='/about' onClick={toggleMenu}>About Library</Link>
              <Link to='/vision' onClick={toggleMenu}>Vision & Mission</Link>
              <Link to='/collections' onClick={toggleMenu}>Library Collections</Link>
              <Link to='/staff' onClick={toggleMenu}>Library Staff</Link>
            </div>
          </li>

          {/* <li className='dropdown'>
            Membership
            <div className="dropdown-content">
              <Link to='/typesOfMembership' onClick={toggleMenu}>Types of Membership</Link>
              <Link to='/termsOfMembership' onClick={toggleMenu}>Terms of Membership</Link>
            </div>
          </li> */}

          <li className='dropdown'>
            Library Services
            <div className="dropdown-content">
              {/* <a href="" onClick={toggleMenu}>Lending Services</a> */}
              <Link to='/manuscripts' onClick={toggleMenu}>Manuscripts</Link>
              <Link to='/journal' onClick={toggleMenu}>Journals</Link>
              <Link to='/webopac' onClick={toggleMenu}>e-Granthalaya Web-OPAC</Link>
              <Link to='/eSearchHelp' onClick={toggleMenu}>e-Granthalaya Search Help</Link>
              <a href="" onClick={toggleMenu}>Departmental Library</a>
            </div>
          </li>

          <li className='dropdown'>
            e-Resources
            <div className="dropdown-content">
              <Link to='/inflibnet' onClick={toggleMenu}>INFLIBNET resources</Link>
              <Link to='/eResources' onClick={toggleMenu}>e-Resources</Link>
            </div>
          </li>

          <li className='dropdown'>
            Contacts & FAQ
            <div className="dropdown-content">
              <Link to='/contact' onClick={toggleMenu}>Contact</Link>
              <a href="" onClick={toggleMenu}>FAQs</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
