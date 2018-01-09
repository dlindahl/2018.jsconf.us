import classnames from 'classnames'
import { element, node, string } from 'prop-types'
import Footer from '../components/Footer'
import Head from 'react-helmet'
import Header from '../components/Header'
import React from 'react'

import './DefaultLayout.css'

const DefaultLayout = ({ children, description, title, hero }) => {
  const headerCls = classnames({
    'Site-Header--withHero': Boolean(hero)
  })
  return (
    <div>
      <Head
        meta={[{ content: description, name: 'description' }]}
        title={title}
      />
      <header className={headerCls}>
        <Header/>
        {hero}
      </header>
      <main>{children}</main>
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
