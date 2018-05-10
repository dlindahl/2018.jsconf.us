import { arrayOf, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import './Speaker.css'
import { pluralize, toSentence } from '../../util/string'

// eslint-disable-next-line react/prop-types
function avatarize ({ avatar, name, url }) {
  return (
    <a
      aria-label={`Go to the ${name} website`}
      href={url}
      key={avatar}
      title={`Go to the ${name} website`}
    >
      <img alt="" className="Speaker-AvatarImg" src={avatar}/>
    </a>
  )
}

// eslint-disable-next-line react/prop-types
function linkize ({ name, url }) {
  return (
    <a href={url} key={url}>
      {name}
    </a>
  )
}

const Speaker = ({ html, title, speakers }) => (
  <ContentBlock align="left" className="Sponsor" feature title={title}>
    <figure className="Speaker-Avatar">{speakers.map(avatarize)}</figure>
    <div
      className="Speaker-Content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <p className="Sponsor-Link">
      For more information, check out the {toSentence(speakers.map(linkize))}{' '}
      {pluralize(speakers, 'website', 'websites')}
    </p>
  </ContentBlock>
)

Speaker.propTypes = {
  html: string.isRequired,
  speakers: arrayOf(
    shape({
      avatar: string,
      name: string,
      url: string
    })
  ),
  title: string.isRequired
}

export default Speaker
