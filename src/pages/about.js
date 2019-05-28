import React from 'react';
import Layout from '../components/layout';
import AboutContent from '../components/about';
import Head from '../components/head';

const About = () => (
  <Layout>
    <Head title="About" />
    <AboutContent />
  </Layout>
);

export default About;
