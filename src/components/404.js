import React from 'react';
import { Link } from 'gatsby';
import notFoundStyles from './404.module.scss';

const NotFoundComp = () => (
  <div className={notFoundStyles.container}>
    <h1>Page not found</h1>
    <p><Link to="/" className={notFoundStyles.link}>go to home</Link></p>
  </div>
);

export default NotFoundComp;
