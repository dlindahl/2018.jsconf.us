import { absoluteUrl } from '../util/urlFilters'
import Head from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children, data: { site }, location: { pathname }, ...props }) => {
  console.info('yo', site, props)
  return (
  <div>
    <Head>
      <html lang="en"/>
      <meta content="text/html;charSet=UTF-8" httpEquiv="Content-type"/>
      <meta content="ie=edge" httpEquiv="x-ua-compatible"/>
      <title>{site.siteMetadata.title}</title>
      <meta content={site.siteMetadata.description} name="description"/>
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png"/>
      <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#f0db4f"/>
      <link rel="shortcut icon" href="/img/favicons/favicon.ico"/>
      <meta name="msapplication-config" content="/img/favicons/browserconfig.xml"/>
      <link href={absoluteUrl(pathname)} rel="canonical"/>
    </Head>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string,
        siteUrl: PropTypes.string,
        title: PropTypes.string
      })
    })
  })
}

export default TemplateWrapper

export const pageQuery = graphql`
  query BlogPostLayoutBySlug {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
