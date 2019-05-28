import React from 'react';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Item from '../components/item';
import itemStyles from '../components/item.module.scss';
import Head from '../components/head';

const Items = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulProducts{
    edges{
      node{
        item
        link{
          link
        }
        image{
          file{
            url
          }
        }
        description
      }
    }
  }
    }
  `);


  return (

    <Layout>
      <Head title="Items" />
      <div className={itemStyles.heading}><h3>current listings reflect multiple platforms</h3></div>
      <div className={itemStyles.container}>
        {data.allContentfulProducts.edges.map(edge => (
          <Item
            item={edge.node.item}
            link={edge.node.link.link}
            image={edge.node.image.file.url}
            description={edge.node.description}
          />
        ))}
      </div>
    </Layout>
  );
};


export default Items;
