import { arrayOf, func, object, oneOf, string } from 'prop-types'
import React, { cloneElement } from 'react'

import './GridLayout.css'

function wrap (component) {
  return cloneElement(component, { className: 'GridLayout-Item' })
}

const GridLayout = ({ className, items, layout, renderItem }) => {
  if (!items.length) {
    return null
  }
  let maxCols = 3
  if (items.length !== 3 && items.length <= 4) {
    maxCols = items.length
  }
  if (layout === 'flex') {
    layout = `${layout}-${maxCols}`
  }
  return (
    <div className={`GridLayout ${className}`} data-layout={layout}>
      {items.map(renderItem).map(wrap)}
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
  layout: oneOf(['111', 'flex']),
  renderItem: func.isRequired
}

export default GridLayout
