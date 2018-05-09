import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Man with surfboard in misty weather',
    caption: 'Photo by Blake Hunter on Unsplash',
    source: 'https://unsplash.com/photos/p01IGh_HxtM',
    src: '/img/schedule/surfing/misty.jpg'
  },
  {
    alt: 'Man with surdboard at sunset',
    caption: 'Photo by Blake Hunter on Unsplash',
    source: 'https://unsplash.com/photos/fs5GhWgr2hs',
    src: '/img/schedule/surfing/sunset.jpg'
  },
  {
    alt: 'Lifeguard tower',
    caption: 'Photo by Avi Richards on Unsplash',
    source: 'https://unsplash.com/photos/SqI31OQkiHY',
    src: '/img/schedule/surfing/guardshack.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const Surfing = () => (
  <Activity
    layout="12"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="1:00PM - 5:00PM"
    title="Surf Lessons at La Jolla"
  >
    <p>What could be more Southern Californian than surfing?</p>
    <p>
      Stroll out onto the beach and prepare for some fun. Professional
      instructors will teach you essential fundamentals which guide you through
      the amazing process of learning to surf. No matter your skill level, you
      will learn the basics of board handling, positioning, paddling, various
      techniques on getting to your feet, surfing etiquette, ocean knowledge,
      and water safety.
    </p>
    <p>
      The instructors will be in the water assisting you into waves and giving
      you tips after each ride to help you successfully ride your next wave to
      the beach. The lesson will start with an instruction session on the beach
      that will last approximately 20 minutes before getting into the water with
      your instructor.
    </p>
    <p>
      <strong>Note:</strong> You will get wet! Please bring a towel, extra
      clothes, and a bathing suit. Wetsuits will be provided. Space is limited,
      register early!
    </p>
  </Activity>
)

export default Surfing
