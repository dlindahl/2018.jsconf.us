import { any, bool, string } from 'prop-types'
import classnames from 'classnames'

import React from 'react'

import './GridRow.css'

const GridRow = ({ children, className, feature, id, title }) => {
  const rootCls = classnames({
    GridRow: true,
    'GridRow--feature': feature,
    [className]: className
  })
  let header = null

  if (title) {
    header = <h1 className="GridRow-Header">{title}</h1>
  }
  return (
    <section className={rootCls} id={id}>
      <main className="GridRow-Content">
        {header}
        {children}
      </main>
    </section>
  )
}

GridRow.propTypes = {
  children: any,
  className: string,
  feature: bool,
  id: string,
  title: string
}

export default GridRow
