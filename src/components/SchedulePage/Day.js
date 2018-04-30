import { any, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import './Day.css'
import React from 'react'

const Day = ({ children, content, title, ...props }) => (
  <div className="Day">
    <ContentBlock feature title={title} {...props}>
      {content}
    </ContentBlock>
    {children}
  </div>
)

Day.propTypes = {
  children: any,
  content: any,
  title: string.isRequired
}

export default Day
