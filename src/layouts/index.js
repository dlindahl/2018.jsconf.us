import { absoluteUrl } from '../util/urlFilters'
import { func, shape, string } from 'prop-types'
import Helmet from 'react-helmet'
import React from 'react'

const MasterLayout = ({
  children,
  data: { site: { siteMetadata } },
  location: { pathname },
  ...props
}) => (
  <div>
    <Helmet
      defaultTitle={siteMetadata.title}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
          rel: 'stylesheet'
        },
        {
          href: '/img/favicons/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/img/favicons/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/img/favicons/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          color: '#f0db4f',
          href: '/img/favicons/safari-pinned-tab.svg',
          rel: 'mask-icon'
        },
        { href: '/img/favicons/favicon.ico', rel: 'shortcut icon' },
        { href: absoluteUrl(pathname), rel: 'canonical' }
      ]}
      meta={[
        { content: 'text/html;charSet=UTF-8', httpEquiv: 'Content-type' },
        { content: 'ie=edge', httpEquiv: 'x-ua-compatible' },
        {
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          name: 'viewport'
        },
        {
          content: '/img/favicons/browserconfig.xml',
          name: 'msapplication-config'
        },
        { content: siteMetadata.description, name: 'description' }
      ]}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang="en"/>
    </Helmet>
    {children()}
  </div>
)

MasterLayout.propTypes = {
  children: func.isRequired,
  data: shape({
    site: shape({
      siteMetadata: shape({
        description: string.isRequired,
        title: string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  location: shape({
    pathname: string.isRequired
  }).isRequired
}

export default MasterLayout

export const query = graphql`
  query MasterLayoutQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
