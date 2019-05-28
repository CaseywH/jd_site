import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contact';
import Head from '../components/head';

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <h1>Contact page</h1>
    <ContactForm />
  </Layout>
);

export default Contact;
