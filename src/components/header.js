import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
        title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navLeft}>
        <h1>
          <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
        </h1>
        <nav>
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
        <a href="www.facebook.com"><FaFacebook /></a>
        <a href="www.instagram.com"><FaInstagram /></a>
        <a href="www.twitter.com"><FaTwitter /></a>
      </div>

    </header>
  );
};

export default Header;
