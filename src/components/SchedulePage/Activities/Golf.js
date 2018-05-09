import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Large collection of quadcopters',
    caption: 'Photo by JSConf',
    source: 'https://www.instagram.com/p/Z3DT6kAsRy/',
    src: '/img/schedule/golf/team.jpg'
  },
  {
    alt: 'A swarm of quadcopters take flight',
    caption: 'Photo by Derek Lindahl',
    src: '/img/schedule/golf/swinging.jpg'
  },
  {
    alt: 'NodeCopter soccer playing area',
    caption: 'Photo by Derek Lindahl',
    src: '/img/schedule/golf/shoes.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const Golf = () => (
  <Activity
    layout="1/11"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="Time TBA"
    title="Golf Tournament"
  >
    <p>
      Take advantage of either of La Costa's world-class golf courses,
      "Champions" or "Legends"!
    </p>
    <p>
      The tournament will be organized into teams of four (4) with all teams
      playing scramble format (AKA best shot of team is taken). Solo players
      will be formed into teams. Golf attire will be required: collared shirts,
      no jeans. Club rentals are available or you can bring your own.
    </p>
  </Activity>
)

export default Golf
