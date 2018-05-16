import { bool, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'
import { slugify } from '../../util/string'
import './ContentBlockTitle.css'

const ContentBlockTitle = ({ children, feature }) => {
  if (!children) {
    return null
  }
  const cls = classnames({
    ContentBlockTitle: true,
    'ContentBlockTitle--feature': feature
  })
  return (
    <h2 className={cls} id={slugify(children)}>
      {children}
    </h2>
  )
}

ContentBlockTitle.propTypes = {
  children: string,
  feature: bool
}

export default ContentBlockTitle
