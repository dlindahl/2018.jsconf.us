import { any, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'
import MediumContent from './MediumContent'
import NarrowContent from './NarrowContent'
import WideContent from './WideContent'

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

GridRow.MediumContent = MediumContent
GridRow.NarrowContent = NarrowContent
GridRow.WideContent = WideContent

export default GridRow
