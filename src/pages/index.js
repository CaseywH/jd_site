import React from 'react';
import { Link } from 'gatsby';
import landingStyles from '../components/landing.module.scss';

const IndexPage = () => (

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


);

export default IndexPage;
