import ContentBlock from '../ContentBlock'
import React from 'react'
import { bool, string } from 'prop-types'

import './Sponsor.css'

const Sponsor = ({ component, html, level, logo, name, scholarship, url }) => {
  let focus = null
  if (scholarship) {
    focus = 'Opportunty Scholarship Supporter'
  }
  return (
    <ContentBlock
      align="left"
      className="Sponsor"
      feature
      focus={focus}
      title={component}
    >
      <figure className="Sponsor-Logo">
        <a
          aria-label={`Go to the ${name} website`}
          href={url}
          title={`Go to the ${name} website`}
        >
          <img alt="" key={logo} src={logo}/>
        </a>
      </figure>
      <div
        className="Sponsor-Content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="Sponsor-Link">
        For more information, check out the{' '}
        <a href={url}>official {name} website</a>
      </p>
    </ContentBlock>
  )
}

Sponsor.propTypes = {
  component: string,
  html: string.isRequired,
  level: string.isRequired,
  logo: string,
  name: string.isRequired,
  scholarship: bool.isRequired,
  url: string.isRequired
}

export default Sponsor
