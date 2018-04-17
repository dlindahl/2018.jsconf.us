import { any, arrayOf, bool, string } from 'prop-types'
import ButtonGroup from '../ButtonGroup'
import ContentBlockFocus from './ContentBlockFocus'
import ContentBlockTitle from './ContentBlockTitle'
import GridRow from '../GridRow'
import React from 'react'
import { slugify } from '../../util/string'

import './ContentBlock.css'

const ContentBlock = ({ actions, children, feature, focus, title }) => (
  <GridRow className="ContentBlock" id={slugify(title)}>
    <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
    <div className="ContentBlock-Content">
      <ContentBlockFocus>{focus}</ContentBlockFocus>
      {children}
    </div>
    <ButtonGroup>{actions}</ButtonGroup>
  </GridRow>
)

ContentBlock.propTypes = {
  actions: arrayOf(any),
  children: any,
  feature: bool,
  focus: string,
  title: string.isRequired
}

export default ContentBlock
