import { any } from 'prop-types'
import React from 'react'

const WideLayout = ({ children }) => (
  <div className="GridRow-WideContent">{children}</div>
)

WideLayout.propTypes = {
  children: any
}

export default WideLayout
