import { any } from 'prop-types'
import React from 'react'

const MediumContent = ({ children }) => (
  <div className="GridRow-MediumContent">{children}</div>
)

MediumContent.propTypes = {
  children: any
}

export default MediumContent
