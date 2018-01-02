import { absoluteUrl } from '../util/urlFilters'
import Head from 'react-helmet'
import Link from 'gatsby-link'
import { func, shape, string } from 'prop-types'
import React from 'react'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
          to="/"
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({
  children,
  data: { site },
  location: { pathname },
  ...props
}) => (
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
      <link
        href="/img/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/img/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/img/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color="#f0db4f"
        href="/img/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/img/favicons/favicon.ico" rel="shortcut icon"/>
      <meta
        content="/img/favicons/browserconfig.xml"
        name="msapplication-config"
      />
      <link href={absoluteUrl(pathname)} rel="canonical"/>
    </Head>
    <Header/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: func,
  data: shape({
    site: shape({
      siteMetadata: shape({
        description: string,
        siteUrl: string,
        title: string
      })
    })
  }),
  location: shape({
    pathname: string
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
