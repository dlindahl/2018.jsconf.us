import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Large collection of quadcopters',
    caption: 'Photo by Derek Lindahl',
    source: 'https://www.instagram.com/p/Z3DT6kAsRy/',
    src: '/img/schedule/nodecopter/swarm.jpg'
  },
  {
    alt: 'A swarm of quadcopters take flight',
    caption: 'Video courtesy of @NodeCopter',
    isThumbnail: true,
    source: 'https://www.youtube.com/watch?v=HUzv_ge-WKA',
    src: '/img/schedule/nodecopter/vid.jpg'
  },
  {
    alt: 'NodeCopter soccer playing area',
    caption: 'Photo by @NodeCopter',
    src: '/img/schedule/nodecopter/playarea.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const NodeCopter = () => (
  <Activity
    layout="12"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="9:00AM - 6:00PM"
    title="NodeCopter"
  >
    <p>
      Team up (or go solo), hack a quadcopter using Node.js, and make a flying
      robot do your bidding!
    </p>
  </Activity>
)

export default NodeCopter
