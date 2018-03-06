import classnames from 'classnames'
import { element, node, string } from 'prop-types'
import Footer from '../components/Footer'
import Head from 'react-helmet'
import React from 'react'

import './DefaultLayout.css'

const DefaultLayout = ({ children, description, title, hero }) => {
  const headerCls = classnames({
    'Site-Header--withHero': Boolean(hero)
  })
  return (
    <div className="DefaultLayout">
      <Head
        meta={[{ content: description, name: 'description' }]}
        title={title}
      />
      <header className={headerCls}>{hero}</header>
      <main className="DefaultLayout-Content">{children}</main>
      <Footer/>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: node.isRequired,
  description: string,
  hero: element,
  title: string
}

export default DefaultLayout
