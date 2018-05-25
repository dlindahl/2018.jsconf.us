import { any, bool, oneOf, string } from 'prop-types'
import ButtonGroup from '../ButtonGroup'
import classnames from 'classnames'
import ContentBlockFocus from './ContentBlockFocus'
import ContentBlockSubtitle from './ContentBlockSubtitle'
import ContentBlockTitle from './ContentBlockTitle'
import GridRow from '../GridRow'
import React from 'react'

const ContentBlockBody = ({
  actions,
  align,
  children,
  feature,
  title,
  subtitle,
  focus
}) => {
  if (!actions && !children && !subtitle && !title) {
    return null
  }
  const contentCls = classnames({
    'ContentBlock-Content': true,
    'ContentBlock-Content--alignCenter': align === 'center',
    'ContentBlock-Content--alignLeft': align === 'left'
  })
  return (
    <GridRow.NarrowContent>
      <ContentBlockTitle feature={feature}>{title}</ContentBlockTitle>
      <ContentBlockSubtitle>{subtitle}</ContentBlockSubtitle>
      <div className={contentCls}>
        <ContentBlockFocus>{focus}</ContentBlockFocus>
        {children}
      </div>
      <ButtonGroup>{actions}</ButtonGroup>
    </GridRow.NarrowContent>
  )
}

ContentBlockBody.defaultProps = {
  align: 'center'
}

ContentBlockBody.propTypes = {
  actions: any,
  align: oneOf(['center', 'left']),
  children: any,
  feature: bool,
  focus: string,
  subtitle: string,
  title: string.isRequired
}

export default ContentBlockBody
