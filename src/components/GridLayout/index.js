import { arrayOf, func, object, oneOf, string } from 'prop-types'
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
  layout: oneOf(['1', '1/211/2', '1/11', '12', '11+', '111', 'flex']),
  renderItem: func.isRequired
}

export default GridLayout
