import { any, string } from 'prop-types'
import React from 'react'

import './Page.css'

const Page = ({ children, content }) => {
  let html
  if (children) {
    html = {
      children
    }
  } else {
    html = {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }
  }
  return (
    <div className="Page">
      <div className="Page-Content" {...html}/>
    </div>
  )
}

Page.propTypes = {
  children: any,
  content: string
}

export default Page
