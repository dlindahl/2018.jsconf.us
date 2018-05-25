import { arrayOf, shape, string } from 'prop-types'
import React from 'react'
import './SpeakerListItem.css'
import { toSentence } from '../../util/string'

// eslint-disable-next-line react/prop-types
function avatarize ({ avatar, name }) {
  return (
    <img
      alt=""
      className="SpeakerListItem-AvatarImg"
      key={avatar}
      src={avatar}
    />
  )
}

const SpeakerListItem = ({ className, href, speakers, title }) => {
  const names = toSentence(speakers.map((speaker) => speaker.name))
  return (
    <div className={`SpeakerListItem ${className}`}>
      <a className="SpeakerListItem-Link" href={href}>
        <figure className="SpeakerListItem-Avatars">
          {speakers.map(avatarize)}
        </figure>
      </a>
      <div className="SpeakerListItem-Info">
        <div className="SpeakerListItem-Name">{names}</div>
        <div className="SpeakerListItem-TalkTitle">{title}</div>
      </div>
    </div>
  )
}

SpeakerListItem.defaultProps = {
  speakers: []
}

SpeakerListItem.propTypes = {
  className: string,
  href: string.isRequired,
  speakers: arrayOf(
    shape({
      avatar: string.isRequired,
      name: string.isRequired
    })
  ).isRequired,
  title: string.isRequired
}

export default SpeakerListItem
