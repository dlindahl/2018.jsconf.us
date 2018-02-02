import { element, node, string } from 'prop-types'
import Head from 'react-helmet'
import React from 'react'

import './DefaultLayout.css'

const DefaultLayout = ({ children, description, title, hero }) => (
  <div className="DefaultLayout">
    <Head
      meta={[{ content: description, name: 'description' }]}
      title={title}
    />
    <main className="DefaultLayout-Content">{children}</main>
  </div>
)

DefaultLayout.propTypes = {
  children: node.isRequired,
  description: string,
  hero: element,
  title: string
}

export default DefaultLayout
