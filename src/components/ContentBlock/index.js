import {
  any,
  arrayOf,
  bool,
  func,
  number,
  object,
  oneOf,
  string
} from 'prop-types'
import ContentBlockBody from './ContentBlockBody'
import GridRow from '../GridRow'
import GridLayout from '../GridLayout'
import React from 'react'
import { slugify } from '../../util/string'

import './ContentBlock.css'

const ContentBlock = ({
  actions,
  align,
  children,
  className,
  feature,
  focus,
  layout,
  layoutClassName,
  layoutItems,
  renderLayoutItem,
  layoutStyle,
  maxCols,
  subtitle,
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
      <ContentBlockBody
        actions={actions}
        feature={feature}
        focus={focus}
        subtitle={subtitle}
        title={title}
      >
        {children}
      </ContentBlockBody>
      <ContentStyleTag>
        <GridLayout
          className={layoutClassName}
          items={layoutItems}
          layout={layout}
          maxCols={maxCols}
          renderItem={renderLayoutItem}
        />
      </ContentStyleTag>
    </GridRow>
  )
}

ContentBlock.defaultProps = {
  className: '',
  layoutStyle: 'medium'
}

ContentBlock.propTypes = {
  actions: any,
  align: string,
  children: any,
  className: string,
  feature: bool,
  focus: string,
  layout: string,
  layoutClassName: string,
  layoutItems: arrayOf(object),
  layoutStyle: oneOf(['full', 'narrow', 'medium', 'wide']),
  maxCols: number,
  renderLayoutItem: func,
  subtitle: string,
  title: string.isRequired
}

export default ContentBlock
