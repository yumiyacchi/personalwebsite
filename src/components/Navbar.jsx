import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>yumiyacchi</h1>
        </div>
        <nav className="navbar-nav">
          <ul className="navbar-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/events">Noticias</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;