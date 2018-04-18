import { any, arrayOf, bool, object, string } from 'prop-types'
import ButtonGroup from '../ButtonGroup'
import ContentBlockFocus from './ContentBlockFocus'
import ContentBlockTitle from './ContentBlockTitle'
import GridRow from '../GridRow'
import GridLayout from '../GridLayout'
import React from 'react'
import { slugify } from '../../util/string'

import './ContentBlock.css'

const ContentBlock = ({
  actions,
  children,
  feature,
  focus,
  images,
  layout,
  title
}) => (
  <GridRow className="ContentBlock" id={slugify(title)}>
    <GridRow.NarrowContent>
      <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
      <div className="ContentBlock-Content">
        <ContentBlockFocus>{focus}</ContentBlockFocus>
        {children}
      </div>
      <ButtonGroup>{actions}</ButtonGroup>
    </GridRow.NarrowContent>
    <GridRow.WideContent>
      <GridLayout images={images} layout={layout}/>
    </GridRow.WideContent>
  </GridRow>
)

ContentBlock.propTypes = {
  actions: arrayOf(any),
  children: any,
  feature: bool,
  focus: string,
  images: arrayOf(object),
  layout: string,
  title: string.isRequired
}

export default ContentBlock
