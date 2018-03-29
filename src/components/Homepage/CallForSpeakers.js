import { bool, string } from 'prop-types'
import GridRow from '../GridRow'
import Link from 'gatsby-link'
import LinkButton from '../LinkButton'
import React from 'react'

const CallForSpeakers = ({ className, feature }) => (
  <GridRow className={className} feature={feature} title="Call for Speakers">
    <p>
      JSConf has been the launchpad for many of the greatest things that we now
      take for granted on the web.{' '}
      <Link to="/call-for-speakers/">Read more</Link> about our CFP process that
      is designed to shine the spotlight on the latest ideas and future leaders
      of the JavaScript world.
    </p>
    <p className="Page-CallToAction">
      Our Call for Speakers is now open through May 1st, 2018!<br/>
      <br/>
      <LinkButton href="http://bit.ly/JSConfUS2018CFP">
        Submit Your Proposal
      </LinkButton>
    </p>
  </GridRow>
)

CallForSpeakers.propTypes = {
  className: string,
  feature: bool
}

export default CallForSpeakers
