import { arrayOf, func, object, oneOf, number, string } from 'prop-types'
import React, { cloneElement } from 'react'

import './GridLayout.css'

function wrap (component) {
  if (!component) {
    return null
  }
  return cloneElement(component, {
    className: `GridLayout-Item ${component.props.className || ''}`
  })
}

const GridLayout = ({ className, items, layout, renderItem, maxCols }) => {
  if (!items.length) {
    return null
  }
  if (!maxCols) {
    if (items.length !== 3 && items.length <= 4) {
      maxCols = items.length
    }
  }
  if (layout === 'flex' && maxCols) {
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
  layout: oneOf(['1', '1/211/2', '1/11', '12', '11+', '111', 'flex']),
  maxCols: number,
  renderItem: func.isRequired
}

export default GridLayout
