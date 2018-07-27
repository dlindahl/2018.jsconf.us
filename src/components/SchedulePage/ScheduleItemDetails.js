import { arrayOf, shape, string } from 'prop-types'
import Avatar from './Avatar'
import React from 'react'
import './ScheduleItemDetails.css'
import { slugify, toSentence } from '../../util/string'

function componentize (entity) {
  if (entity.avatar) {
    return <Avatar key={entity.avatar} src={entity.avatar}/>
  }
  if (entity.logo) {
    return <Avatar key={entity.logo} noClip src={entity.logo}/>
  }
  return null
}

const ScheduleItemDetails = ({
  byline,
  description,
  href,
  focus,
  anchor,
  speakers,
  sponsors,
  title
}) => {
  let avatars = null
  if (speakers && speakers.length) {
    byline = `with ${toSentence(speakers.map((s) => s.name))}`
    avatars = speakers.map(componentize)
  } else if (sponsors && sponsors.length) {
    byline = `sponsored by ${toSentence(sponsors.map((s) => s.name))}`
    avatars = sponsors.map(componentize)
  }
  anchor = anchor || slugify(title)
  let rootProps = {
    className: 'ScheduleItemDetails',
    id: anchor
  }
  let RootTag = 'div'
  if (href) {
    rootProps = {
      ...rootProps,
      href
    }
    RootTag = 'a'
  }
  return (
    <RootTag {...rootProps}>
      <div className="ScheduleItemDetails-Content">
        <header className="ScheduleItemDetails-Title">{title}</header>
        <strong className="ScheduleItemDetails-Focus">{focus}</strong>
        <div className="ScheduleItemDetails-ByLine">{byline}</div>
        <div className="ScheduleItemDetails-Descr">{description}</div>
      </div>
      <aside className="ScheduleItemDetails-Speakers">{avatars}</aside>
    </RootTag>
  )
}

ScheduleItemDetails.propTypes = {
  anchor: string,
  byline: string,
  description: string,
  focus: string,
  href: string,
  speakers: arrayOf(
    shape({
      avatar: string,
      name: string.isRequired
    })
  ),
  sponsors: arrayOf(
    shape({
      logo: string,
      name: string.isRequired
    })
  ),
  title: string.isRequired
}

export default ScheduleItemDetails
