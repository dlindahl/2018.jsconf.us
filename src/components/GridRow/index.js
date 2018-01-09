import { any, bool, oneOf, string } from 'prop-types'
import classnames from 'classnames'

import React from 'react'

import './GridRow.css'

const GridRow = ({
  children,
  feature,
  flourish,
  full,
  mediaAlign,
  mediaCredit,
  mediaSrc,
  title
}) => {
  const rootCls = classnames({
    GridRow: true,
    'GridRow--feature': feature
  })
  const mediaCls = classnames({
    'GridRow-Media': true,
    'GridRow-MediaLeft': mediaAlign === 'left',
    'GridRow-MediaRight': mediaAlign === 'right'
  })
  const mediaClsContainer = classnames({
    'GridRow-MediaContainer': true,
    [`GridRow-MediaContainer--${flourish}`]: flourish
  })
  const contentCls = classnames({
    'GridRow-Content': true,
    'GridRow-FullWidth': full && !mediaAlign,
    'GridRow-OffsetLeft': mediaAlign === 'right',
    'GridRow-OffsetRight': mediaAlign === 'left'
  })
  let header = null
  let media = null
  if (mediaSrc) {
    media = (
      <aside className={mediaCls}>
        <figure className={mediaClsContainer}>
          <img alt="" className="GridRow-MediaImg" src={mediaSrc}/>
          <caption className="GridRow-MediaCaption">{mediaCredit}</caption>
        </figure>
      </aside>
    )
  }
  if (title) {
    header = <header className="GridRow-Header">{title}</header>
  }
  return (
    <section className={rootCls}>
      {media}
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
  feature: bool,
  flourish: oneOf(['triangle']),
  full: bool,
  mediaAlign: oneOf(['left', 'right']),
  mediaCredit: string,
  mediaSrc: bool,
  title: string
}

export default GridRow
