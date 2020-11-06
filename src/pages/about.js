import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => (
  <Layout>
    <Head title="About"/>
    <h1>About Me</h1>
    <p>about me coming soon</p>
    <Link to="/contact">Contact me!</Link>
  </Layout>
)

export default AboutPage