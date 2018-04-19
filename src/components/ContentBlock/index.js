import { any, arrayOf, bool, func, object, oneOf, string } from 'prop-types'
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
  layout,
  layoutClassName,
  layoutItems,
  renderLayoutItem,
  layoutStyle,
  title
}) => {
  let ContentStyleTag = GridRow.MediumContent
  if (layoutStyle === 'narrow') {
    ContentStyleTag = GridRow.NarrowContent
  } else if (layoutStyle === 'wide') {
    ContentStyleTag = GridRow.WideContent
  }
  return (
    <GridRow className={`ContentBlock ${className}`} id={slugify(title)}>
      <GridRow.NarrowContent>
        <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
        <div className="ContentBlock-Content">
          <ContentBlockFocus>{focus}</ContentBlockFocus>
          {children}
        </div>
        <ButtonGroup>{actions}</ButtonGroup>
      </GridRow.NarrowContent>
      <ContentStyleTag>
        <GridLayout
          className={layoutClassName}
          items={layoutItems}
          layout={layout}
          renderItem={renderLayoutItem}
        />
      </ContentStyleTag>
    </GridRow>
  )
}

ContentBlock.defaultProps = {
  layoutStyle: 'medium'
}

ContentBlock.propTypes = {
  actions: arrayOf(any),
  children: any,
  className: string,
  feature: bool,
  focus: string,
  layout: string,
  layoutClassName: string,
  layoutItems: arrayOf(object),
  layoutStyle: oneOf(['full', 'narrow', 'medium', 'wide']),
  renderLayoutItem: func,
  title: string.isRequired
}

export default ContentBlock
