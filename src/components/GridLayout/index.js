import { arrayOf, func, object, string } from 'prop-types'
import React from 'react'

import './GridLayout.css'

const GridLayout = ({ items, layout, renderItem }) => {
  if (!items.length) {
    return null
  }
  return (
    <div className="GridLayout" data-layout={layout}>
      {items.map(renderItem)}
    </div>
  )
}

GridLayout.defaultProps = {
  items: [],
  layout: '11',
  // eslint-disable-next-line no-empty-function
  renderItem () {}
}

GridLayout.propTypes = {
  items: arrayOf(object),
  layout: string,
  renderItem: func.isRequired
}

export default GridLayout
