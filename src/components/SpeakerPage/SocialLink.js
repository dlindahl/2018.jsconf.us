import React from 'react'
import { oneOf, string } from 'prop-types'
import './SocialLink.css'

const URLS = {
  github: 'https://github.com',
  glitch: 'https://glitch.com',
  twitter: 'https://twitter.com'
}

const SocialLink = ({ href, type }) => {
  if (!href) {
    return null
  }
  const label = href
  if (type !== 'web') {
    href = `${URLS[type]}/${href}`
  }
  return (
    <li className="SocialLink" data-type={type}>
      <a href={href}>{label}</a>
    </li>
  )
}

SocialLink.propTypes = {
  href: string,
  type: oneOf(['github', 'glitch', 'twitter', 'web'])
}

export default SocialLink
