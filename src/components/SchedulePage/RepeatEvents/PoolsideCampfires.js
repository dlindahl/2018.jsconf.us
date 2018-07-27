import React from 'react'
import ScheduleItem from '../ScheduleItem'

const SPONSORS = [
  {
    logo: '/img/sponsors/logos/shopify_glyph.svg',
    name: 'Shopify'
  }
]

const PoolsideCampfires = (props) => (
  <ScheduleItem
    {...props}
    description="Whether you just need a break from the dinner or are looking for deep conversation, stop by the evening campfires located on the upper-level of the Edge Pool. Grab a spot around the natural gas firepits and enjoy some enlightened conversation. Make plans with your fellow attendees for the next day, or plan your space mission to the moon and back!"
    href="/sponsors/shopify/"
    sponsors={SPONSORS}
    title="Starry Night Poolside Campfires"
  />
)

export default PoolsideCampfires
