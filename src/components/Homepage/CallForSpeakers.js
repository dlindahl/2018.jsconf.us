import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'
import { string } from 'prop-types'
// import LinkButton from '../LinkButton'

const CallForSpeakers = ({ className }) => (
  <GridRow className={className} title="Call for Speakers">
    <p>We will be opening our Call for Proposals soon!</p>
    <p>
      JSConf has been the launchpad for many of the greatest things that we now
      take for granted on the web.{' '}
      <Link to="/call-for-proposals/">Read more</Link> about our CFP process
      that is designed to shine the spotlight on the latest ideas and future
      leaders of the JavaScript world.
    </p>
    <p>
      Stay tuned to learn how to submit your proposal!
      {/* <LinkButton href="/TODO/">Submit Your Proposal</LinkButton> */}
    </p>
  </GridRow>
)

CallForSpeakers.propTypes = {
  className: string
}

export default CallForSpeakers
