import { array, arrayOf, bool, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import SpeakersList from './SpeakersList'

const TRACK_A = 'a'
const TRACK_B = 'b'

const SpeakersPage = ({ data }) => {
  const trackA = data.filter(({ frontmatter }) => frontmatter.track === TRACK_A)
  const trackB = data.filter(({ frontmatter }) => frontmatter.track === TRACK_B)
  return (
    <DefaultLayout description="Our Speakers" title="Our Speakers">
      <SpeakersList items={trackA} title="AMP Track">
        <p>
          The <a href="/sponsors/amp/">AMP</a> Track includes a curated set of speakers that have submitted their
          proposals and have successfully made it through our selection process.
        </p>
      </SpeakersList>
      <SpeakersList items={trackB} title="Track B">
        <p>
          The alternative track for JSConf US is driven by people like you! We
          have a very unique format in that we let anyone register to speak in a
          first-come, first-speaking format. These talks are generally from the
          full range of Node.js development and are some of the most exciting
          talks at JSConf.
        </p>
      </SpeakersList>
    </DefaultLayout>
  )
}

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
