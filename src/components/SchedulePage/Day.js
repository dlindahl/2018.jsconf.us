import { any, string } from 'prop-types'
import React from 'react'
import Page from '../Page'

const Day = ({ children, title, ...props }) => {
  let titleContent
  if (title) {
    titleContent = <h2>{title}</h2>
  }
  return (
    <Page className="Day" {...props}>
      <h1>{children}</h1>
      {titleContent}
    </Page>
  )
}

Day.propTypes = {
  children: any,
  title: string
}

export default Day
