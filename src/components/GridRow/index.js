import { any, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'
import WideContent from './WideContent'
import NarrowContent from './NarrowContent'

import './GridRow.css'

const GridRow = ({ children, className, id }) => {
  const rootCls = classnames({
    GridRow: true,
    [className]: className
  })
  return (
    <section className={rootCls} id={id}>
      {children}
    </section>
  )
}

GridRow.propTypes = {
  children: any,
  className: string,
  id: string
}

GridRow.NarrowContent = NarrowContent
GridRow.WideContent = WideContent

export default GridRow
