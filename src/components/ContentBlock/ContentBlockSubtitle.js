import { any } from 'prop-types'
import React from 'react'

import './ContentBlockSubtitle.css'

const ContentBlockSubitle = ({ children }) => {
  if (!children) {
    return null
  }
  return <h3 className="ContentBlockTitle">{children}</h3>
}

ContentBlockSubitle.propTypes = {
  children: any
}

export default ContentBlockSubitle
