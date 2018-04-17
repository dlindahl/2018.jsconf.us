import { any, bool, string } from 'prop-types'
import classname from 'classnames'
import React from 'react'

import './LinkButton.css'

const LinkButton = ({ children, href, invert, primary }) => {
  const cls = classname({
    LinkButton: true,
    'LinkButton--invert': invert,
    'LinkButton--primary': primary
  })
  return (
    <a className={cls} href={href}>
      {children}
    </a>
  )
}

LinkButton.defaultProps = {
  invert: false,
  primary: false
}

LinkButton.propTypes = {
  children: any,
  href: string,
  invert: bool,
  primary: bool
}

export default LinkButton
