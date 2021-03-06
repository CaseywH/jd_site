import React from 'react';
import { Link } from 'gatsby';
import {
  FaFacebook, FaInstagram, FaTwitter, FaHome,
} from 'react-icons/fa';
import headerStyles from './header.module.scss';

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.navLeft}>
      <h1>
        <Link to="/" className={headerStyles.title}>JD</Link>
      </h1>
      <Link to="/" className={headerStyles.home}><FaHome /></Link>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>home</Link>
          </li>
          <li>
            <Link to="/items" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>items</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>about</Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className={headerStyles.navRight}>
      <a href="www.facebook.com" target="_blank"><FaFacebook /></a>
      <a href="www.instagram.com" target="_blank"><FaInstagram /></a>
      <a href="www.twitter.com" target="_blank"><FaTwitter /></a>
    </div>

  </header>
);

export default Header;
