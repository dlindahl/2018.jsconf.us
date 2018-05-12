import { any, arrayOf, bool, shape, string } from 'prop-types'
import React from 'react'
import SpeakerPage from '../components/SpeakerPage'

const SpeakerTemplate = ({
  data: { speaker: { frontmatter: { title, speakers, visible }, html } },
  ...props
}) => (
  <SpeakerPage
    html={html}
    speakers={speakers}
    title={title}
    visible={visible}
  />
)

SpeakerTemplate.propTypes = {
  children: any,
  data: shape({
    speaker: shape({
      frontmatter: shape({
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
  }).isRequired
}

export default SpeakerTemplate

export const query = graphql`
  query SpeakerPageBySlug($slug: String!) {
    speaker: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
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
