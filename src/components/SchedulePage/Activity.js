import { any, string } from 'prop-types'
import React from 'react'
import Page from '../Page'

const Activity = ({ children, subtitle, title, ...props }) => {
  let titleContent
  let subtitleContent
  if (title) {
    titleContent = <h2>{title}</h2>
  }
  if (subtitle) {
    subtitleContent = <h3>{subtitle}</h3>
  }
  return (
    <Page className="Activity" {...props}>
      {titleContent}
      {subtitleContent}
      {children}
    </Page>
  )
}

Activity.propTypes = {
  children: any,
  subtitle: string,
  title: string
}

export default Activity
