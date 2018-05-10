import { any, array, arrayOf, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import './SpeakersList.css'
import SpeakerListItem from './SpeakerListItem'

function renderLayoutItem (item) {
  const { speakers, title } = item.frontmatter
  return (
    <SpeakerListItem
      href={item.fields.slug}
      key={title}
      speakers={speakers}
      title={title}
    />
  )
}

const SpeakersList = ({ children, items, title, ...props }) => {
  if (!items || (items && !items.length)) {
    return null
  }
  return (
    <ContentBlock
      className="SpeakersList"
      layoutClassName="SpeakersListLayout"
      layoutItems={items}
      layoutStyle="wide"
      maxCols={3}
      renderLayoutItem={renderLayoutItem}
      title={title}
      {...props}
    >
      {children}
    </ContentBlock>
  )
}

SpeakersList.defaultProps = {
  title: ''
}

SpeakersList.propTypes = {
  children: any,
  items: arrayOf(
    shape({
      fields: shape({
        slug: string.isRequired
      }).isRequired,
      frontmatter: shape({
        speakers: array,
        title: string
      }).isRequired
    }).isRequired
  ),
  title: string
}

export default SpeakersList
