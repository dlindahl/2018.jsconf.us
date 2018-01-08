import { any, bool, string } from 'prop-types'
import classnames from 'classnames'

import React from 'react'

import './GridRow.css'

const GridRow = ({ children, full, mediaLeft, mediaRight, title }) => {
  const mediaCls = classnames({
    'GridRow-Media': true,
    'GridRow-MediaLeft': mediaLeft,
    'GridRow-MediaRight': mediaRight
  })
  const contentCls = classnames({
    'GridRow-Content': true,
    'GridRow-FullWidth': full && !(mediaLeft || mediaRight),
    'GridRow-OffsetLeft': mediaRight,
    'GridRow-OffsetRight': mediaLeft
  })
  let header = null
  if (title) {
    header = <header className="GridRow-Header">{title}</header>
  }
  return (
    <section className="GridRow">
      <aside className={mediaCls}>media?</aside>
      <main className={contentCls}>
        {header}
        {children}
      </main>
    </section>
  )
}

GridRow.defaultProps = {
  full: false
}

GridRow.propTypes = {
  children: any,
  full: bool,
  mediaLeft: bool,
  mediaRight: bool,
  title: string
}

export default GridRow
