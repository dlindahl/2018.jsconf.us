import { any, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'

import './GridRow.css'

const GridRow = ({ children, className, id }) => {
  const rootCls = classnames({
    GridRow: true,
    [className]: className
  })
  return (
    <section className={rootCls} id={id}>
      <div className="GridRow-Layout">
        <div className="GridRow-Content">{children}</div>
      </div>
    </section>
  )
}

GridRow.propTypes = {
  children: any,
  className: string,
  id: string
}

export default GridRow
