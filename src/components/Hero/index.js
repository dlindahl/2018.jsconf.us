import { any, node } from 'prop-types'
import React from 'react'

import './Hero.css'

const Hero = ({ children, lede, title, ...props }) => (
  <aside className="Hero">
    <div className="Hero-Background"/>
    <header>
      <h1 className="Hero-Title">{title}</h1>
    </header>
    <section className="Hero-CallToAction">
      <div className="Hero-CallToActionWrapper">
        <div className="Hero-CallToActionOverlay"/>
        <div className="Hero-CallToActionContent">
          <div className="Hero-CallToActionBody">
            <div className="Hero-CallToActionLede">{lede}</div>
            <div className="Hero-CallToActionText">{children}</div>
          </div>
        </div>
      </div>
    </section>
  </aside>
)

Hero.propTypes = {
  children: any,
  lede: node,
  title: node
}

export default Hero
