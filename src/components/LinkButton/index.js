import { any, bool, string } from 'prop-types'
import classname from 'classnames'
import React from 'react'

import './LinkButton.css'

const LinkButton = ({ children, href, invert, ...props }) => {
  const cls = classname({
    LinkButton: true,
    'LinkButton--invert': invert
  })
  return (
    <a className={cls} href={href}>
      {children}
    </a>
  )
}

LinkButton.defaultProps = {
  invert: false
}

LinkButton.propTypes = {
  children: any,
  href: string,
  invert: bool
}

export default LinkButton
