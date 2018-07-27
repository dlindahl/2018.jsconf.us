import './Avatar.css'
import { bool, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'

const Avatar = ({ noClip, src }) => {
  const cls = classnames({
    Avatar: true,
    'Avatar--noclip': noClip
  })
  return (
    <picture className={cls}>
      <img alt="" className="Avatar-Img" src={src}/>
    </picture>
  )
}

Avatar.defaultProps = {
  noClip: false
}

Avatar.propTypes = {
  noClip: bool,
  src: string.isRequired
}

export default Avatar
