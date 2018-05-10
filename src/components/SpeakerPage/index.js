import { arrayOf, bool, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import Speaker from './Speaker'
import { toSentence } from '../../util/string'

const SpeakerPage = ({ html, title, speakers, visible }) => {
  if (!visible) {
    return null // TODO 404? Redirect?
  }
  const names = toSentence(speakers.map((speaker) => speaker.name))
  return (
    <DefaultLayout description={title} title={names}>
      <Speaker html={html} speakers={speakers} title={title}/>
    </DefaultLayout>
  )
}

SpeakerPage.propTypes = {
  html: string.isRequired,
  speakers: arrayOf(
    shape({
      avatar: string,
      name: string,
      url: string
    })
  ),
  title: string.isRequired,
  visible: bool.isRequired
}

export default SpeakerPage
