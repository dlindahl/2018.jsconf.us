import { array, arrayOf, bool, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import SpeakersList from './SpeakersList'

const SpeakersPage = ({ data }) => (
  <DefaultLayout description="Our Speakers" title="Our Speakers">
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
