import { any, string } from 'prop-types'
import React from 'react'

const ConditionalLink = ({ children, href, ...props }) => {
  if (!href) {
    return children
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

ConditionalLink.propTypes = {
  children: any,
  href: string
}

export default ConditionalLink
