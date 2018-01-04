import React from 'react'
import { string } from 'prop-types'

const Page = ({ content }) => (
  <article>
    <div dangerouslySetInnerHTML={{ __html: content }}/>
  </article>
)

Page.propTypes = {
  content: string
}

export default Page
