import LinkButton from '../LinkButton'
import { node } from 'prop-types'
import React from 'react'

import './Hero.css'

const Hero = ({ title, subtitle }) => (
  <div className="Hero">
    <div className="Hero-Background">
      <div className="Hero-BackgroundImage"/>
    </div>
    <article className="Hero-Container">
      <div className="Hero-Body">
        <div className="Hero-BodyWrapper">
          <div className="Hero-BodyOverlay"/>
          <div className="Hero-BodyContent">
            <h1 className="Hero-Lede">{title}</h1>
            <h2 className="Hero-Text">{subtitle}</h2>
          </div>
          <div className="Hero-BodyFooter">
            <LinkButton href="https://ti.to/jsconf-us/jsconf-us-2018" primary>
              Buy Tickets
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  </div>
)

Hero.propTypes = {
  subtitle: node,
  title: node.isRequired
}

export default Hero
