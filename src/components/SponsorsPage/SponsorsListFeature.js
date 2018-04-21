import { array } from 'prop-types'
import { groupBy, pluck } from '../../util/array'
import React from 'react'
import SponsorsList from './SponsorsList'

const SponsorsListFeature = ({ data }) => {
  if (data && data.length === 0) {
    return null
  }
  const items = groupBy(data, 'level')
  items.scholarship = items.scholarship || []
  items.scholarship = items.scholarship.concat(pluck(data, 'scholarship', true))
  return (
    <div>
      <SponsorsList items={items.platinum} title="Platinum Sponsors">
        Our social activities are possible due to the support from our
        Platinum-level sponsors!
      </SponsorsList>
      <SponsorsList items={items.gold} title="Gold Sponsors">
        Not only would we not have any stages for our presenters, but our famous
        "Choose Your Own Adventure Day" would not be a success without our
        Gold-level sponsors!
      </SponsorsList>
      <SponsorsList items={items.silver} title="Silver Sponsors">
        These sponsors ensure that everyone has a way to unwind after a long day
        of amazing talks and amazing people!
      </SponsorsList>
      <SponsorsList items={items.startup} title="Startup Sponsors">
        The support from our Startup Sponsors is much appreciated!
      </SponsorsList>
      <SponsorsList items={items.conference} title="Conference Supporters">
        A huge thank you to our Conference Support Sponsors for helping to make
        JSConf US a success!
      </SponsorsList>
      <SponsorsList items={items.scholarship} title="Scholarship Sponsors">
        Our amazingly generous Scholarship Sponsors are doing everything they
        can to ensure that our community continues to grow into a diversse,
        inclusive, and welcoming environment!
      </SponsorsList>
    </div>
  )
}

SponsorsListFeature.propTypes = {
  data: array
}

export default SponsorsListFeature
