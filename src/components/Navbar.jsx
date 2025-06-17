import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div className="sidebar-hover-zone">
    {/* small invisible handle */}
    <aside className="vertical-sidebar">
      <input
        type="checkbox"
        role="switch"
        id="nav-toggle"
        className="checkbox-input"
      />
      <nav>
        <header>
          <div className="sidebar__toggle-container">
            {/* label works on mobile tap */}
            <label htmlFor="nav-toggle" className="nav__toggle">
              ☰
            </label>
          </div>

          <figure>
            <img className="top-logo" src="../public/images/toplogo.jpg" alt="Logo" />
            <figcaption>
              <p className="user-id">Yumiyacchi</p>
              <p className="user-role">Menu</p>
            </figcaption>
          </figure>
        </header>

        <section className="sidebar__wrapper">
          <ul className="sidebar__list list--primary">
            <li className="sidebar__item">
              <a className="sidebar__link" href="/" data-tooltip="Home">
                Home
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="/contact" data-tooltip="Contact">
                Contacto
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="/events" data-tooltip="Events">
                Eventos
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  </div>
);

export default Navbar;