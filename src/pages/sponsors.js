import { arrayOf, object, shape } from 'prop-types'
import React from 'react'
import SponsorsPage from '../components/SponsorsPage'

const Sponsors = ({ data: { sponsors } }) => {
  sponsors = sponsors || { edges: [] }
  return <SponsorsPage data={sponsors.edges.map((edge) => edge.node)}/>
}

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
      filter: {
        fields: { slug: { regex: "/sponsors/" } }
        frontmatter: { visible: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            level
            logo
            name
            scholarship
            visible
          }
        }
      }
    }
  }
`
