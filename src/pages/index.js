import React from 'react';
import { Link } from 'gatsby';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import landingStyles from '../components/landing.module.scss';

const IndexPage = () => (
  <div>

    <div className={landingStyles.content}>
      <div className={landingStyles.icons}>
        <a href="www.facebook.com"><FaFacebook /></a>
        <a href="www.instagram.com"><FaInstagram /></a>
        <a href="www.twitter.com"><FaTwitter /></a>
      </div>
      <div className={landingStyles.banner}>
        <h1 className={landingStyles.bannerText}>JD's shoppe</h1>
        <div className={landingStyles.bannerNav}>
          <div className={landingStyles.buttonContainer}>
            <Link to="/items" className={landingStyles.btn}>Items</Link>
          </div>
          <div className={landingStyles.buttonContainer}>
            <Link to="/about" className={landingStyles.btn}>About</Link>
          </div>
          <div className={landingStyles.buttonContainer}>
            <Link to="/contact" className={landingStyles.btn}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default IndexPage;
