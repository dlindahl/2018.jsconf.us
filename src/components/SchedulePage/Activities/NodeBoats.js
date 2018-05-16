import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import LinkButton from '../../LinkButton'
import React from 'react'

const IMAGES = [
  {
    alt: 'NodeBoats attendees',
    caption: 'Photo by @NodeBoats',
    source: 'https://twitter.com/NodeBoats/status/609936930222944257',
    src: '/img/schedule/nodeboats/group.jpg'
  },
  {
    alt: 'NodeBoats team with assembled boat',
    caption: 'Photo by Sarah C. Hines',
    source: 'https://twitter.com/sarah_hines/status/604106048530731009',
    src: '/img/schedule/nodeboats/build.jpg'
  },
  {
    alt: 'NodeRocket landing with parachute',
    caption: 'Photo by Luis Montes',
    source: 'https://twitter.com/monteslu/status/604031331870339072',
    src: '/img/schedule/nodeboats/furiosa.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const NodeBoats = () => {
  const actions = <LinkButton href="/team/#nodeboats">Meet The Team</LinkButton>
  return (
    <Activity
      actions={actions}
      layout="12"
      layoutItems={IMAGES}
      renderLayoutItem={renderLayoutItem}
      times="9:00AM - 6:00PM"
      title="NodeBoats"
    >
      <p>
        Take the mission of spreading JavaScript to every corner of the world to
        its next logical conclusion, the water!
      </p>
      <p>
        Join a worthy crew (or cross the seas solo) to hack together a boat (or
        a boat-like floaty object) using Node.js to bring the seas under your
        control.
      </p>
      <p>
        <strong>Note:</strong> You may get wet on this ride as you will
        undoubtedly need to rescue your vessel at least once. Dress
        appropriately!
      </p>
    </Activity>
  )
}

export default NodeBoats
