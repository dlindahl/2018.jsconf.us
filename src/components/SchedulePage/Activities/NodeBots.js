import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Linda plugging in jumper wires',
    caption: 'Photo by Matthew Bergman',
    source:
      'https://www.flickr.com/photos/matthewbergman/14289079186/in/album-72157644963162553/',
    src: '/img/schedule/nodebots/linda.jpg'
  },
  {
    alt: 'NodeBots playing soccer',
    caption: 'Photo by Matthew Bergman',
    source:
      'https://www.flickr.com/photos/matthewbergman/14301976002/in/album-72157644963162553/',
    src: '/img/schedule/nodebots/battle.jpg'
  },
  {
    alt: 'Flame spewing NodeBot',
    caption: 'Photo by @NodeBots',
    source: 'https://twitter.com/nodebots',
    src: '/img/schedule/nodebots/flame2.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const NodeBots = () => (
  <Activity
    layout="12"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="9:00AM - 6:00PM"
    title="NodeBots"
  >
    <p>
      Team up (or go solo) to hack together Arduino-based robots, all using just
      JavaScript!
    </p>
    <p>
      If you have no idea what an LED is, or a resistor for that matter, have no
      fear! NodeBot experts will be on-hand to help you hack, solder, and 3D
      print your way to a full fledged NodeBot!
    </p>
  </Activity>
)

export default NodeBots
