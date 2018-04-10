import CallForSpeakers from './CallForSpeakers'
import CodeOfConduct from './CodeOfConduct'
import DefaultLayout from '../../layouts/DefaultLayout'
import Hero from '../Hero'
import React from 'react'
import OpportunityScholarship from './OpportunityScholarship'
import SponsorshipPromo from './SponsorshipPromo'
import TicketReleasePromo from './TicketReleasePromo'

import './Homepage.css'

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
    <SponsorshipPromo className="Homepage-Block"/>
    <OpportunityScholarship className="Homepage-Block" feature/>
    <CallForSpeakers className="Homepage-Block"/>
    <TicketReleasePromo className="Homepage-Block"/>
    <CodeOfConduct className="Homepage-Block"/>
  </DefaultLayout>
)

export default Homepage
