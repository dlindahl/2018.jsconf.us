import { any, bool, oneOf, string } from 'prop-types'
import classnames from 'classnames'

import React from 'react'

import './GridRow.css'

const GridRow = ({
  children,
  className,
  feature,
  flourish,
  full,
  id,
  mediaAlign,
  mediaCredit,
  mediaSrc,
  title
}) => {
  const rootCls = classnames({
    GridRow: true,
    'GridRow--feature': feature,
    [className]: className
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
          <figcaption className="GridRow-MediaCaption">
            {mediaCredit}
          </figcaption>
        </figure>
      </aside>
    )
  }
  if (title) {
    header = <header className="GridRow-Header">{title}</header>
  }
  return (
    <section className={rootCls} id={id}>
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
  className: string,
  feature: bool,
  flourish: oneOf(['triangle']),
  full: bool,
  id: string,
  mediaAlign: oneOf(['left', 'right']),
  mediaCredit: string,
  mediaSrc: bool,
  title: string
}

export default GridRow
