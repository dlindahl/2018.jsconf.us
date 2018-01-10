import CallForSpeakers from './CallForSpeakers'
import CodeOfConduct from './CodeOfConduct'
import DefaultLayout from '../../layouts/DefaultLayout'
import DiversityInclusion from './DiversityInclusion'
import Hero from '../Hero'
import React from 'react'

import './Homepage.css'

const Homepage = (props) => (
  <DefaultLayout
    hero={
      <Hero
        lede="JSConf US 2018"
        title={
          <span>
            We're<br/>Back
          </span>
        }
      >
        August 18th - August 20th<br/>Location TBA
      </Hero>
    }
  >
    <CallForSpeakers className="Homepage-Block"/>
    <DiversityInclusion className="Homepage-Block"/>
    <CodeOfConduct className="Homepage-Block"/>
  </DefaultLayout>
)

export default Homepage
