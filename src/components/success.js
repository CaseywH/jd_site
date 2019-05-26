import React from 'react';
import { Link } from 'gatsby';
import successStyles from './success.module.scss';

const SuccessHero = () => (
  <div className={successStyles.content}>
    <h1>Success!!</h1>
    <h3>We are so thankful for your feedback!</h3>
    <ul className={successStyles.navUl}>
      <li>
        <Link to="/" className={successStyles.navItem}>home</Link>
      </li>
      <li>
        <Link to="/items" className={successStyles.navItem}>items</Link>
      </li>
    </ul>
  </div>
);

export default SuccessHero;
