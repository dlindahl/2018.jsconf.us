import { absoluteUrl } from '../../util/urlFilters'
import { arrayOf, bool, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import Helmet from 'react-helmet'
import React from 'react'
import Speaker from './Speaker'
import { slugify, toSentence } from '../../util/string'

const SpeakerPage = ({ description, html, title, url, speakers, visible }) => {
  if (!visible) {
    return null // TODO 404? Redirect?
  }
  const names = toSentence(speakers.map((speaker) => speaker.name))
  const metaTitle = `${names}: ${title}`
  const card = absoluteUrl(`/img/speakers/${slugify(names)}-card.png?3`)
  const img = absoluteUrl(`/img/speakers/${slugify(names)}-plate.png`)
  return (
    <DefaultLayout description={title} title={names}>
      <Helmet title={metaTitle}>
        <meta content={description} name="description"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content={description} property="twitter:description"/>
        <meta content={metaTitle} property="twitter:title"/>
        <meta content={card} property="twitter:image"/>
        <meta content="@JSConfUS" name="twitter:site"/>
        <meta content={metaTitle} property="og:title"/>
        <meta content={description} property="og:description"/>
        <meta content={img} property="og:image"/>
      </Helmet>
      <Speaker html={html} speakers={speakers} title={title}/>
    </DefaultLayout>
  )
}

SpeakerPage.propTypes = {
  description: string.isRequired,
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
