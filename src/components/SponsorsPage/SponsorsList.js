import { any, arrayOf, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import SponsorListItem from './SponsorListItem'

import './SponsorsList.css'

function renderLayoutItem (item) {
  const { level, logo, name } = item.frontmatter
  return (
    <SponsorListItem
      href={item.fields.slug}
      key={name}
      level={level}
      logo={logo}
      name={name}
    />
  )
}

const SponsorsList = ({ children, items, title }) => {
  if (!items || (items && !items.length)) {
    return null
  }
  return (
    <ContentBlock
      className="SponsorsList"
      layoutClassName="SponsorsListLayout"
      layoutItems={items}
      renderLayoutItem={renderLayoutItem}
      title={title}
    >
      {children}
    </ContentBlock>
  )
}

SponsorsList.propTypes = {
  children: any,
  items: arrayOf(
    shape({
      event: string,
      name: string
    }).isRequired
  ),
  title: string.isRequired
}

export default SponsorsList
