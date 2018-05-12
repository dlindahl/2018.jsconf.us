import { arrayOf, object, shape } from 'prop-types'
import React from 'react'
import SpeakersPage from '../components/SpeakersPage'

const Speakers = ({ data: { speakers } }) => {
  speakers = speakers || { edges: [] }
  return <SpeakersPage data={speakers.edges.map((edge) => edge.node)}/>
}

Speakers.propTypes = {
  data: shape({
    speakers: shape({
      edges: arrayOf(
        shape({
          node: object.isRequired
        }).isRequired
      ).isRequired
    })
  })
}

export default Speakers

export const query = graphql`
  query SpeakersQuery {
    speakers: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/speakers/" } }
        frontmatter: { visible: { eq: true } }
      }
      sort: { fields: [fields___slug], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            speakers {
              avatar
              github
              name
              twitter
              url
            }
            title
            visible
          }
        }
      }
    }
  }
`
