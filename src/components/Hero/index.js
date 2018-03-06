import { node } from 'prop-types'
import React from 'react'

import './Hero.css'

const Hero = ({ title, subtitle }) => (
  <div className="Hero">
    <div className="Hero-Background">
      <div className="Hero-BackgroungGradient"/>
      <div className="Hero-BackgroundImage"/>
    </div>
    <article className="Hero-Body">
      <div className="Hero-CallToAction">
        <div className="Hero-CallToActionWrapper">
          <div className="Hero-CallToActionOverlay"/>
          <div className="Hero-CallToActionContent">
            <h1 className="Hero-CallToActionLede">{title}</h1>
            <h2 className="Hero-CallToActionText">{subtitle}</h2>
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
