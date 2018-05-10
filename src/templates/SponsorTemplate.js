import { any, bool, shape, string } from 'prop-types'
import React from 'react'
import SponsorPage from '../components/SponsorPage'

const SponsorTemplate = ({
  data: {
    sponsor: {
      frontmatter: { component, level, logo, name, scholarship, url, visible },
      html
    }
  },
  ...props
}) => (
  <SponsorPage
    component={component}
    html={html}
    level={level}
    logo={logo}
    name={name}
    scholarship={scholarship}
    url={url}
    visible={visible}
  />
)

SponsorTemplate.propTypes = {
  children: any,
  data: shape({
    sponsor: shape({
      frontmatter: shape({
        component: string,
        level: string.isRequired,
        logo: string,
        name: string.isRequired,
        scholarship: bool.isRequired,
        url: string.isRequired,
        visible: bool.isRequired
      }).isRequired,
      html: string.isRequired
    })
  })
}

export default SponsorTemplate

export const query = graphql`
  query SponsorPageBySlug($slug: String!) {
    sponsor: markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { visible: { eq: true } }
    ) {
      frontmatter {
        component
        logo
        level
        name
        scholarship
        url
        visible
      }
      html
    }
  }
`
