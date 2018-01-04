import Head from 'react-helmet'
import Link from 'gatsby-link'
import { node, string } from 'prop-types'
import React from 'react'

import './DefaultLayout.css'

const Header = () => (
  <div>
    <h1>
      <Link to="/">JSConf US</Link>
    </h1>
  </div>
)

const DefaultLayout = ({ children, description, title, ...props }) => (
  <div>
    <Head
      meta={[{ content: description, name: 'description' }]}
      title={title}
    />
    <Header/>
    <main>{children}</main>
  </div>
)

DefaultLayout.propTypes = {
  children: node.isRequired,
  description: string,
  title: string
}

export default DefaultLayout
