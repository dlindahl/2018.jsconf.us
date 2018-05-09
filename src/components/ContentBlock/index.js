import { any, arrayOf, bool, func, object, oneOf, string } from 'prop-types'
import classnames from 'classnames'
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
  subtitle,
  title
}) => {
  let ContentStyleTag = GridRow.MediumContent
  if (layoutStyle === 'narrow') {
    ContentStyleTag = GridRow.NarrowContent
  } else if (layoutStyle === 'wide') {
    ContentStyleTag = GridRow.WideContent
  }
  const contentCls = classnames({
    'ContentBlock-Content': true,
    'ContentBlock-Content--alignCenter': align === 'center',
    'ContentBlock-Content--alignLeft': align === 'left'
  })
  return (
    <GridRow className={`ContentBlock ${className}`} id={slugify(title)}>
      <GridRow.NarrowContent>
        <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
        <h3 className="ContentBlock-Subtitle">{subtitle}</h3>
        <div className={contentCls}>
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
  align: 'center',
  className: '',
  layoutStyle: 'medium'
}

ContentBlock.propTypes = {
  actions: arrayOf(any),
  align: oneOf(['center', 'left']),
  children: any,
  className: string,
  feature: bool,
  focus: string,
  layout: string,
  layoutClassName: string,
  layoutItems: arrayOf(object),
  layoutStyle: oneOf(['full', 'narrow', 'medium', 'wide']),
  renderLayoutItem: func,
  subtitle: string,
  title: string.isRequired
}

export default ContentBlock
