import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  `);
  return (
    <div className={footerStyles.footer}>
      <h4>
Created by
        {' '}
        {data.site.siteMetadata.author}
        {' '}
© 2019
      </h4>
    </div>
  );
};

export default Footer;
