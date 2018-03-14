import { element, node, string } from 'prop-types'
import Footer from '../components/Footer'
import Head from 'react-helmet'
import Header from '../components/Header'
import React from 'react'

import './DefaultLayout.css'

const DefaultLayout = ({ children, description, title, hero }) => (
  <div className="DefaultLayout">
    <Head
      meta={[{ content: description, name: 'description' }]}
      title={title}
    />
    <Header>{hero}</Header>
    <main>{children}</main>
    <Footer/>
  </div>
)

DefaultLayout.propTypes = {
  children: node.isRequired,
  description: string,
  hero: element,
  title: string
}

export default DefaultLayout
