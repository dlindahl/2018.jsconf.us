import { any, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'

const Activity = ({ children, times, ...props }) => (
  <ContentBlock align="left" subtitle={times} {...props}>
    {children}
  </ContentBlock>
)

Activity.propTypes = {
  children: any,
  subtitle: string,
  times: string.isRequired,
  title: string
}

export default Activity
