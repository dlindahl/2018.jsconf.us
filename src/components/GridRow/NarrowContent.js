import { any } from 'prop-types'
import React from 'react'

const NarrowContent = ({ children }) => (
  <div className="GridRow-NarrowContent">{children}</div>
)

NarrowContent.propTypes = {
  children: any
}

export default NarrowContent
