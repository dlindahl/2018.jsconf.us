import React from 'react'
import { string } from 'prop-types'

import './PhotoCell.css'

const PhotoCell = ({ alt, caption, className, src }) => (
  <figure className={`PhotoCell ${className}`}>
    <picture>
      <img alt={alt} className="PhotoCell-Img" src={src}/>
    </picture>
    <figcaption className="PhotoCell-Caption">{caption}</figcaption>
  </figure>
)

PhotoCell.defaultProps = {
  className: ''
}

PhotoCell.propTypes = {
  alt: string.isRequired,
  caption: string,
  className: string,
  src: string.isRequired
}

export default PhotoCell
