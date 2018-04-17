import { arrayOf, bool, oneOf, shape, string } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import GridRow from '../GridRow'
import Page from '../Page'
import React from 'react'
import SponsorsListFeature from './SponsorsListFeature'

const Sponsors = ({ data }) => (
  <DefaultLayout description="Our Sponsors" title="Our Sponsors">
    <Page title="Our Sponsors">
      <p>
        At JSConf US 2018, the best JS programmers will gather for a two track,
        three day conference that will showcase the future of JavaScript and we
        want you there as a sponsor!
      </p>
      <p>
        Our sponsorships are are little bit different than what you may be
        accustomed to. There are no booths, no exhibit halls, and we encourage
        you to send your best technical talent. We focus the sponsorships on
        creating amazing shared experiences which have a far broader and longer
        lasting effects for you and our attendees.
      </p>
      <p>
        Whether your goal is brand exposure, recruiting, product launch, or
        something else, we have a sponsorship opportunity for you.
      </p>
      <p>
        Interested in sponsoring?{' '}
        <a
          href="http://bit.ly/JSConfUS2018sponsorship"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact us for details!
        </a>
      </p>
    </Page>
    <SponsorsListFeature data={data}/>
  </DefaultLayout>
)

Sponsors.propTypes = {
  data: arrayOf(
    shape({
      fields: shape({
        slug: string.isRequired
      }).isRequired,
      frontmatter: shape({
        level: oneOf(['community', 'diversity', 'gold', 'platinum', 'silver'])
          .isRequired,
        logo: string,
        title: string.isRequired,
        visible: bool.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
}

export default Sponsors
