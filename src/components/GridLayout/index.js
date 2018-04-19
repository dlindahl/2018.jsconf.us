import { arrayOf, func, object, string } from 'prop-types'
import React from 'react'

import './GridLayout.css'

const GridLayout = ({ className, items, layout, renderItem }) => {
  if (!items.length) {
    return null
  }
  return (
    <div className={`GridLayout ${className}`} data-layout={layout}>
      {items.map(renderItem)}
    </div>
  )
}

GridLayout.defaultProps = {
  className: '',
  items: [],
  layout: 'flex',
  // eslint-disable-next-line no-empty-function
  renderItem () {}
}

GridLayout.propTypes = {
  className: string,
  items: arrayOf(object),
  layout: string,
  renderItem: func.isRequired
}

export default GridLayout
