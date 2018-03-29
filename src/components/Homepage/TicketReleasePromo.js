import { bool, string } from 'prop-types'
import GridRow from '../GridRow'
import Link from 'gatsby-link'
import LinkButton from '../LinkButton'
import React from 'react'

const TicketReleasePromo = ({ className, feature }) => (
  <GridRow className={className} feature={feature} title="Get Your Ticket!">
    <p className="Page-CallToAction">
      Early Bird tickets on sale April 3rd at 1pm ET / 10am PT!
    </p>
    <p>
      Over the last ten years, JSConf US has pushed the language outside of its
      comfort zone, the web browser, and into the forefront of{' '}
      <a href="http://nodecopter.com/">drones</a>,{' '}
      <a href="http://nodebots.io/">robots</a>, and{' '}
      <a href="http://www.youtube.com/watch?v=O83-d0t0Ldw">video games</a>. Two
      days, two tracks, 40 speakers. Which{' '}
      <a href="https://www.youtube.com/watch?v=GW0rj4sNH2w">
        idea will change the world
      </a>?
    </p>
    <p>
      Spend the middle day hacking on JS-powered robots, socialize out on the
      golf course or by the pool, or try your hand at surfing while debating
      semicolons! Our special{' '}
      <Link to="/schedule/">"Choose Your Own Adventure"</Link> day is a great
      way to learn something new!
    </p>
    <p>
      <LinkButton href="http://bit.ly/JSConfUS2018Tickets">
        Register now before it sells out
      </LinkButton>
    </p>
  </GridRow>
)

TicketReleasePromo.propTypes = {
  className: string,
  feature: bool
}

export default TicketReleasePromo
