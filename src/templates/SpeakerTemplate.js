import { absoluteUrl } from '../util/urlFilters'
import { any, arrayOf, bool, shape, string } from 'prop-types'
import React from 'react'
import SpeakerPage from '../components/SpeakerPage'

const SpeakerTemplate = ({
  data: {
    speaker: { frontmatter: { description, title, speakers, visible }, html }
  },
  location,
  ...props
}) => (
  <SpeakerPage
    description={description}
    html={html}
    speakers={speakers}
    title={title}
    url={absoluteUrl(location.pathname)}
    visible={visible}
  />
)

SpeakerTemplate.propTypes = {
  children: any,
  data: shape({
    speaker: shape({
      frontmatter: shape({
        description: string.isRequired,
        speakers: arrayOf(
          shape({
            avatar: string,
            github: string,
            glitch: string,
            name: string,
            twitter: string,
            url: string
          })
        ),
        title: string,
        visible: bool.isRequired
      }).isRequired,
      html: string.isRequired
    }).isRequired
  }).isRequired,
  location: shape({
    pathname: string.isRequired
  }).isRequired
}

export default SpeakerTemplate

export const query = graphql`
  query SpeakerPageBySlug($slug: String!) {
    speaker: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
        speakers {
          avatar
          github
          glitch
          name
          twitter
          url
        }
        visible
      }
      html
    }
  }
`
