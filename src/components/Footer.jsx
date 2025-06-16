

import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Yumiyacchi | Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yumiyacchi_music/" target="_blank" rel="noopener noreferrer">
          <FaIcons.FaInstagram />
        </a>
        <a href="https://x.com/thejmnavarro" target="_blank" rel="noopener noreferrer">
          <FaIcons.FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;