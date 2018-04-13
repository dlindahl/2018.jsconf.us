import CallForSpeakers from './CallForSpeakers'
import CodeOfConduct from './CodeOfConduct'
import DefaultLayout from '../../layouts/DefaultLayout'
import Hero from '../Hero'
import React from 'react'
import OpportunityScholarship from './OpportunityScholarship'
import SponsorshipPromo from './SponsorshipPromo'
import TicketReleasePromo from './TicketReleasePromo'

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
    <SponsorshipPromo feature/>
    <OpportunityScholarship/>
    <CallForSpeakers/>
    <TicketReleasePromo/>
    <CodeOfConduct/>
  </DefaultLayout>
)

export default Homepage
