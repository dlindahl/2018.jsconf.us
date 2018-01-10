import { arrayOf, object, shape } from 'prop-types'
import React from 'react'
import SponsorsPage from '../components/SponsorsPage'

const Sponsors = ({ data: { sponsors: { edges } } }) => (
  <SponsorsPage
    data={edges
      .filter((edge) => edge.node.frontmatter.visible)
      .map((edge) => edge.node)}
  />
)

Sponsors.propTypes = {
  data: shape({
    sponsors: shape({
      edges: arrayOf(
        shape({
          node: object.isRequired
        }).isRequired
      ).isRequired
    })
  })
}

export default Sponsors

export const query = graphql`
  query SponsorsQuery {
    sponsors: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/sponsors/" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            level
            logo
            title
            visible
          }
        }
      }
    }
  }
`
