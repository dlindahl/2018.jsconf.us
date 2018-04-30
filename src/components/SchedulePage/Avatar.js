import './Avatar.css'
import React from 'react'
import { string } from 'prop-types'

const Avatar = ({ src }) => (
  <picture className="Avatar">
    <img alt="" className="Avatar-Img" src={src}/>
  </picture>
)

Avatar.propTypes = {
  src: string.isRequired
}

export default Avatar
