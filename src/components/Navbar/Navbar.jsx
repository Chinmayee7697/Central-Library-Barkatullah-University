import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../AuthContext';
import { Button } from 'react-bootstrap';
import './Navbar.css';


export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <div className='navbar'>
        <div className="logo">
          <img src="/img/Barkatullah_University_logo.png" alt="BU" />
          <h2>Central Library, Barkatullah University</h2>
        </div>

      {/* <div className="rightnav">
        <div className="searchbar">
          <input type="search" name="search-form" id="search-form" className="searchInput" placeholder="Search user" />
          <div className='searchIcon'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div> */}

        <div className="rightnav">
        {isAuthenticated && (
          <Button variant="secondary" onClick={logout} className='logoutBtn'>
            Logout
          </Button>
        )}
        </div>
        </div>

      {/* </div> */}
    </nav>
  );
}
