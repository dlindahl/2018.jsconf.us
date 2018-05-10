import Homepage from '../components/Homepage'
import { object, shape } from 'prop-types'
import React from 'react'

const IndexPage = (props) => <Homepage {...props}/>

export default IndexPage

IndexPage.propTypes = {
  data: shape({
    speakers: object
  }).isRequired
}

export const query = graphql`
  query HomepageSpeakerQuery {
    speakers: allMarkdownRemark(
      filter: {
        frontmatter: { visible: { eq: true } }
        fields: { slug: { regex: "/speakers/" } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            speakers {
              avatar
              name
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
