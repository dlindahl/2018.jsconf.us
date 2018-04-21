import { bool, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import Sponsor from './Sponsor'

const SponsorPage = ({
  component,
  html,
  level,
  logo,
  name,
  scholarship,
  url,
  visible
}) => {
  if (!visible) {
    return null // TODO 404? Redirect?
  }
  return (
    <DefaultLayout description={component} title={name}>
      <Sponsor
        component={component}
        html={html}
        level={level}
        logo={logo}
        name={name}
        scholarship={scholarship}
        url={url}
      />
    </DefaultLayout>
  )
}

SponsorPage.propTypes = {
  component: string,
  html: string.isRequired,
  level: string.isRequired,
  logo: string,
  name: string.isRequired,
  scholarship: bool.isRequired,
  url: string.isRequired,
  visible: bool.isRequired
}

export default SponsorPage
