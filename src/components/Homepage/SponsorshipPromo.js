import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'
import { string } from 'prop-types'

const SponsorshipPromo = ({ className, ...props }) => {
  const actions = [
    <LinkButton href="http://bit.ly/JSConfUS2018sponsorship" key={0} primary>
      Learn More
    </LinkButton>,
    <LinkButton href="/sponsors/" key={1}>
      Our Sponsors
    </LinkButton>
  ]
  return (
    <ContentBlock actions={actions} title="Sponsorships" {...props}>
      <p>
        We are currently offering sponsorship packages for JSConf US 2018. Let's
        create a unique and meaningful experience together!
      </p>
    </ContentBlock>
  )
}

SponsorshipPromo.propTypes = {
  className: string
}
export default SponsorshipPromo
