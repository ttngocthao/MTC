// import React from 'react'
import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
/** @jsx jsx */
import { jsx } from 'theme-ui'

import Contact  from '../components/contact/Contact';
import Hero from '../components/hero/Hero';


import HeroImg from '../images/contactHero.png';

const ContactPage = () => {
    return (
      <Layout title={"Contact"}>

        <title>Contact Page</title>

        <Hero heroSrc={HeroImg} noTopLayout={true} pageTitle='contact'/>      

        <Contact/>

      </Layout>
    )
}

export default ContactPage
