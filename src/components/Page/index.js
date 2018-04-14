import React from 'react'
import { string } from 'prop-types'

import './Page.css'

const Page = ({ content }) => (
  <div className="Page">
    <div
      className="Page-Content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

Page.propTypes = {
  content: string
}

export default Page
