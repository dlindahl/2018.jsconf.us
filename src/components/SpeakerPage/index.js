import { absoluteUrl } from '../../util/urlFilters'
import { arrayOf, bool, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import Helmet from 'react-helmet'
import React from 'react'
import Speaker from './Speaker'
import { slugify, toSentence } from '../../util/string'

const SpeakerPage = ({ html, title, url, speakers, visible }) => {
  if (!visible) {
    return null // TODO 404? Redirect?
  }
  const names = toSentence(speakers.map((speaker) => speaker.name))
  const metaTitle = `${names}: ${title}`
  const card = absoluteUrl(`/img/speakers/${slugify(names)}-card.png`)
  const img = absoluteUrl(`/img/speakers/${slugify(names)}-plate.png`)
  return (
    <DefaultLayout description={title} title={names}>
      <Helmet title={metaTitle}>
        <meta content={metaTitle} property="og:title"/>
        <meta content={img} property="og:image"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content={metaTitle} property="twitter:title"/>
        <meta content={card} property="twitter:image"/>
        <meta content="@JSConfUS" name="twitter:site"/>
      </Helmet>
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
  url: string.isRequired,
  visible: bool.isRequired
}

export default SpeakerPage
