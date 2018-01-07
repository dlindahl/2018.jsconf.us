import { any, string } from 'prop-types'
import React from 'react'

import './LinkButton.css'

const LinkButton = ({ children, href, ...props }) => (
  <a className="LinkButton" href={href}>
    {children}
  </a>
)

LinkButton.propTypes = {
  children: any,
  href: string
}

export default LinkButton
