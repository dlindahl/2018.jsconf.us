import { string } from 'prop-types'
import React from 'react'

const ContentBlockFocus = ({ children }) => {
  if (!children) {
    return null
  }
  return (
    <p>
      <strong>{children}</strong>
    </p>
  )
}

ContentBlockFocus.propTypes = {
  children: string
}

export default ContentBlockFocus
