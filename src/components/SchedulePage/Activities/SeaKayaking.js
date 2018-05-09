import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Two sea kayaks in a small alcove',
    caption: 'Photo by Alex Perez on Unsplash',
    source: 'https://unsplash.com/photos/z-Cr0WZWUCE',
    src: '/img/schedule/kayaking/aerial-cove.jpg'
  },
  {
    alt: 'NodeBots playing soccer',
    caption: 'Photo by Karen Goodfellow on Unsplash',
    source: 'https://unsplash.com/photos/F8jcgNyfAow',
    src: '/img/schedule/kayaking/sealion.jpg'
  },
  {
    alt: 'Flame spewing NodeBot',
    caption: 'Photo by Herb Neufeld on Twitter',
    source: 'https://www.flickr.com/photos/oggiedog/5942381548/',
    src: '/img/schedule/kayaking/setup.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const SeaKayaking = () => (
  <Activity
    layout="12"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="1:00PM - 5:00PM"
    title="Sea Cave Kayaking"
  >
    <p>
      Do you like to play in the open ocean waters, the cool sea spray
      whispering over you? Then join us for an exciting day of adventure and
      exploration!
    </p>
    <p>
      You will be kayaking in La Jolla, one of the many breathtaking ocean water
      areas in San Diego County. If you've ever wanted to try sea kayaking or
      just want to enjoy the thrill once again, this is the experience for you!
      After donning your wetsuit, you'll be paired up into a tandem kayak, and
      head right into the water, receiving instruction as you go.
    </p>
    <p>
      <strong>Note:</strong> You will get wet! Please bring a towel, extra
      clothes, and a bathing suit. Wetsuits will be provided. Space is limited,
      register early!
    </p>
  </Activity>
)

export default SeaKayaking
