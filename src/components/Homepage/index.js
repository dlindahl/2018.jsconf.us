import CallForSpeakers from './CallForSpeakers'
import CodeOfConduct from './CodeOfConduct'
import DefaultLayout from '../../layouts/DefaultLayout'
import Hero from '../Hero'
import React from 'react'
import OpportunityScholarship from './OpportunityScholarship'
import SponsorshipPromo from './SponsorshipPromo'
import TicketReleasePromo from './TicketReleasePromo'
import WeAreBackPromo from './WeAreBackPromo'

const Homepage = (props) => (
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
    <CallForSpeakers/>
    <TicketReleasePromo/>
    <OpportunityScholarship/>
    <CodeOfConduct/>
  </DefaultLayout>
)

export default Homepage
