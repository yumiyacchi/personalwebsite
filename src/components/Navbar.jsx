import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <aside class="vertical-sidebar">
    <input type="checkbox" role="switch" id="checkbox-input" class="checkbox-input" checked />
    <nav>
        <header>
            <div class="sidebar__toggle-container">
                <label tabindex="0" for="checkbox-input" id="label-for-checkbox-input" class="nav__toggle">
                    <span class="toggle--icons" aria-hidden="true">
                    </span>
                </label>
            </div>
            <figure>
                <img class="top-logo" src=".\public\images\toplogo.jpg" alt="Logo"/>
                <figcaption>
                    <p class="user-id">Codepen</p>
                    <p class="user-role">Coder</p>
                </figcaption>
            </figure>
        </header>
        <section class="sidebar__wrapper">
            <ul class="sidebar__list list--primary">
                <li class="sidebar__item"> 
                    <a class="sidebar__link" href="/" data-tooltip="Home">
                        <span class="text">Home</span>
                    </a>
                </li>
                <li class="sidebar__item">
                    <a class="sidebar__link" href="/contact" data-tooltip="Contact">
                        <span class="text">Contacto</span>
                    </a>
                </li>
                <li class="sidebar__item">
                    <a class="sidebar__link" href="/events" data-tooltip="Events">
                        <span class="text">Eventos</span>
                    </a>
                </li>
            </ul>
        </section>
    </nav>
</aside>
  );
};

export default Navbar;