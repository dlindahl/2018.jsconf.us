import React from 'react'
import { shape, string } from 'prop-types'
import SocialLink from './SocialLink'
import './SocialLinks.css'

const SocialLinks = ({ speaker }) => (
  <ul className="SocialLinks">
    <SocialLink href={speaker.twitter} type="twitter"/>
    <SocialLink href={speaker.github} type="github"/>
    <SocialLink href={speaker.glitch} type="glitch"/>
    <SocialLink href={speaker.url} type="web"/>
  </ul>
)

SocialLinks.propTypes = {
  speaker: shape({
    github: string,
    glitch: string,
    twitter: string,
    url: string
  })
}

export default SocialLinks
