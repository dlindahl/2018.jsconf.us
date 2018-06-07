import CodeOfConduct from './CodeOfConduct'
import DefaultLayout from '../../layouts/DefaultLayout'
import Hero from '../Hero'
import React from 'react'
import OurSpeakers from './OurSpeakers'
import { object, shape } from 'prop-types'
import SponsorshipPromo from './SponsorshipPromo'
import TicketReleasePromo from './TicketReleasePromo'
import WeAreBackPromo from './WeAreBackPromo'

const Homepage = ({ data: { speakers } }) => (
  <DefaultLayout
    hero={
      <Hero
        subtitle={
          <span>
            August 21st - August 23rd<br/>Carlsbad, California
          </span>
        }
        title="JSConf US 2018"
      />
    }
  >
    <WeAreBackPromo feature/>
    <SponsorshipPromo/>
    <OurSpeakers speakers={speakers}/>
    <TicketReleasePromo/>
    <CodeOfConduct/>
  </DefaultLayout>
)

export default Homepage

Homepage.propTypes = {
  data: shape({
    speakers: object
  }).isRequired
}
