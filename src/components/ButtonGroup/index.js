import { any } from 'prop-types'
import React from 'react'

import './ButtonGroup.css'

const ButtonGroup = ({ children }) => {
  if (!children) {
    return null
  }
  return (
    <div className="ButtonGroup">
      <div className="ButtonGroup-Wrapper">
        <div className="ButtonGroup-Content">{children}</div>
      </div>
    </div>
  )
}

ButtonGroup.propTypes = {
  children: any
}

export default ButtonGroup
