import React from 'react'
import { string } from 'prop-types'

import './Testimonial.css'

const Testimonial = ({ name, position, quote }) => (
  <blockquote className="Testimonial">
    <span className="Testimonial-Quote">&ldquo;{quote}&rdquo;</span>
    <cite className="Testimonial-Cite">
      <span className="Testimonial-CiteName">{name}</span>
      <span className="Testimonial-CitePosition">{position}</span>
    </cite>
  </blockquote>
)

Testimonial.propTypes = {
  name: string.isRequired,
  position: string,
  quote: string.isRequired
}

export default Testimonial
