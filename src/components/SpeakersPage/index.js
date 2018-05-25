import { array, arrayOf, bool, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import SpeakersList from './SpeakersList'

const SpeakersPage = ({ data }) => (
  <DefaultLayout description="Our Speakers" title="Our Speakers">
    <ContentBlock title="Announcing our Speaker Line-up!">
      <p>
        We are announcing our Track A speaker line-up over the next few weeks on
        our Twitter feed. Follow us at{' '}
        <a href="https://twitter.com/jsconfus">@JSConfUS</a> to get the latest
        updates!
      </p>
      <p>Here is our line-up so far:</p>
    </ContentBlock>
    <SpeakersList items={data}/>
  </DefaultLayout>
)

SpeakersPage.propTypes = {
  data: arrayOf(
    shape({
      fields: shape({
        slug: string.isRequired
      }).isRequired,
      frontmatter: shape({
        speakers: array.isRequired,
        title: string.isRequired,
        visible: bool.isRequired
      }).isRequired
    })
  )
}

export default SpeakersPage
