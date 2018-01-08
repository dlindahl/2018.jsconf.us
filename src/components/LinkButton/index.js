import { any, bool, string } from 'prop-types'
import classnames from 'classnames'
import React from 'react'

import './LinkButton.css'

const LinkButton = ({ children, dark, href, ...props }) => {
  const cls = classnames({
    LinkButton: true,
    'LinkButton--dark': dark
  })
  return (
    <a className={cls} href={href}>
      {children}
    </a>
  )
}

LinkButton.propTypes = {
  children: any,
  dark: bool,
  href: string
}

export default LinkButton
