import { any, arrayOf, bool, func, object, string } from 'prop-types'
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
  className,
  feature,
  focus,
  layoutItems,
  layout,
  renderLayoutItem,
  title
}) => (
  <GridRow className={`ContentBlock ${className}`} id={slugify(title)}>
    <GridRow.NarrowContent>
      <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
      <div className="ContentBlock-Content">
        <ContentBlockFocus>{focus}</ContentBlockFocus>
        {children}
      </div>
      <ButtonGroup>{actions}</ButtonGroup>
    </GridRow.NarrowContent>
    <GridRow.WideContent>
      <GridLayout
        items={layoutItems}
        layout={layout}
        renderItem={renderLayoutItem}
      />
    </GridRow.WideContent>
  </GridRow>
)

ContentBlock.propTypes = {
  actions: arrayOf(any),
  children: any,
  className: string,
  feature: bool,
  focus: string,
  layout: string,
  layoutItems: arrayOf(object),
  renderLayoutItem: func,
  title: string.isRequired
}

export default ContentBlock
