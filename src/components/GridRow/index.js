import { any, bool, number, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'

import './GridRow.css'

const GridRow = ({
  children,
  className,
  feature,
  id,
  level,
  subtitle,
  title
}) => {
  const rootCls = classnames({
    GridRow: true,
    'GridRow--feature': feature,
    [className]: className
  })
  let header = null
  let subheader = null

  if (title) {
    const HeadingTag = `h${level}`
    header = <HeadingTag className="GridRow-Header">{title}</HeadingTag>
  }
  if (subtitle) {
    const HeadingTag = `h${level + 1}`
    subheader = (
      <HeadingTag className="GridRow-Subheader">{subtitle}</HeadingTag>
    )
  }
  return (
    <section className={rootCls} id={id}>
      <div className="GridRow-Layout">
        {header}
        {subheader}
        <div className="GridRow-Content">{children}</div>
      </div>
    </section>
  )
}

GridRow.defaultProps = {
  level: 1
}

GridRow.propTypes = {
  children: any,
  className: string,
  feature: bool,
  id: string,
  level: number,
  subtitle: string,
  title: string
}

export default GridRow
