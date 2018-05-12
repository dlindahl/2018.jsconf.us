import { arrayOf, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import SocialLinks from './SocialLinks'
import './Speaker.css'

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
function socialize (speaker) {
  return <SocialLinks key={speaker.name} speaker={speaker}/>
}

const Speaker = ({ html, title, speakers }) => (
  <ContentBlock align="left" className="Sponsor" feature title={title}>
    <figure className="Speaker-Avatar">{speakers.map(avatarize)}</figure>
    <div
      className="Speaker-Content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <div className="Speaker-Links">{speakers.map(socialize)}</div>
  </ContentBlock>
)

Speaker.propTypes = {
  html: string.isRequired,
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
  title: string.isRequired
}

export default Speaker
