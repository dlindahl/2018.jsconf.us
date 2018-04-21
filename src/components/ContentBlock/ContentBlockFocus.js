import { string } from 'prop-types'
import React from 'react'

import './ContentBlockFocus.css'

const ContentBlockFocus = ({ children }) => {
  if (!children) {
    return null
  }
  return (
    <p className="ContentBlockFocus">
      <strong>{children}</strong>
    </p>
  )
}

ContentBlockFocus.propTypes = {
  children: string
}

export default ContentBlockFocus
