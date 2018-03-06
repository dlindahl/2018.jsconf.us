import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'
import { string } from 'prop-types'

const SponsorshipPromo = ({ className }) => (
  <GridRow className={className} title="Sponsorships">
    <p>
      We are currently offering sponsorship packages for JSConf US 2018. We’re
      looking forward to working with{' '}
      <Link to="/sponsors/">all of our great sponsors</Link> to find the best
      way to connect each of you with our attendees in unique and meaningful
      ways.
    </p>
    <p>
      <a href="http://bit.ly/JSConfUS2018sponsorship">Contact us</a> to learn
      more about our available packages!
    </p>
  </GridRow>
)

SponsorshipPromo.propTypes = {
  className: string
}
export default SponsorshipPromo
