import { any, bool } from 'prop-types'
import classnames from 'classnames'
import React from 'react'

import './ContentBlockTitle.css'

const ContentBlockTitle = ({ children, feature }) => {
  if (!children) {
    return null
  }
  const cls = classnames({
    ContentBlockTitle: true,
    'ContentBlockTitle--feature': feature
  })
  return <h2 className={cls}>{children}</h2>
}

ContentBlockTitle.propTypes = {
  children: any,
  feature: bool
}

export default ContentBlockTitle
