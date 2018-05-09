import { bool, string } from 'prop-types'
import classnames from 'classnames'
import ConditionalLink from '../ConditionalLink'
import React from 'react'
import './PhotoCell.css'

const PhotoCell = ({ alt, caption, className, isThumbnail, src, source }) => {
  const cls = classnames({
    PhotoCell: true,
    'PhotoCell--thumbnail': isThumbnail,
    [className]: className
  })
  const iconCls = classnames({
    'PhotoCell-LinkIcon': true,
    'PhotoCell-LinkIcon--visible': isThumbnail
  })
  return (
    <figure className={cls}>
      <ConditionalLink
        className="PhotoCell-Link"
        href={source}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={iconCls}/>
        <picture>
          <img alt={alt} className="PhotoCell-Img" src={src}/>
        </picture>
      </ConditionalLink>
      <figcaption className="PhotoCell-Caption">{caption}</figcaption>
    </figure>
  )
}

PhotoCell.defaultProps = {
  className: '',
  isThumbnail: false
}

PhotoCell.propTypes = {
  alt: string.isRequired,
  caption: string,
  className: string,
  isThumbnail: bool,
  source: string,
  src: string.isRequired
}

export default PhotoCell
