import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Flight Status</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
        <li className="navbar-item">
            <Link to="/status" className="navbar-link">Status</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
