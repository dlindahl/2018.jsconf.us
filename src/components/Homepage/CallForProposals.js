import React from 'react'
import GridRow from '../GridRow'
import Link from 'gatsby-link'
import LinkButton from '../LinkButton'

const CallForProposals = () => (
  <GridRow title="Call for Proposals">
    <p>We will be opening our Call for Proposals soon!</p>
    <p>
      JSConf has been the launchpad for many of the greatest things that we now
      take for granted on the web.{' '}
      <Link to="/call-for-proposals/">Read more</Link> about our CFP process
      that is designed to shine the spotlight on the latest ideas and future
      leaders of the JavaScript world.
    </p>
    <p>
      <LinkButton href="/TODO/">Submit Your Proposal</LinkButton>
    </p>
  </GridRow>
)

export default CallForProposals
