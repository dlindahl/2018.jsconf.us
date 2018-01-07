import DefaultLayout from '../layouts/DefaultLayout'
import Hero from '../components/Hero'
import React from 'react'

import './index.css'

const IndexPage = (props) => (
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
        August 8th - August 10th<br/>Location TBA
      </Hero>
    }
  >
    <p>Homepage Content</p>
  </DefaultLayout>
)

export default IndexPage
