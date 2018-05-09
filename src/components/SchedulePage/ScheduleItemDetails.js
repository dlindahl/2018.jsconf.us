import { arrayOf, shape, string } from 'prop-types'
import Avatar from './Avatar'
import React from 'react'
import './ScheduleItemDetails.css'
import { slugify, toSentence } from '../../util/string'

function componentize (speaker) {
  if (!speaker.avatar) {
    return null
  }
  return <Avatar key={speaker.avatar} src={speaker.avatar}/>
}

const ScheduleItemDetails = ({
  description,
  focus,
  anchor,
  speakers,
  title
}) => {
  let avatars = null
  if (speakers && speakers.length) {
    description = `with ${toSentence(speakers.map((s) => s.name))}`
    avatars = speakers.map(componentize)
  }
  anchor = anchor || slugify(title)
  return (
    <div className="ScheduleItemDetails">
      <div className="ScheduleItemDetails-Content">
        <header className="ScheduleItemDetails-Title" id={anchor}>
          {title}
        </header>
        <strong className="ScheduleItemDetails-Focus">{focus}</strong>
        <div className="ScheduleItemDetails-Descr">{description}</div>
      </div>
      <aside className="ScheduleItemDetails-Speakers">{avatars}</aside>
    </div>
  )
}

ScheduleItemDetails.propTypes = {
  anchor: string,
  description: string,
  focus: string,
  speakers: arrayOf(
    shape({
      avatar: string,
      name: string.isRequired
    })
  ),
  title: string.isRequired
}

export default ScheduleItemDetails
