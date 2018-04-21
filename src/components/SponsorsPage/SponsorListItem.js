import React from 'react'
import { string } from 'prop-types'

import './SponsorListItem.css'

const SponsorListItem = ({ className, href, level, logo, name }) => {
  let content
  if (logo) {
    content = (
      <img alt={`${name} logo`} className="SponsorListItem-Img" src={logo}/>
    )
  } else {
    content = <span className="SponsorListItem-Name">{name}</span>
  }
  return (
    <a
      aria-label={`${name} - A ${level}-level sponsor`}
      className={`SponsorsListItem ${className}`}
      href={href}
      title={`${name} - A ${level}-level sponsor`}
    >
      {content}
    </a>
  )
}

SponsorListItem.propTypes = {
  className: string,
  href: string.isRequired,
  level: string.isRequired,
  logo: string,
  name: string.isRequired
}

export default SponsorListItem
