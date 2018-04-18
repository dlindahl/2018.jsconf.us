import React from 'react'
import { string } from 'prop-types'

import './PhotoCell.css'

const PhotoCell = ({ alt, caption, src }) => (
  <figure className="PhotoCell">
    <picture>
      <img alt={alt} className="PhotoCell-Img" src={src}/>
    </picture>
    <figcaption className="PhotoCell-Caption">{caption}</figcaption>
  </figure>
)

PhotoCell.propTypes = {
  alt: string.isRequired,
  caption: string,
  src: string.isRequired
}

export default PhotoCell
