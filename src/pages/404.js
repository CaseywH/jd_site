import React from 'react';
import Layout from '../components/layout';
import NotFoundComp from '../components/404';
import Head from '../components/head';

const NotFound = () => (
  <Layout>
    <Head title="404" />
    <NotFoundComp />
  </Layout>
);

export default NotFound;
