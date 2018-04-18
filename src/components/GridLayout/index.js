import { arrayOf, shape, string } from 'prop-types'
import React from 'react'

import './GridLayout.css'

function componentize (photo) {
  return (
    <figure className="GridLayout-Cell" key={photo.src}>
      <picture>
        <img alt={photo.alt} className="GridLayout-Img" src={photo.src}/>
      </picture>
      <figcaption className="GridLayout-Caption">{photo.caption}</figcaption>
    </figure>
  )
}

function sum (agg, num) {
  return agg + parseInt(num, 10)
}

const GridLayout = ({ images, layout }) => {
  if (!images.length) {
    return null
  }
  const count = layout.split('').reduce(sum, 0)
  return (
    <div className="GridLayout" data-layout={layout}>
      {images.slice(0, count).map(componentize)}
    </div>
  )
}

GridLayout.defaultProps = {
  images: []
}

GridLayout.propTypes = {
  images: arrayOf(
    shape({
      alt: string.isRequired,
      caption: string,
      src: string.isRequired
    })
  ),
  layout: string
}

export default GridLayout
