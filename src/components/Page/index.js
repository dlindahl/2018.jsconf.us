import GridRow from '../GridRow'
import React from 'react'
import { string } from 'prop-types'

import './Page.css'

const Page = ({ content }) => (
  <GridRow className="Page">
    <div dangerouslySetInnerHTML={{ __html: content }}/>
  </GridRow>
)

Page.propTypes = {
  content: string
}

export default Page
