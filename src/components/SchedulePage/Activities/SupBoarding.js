import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Stand-up paddle board students',
    caption: 'Photo courtesy of LaJolla.com',
    source: 'https://www.lajolla.com/guides/la-jolla-shores/',
    src: '/img/schedule/sup/sup.jpg'
  },
  {
    alt: 'La Jolla Cove',
    caption: 'Photo by SD Dirk on Flickr',
    source: 'https://www.flickr.com/photos/dirkhansen/3802172421/',
    src: '/img/schedule/sup/cove.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const SupBoarding = () => (
  <Activity
    layout="11+"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="1:00PM - 5:00PM"
    title="Stand-Up Paddle Boarding Lessons at La Jolla Shores"
  >
    <p>What better way to play on the water than stand-up paddle boarding?</p>
    <p>
      Stand-up paddle board lessons for beginners start in the sand with
      instruction on paddling, stance, and balance. Your instructor will cover
      ocean safety, reading waves, and of course, surfing etiquette. Then it’s
      into the surf! With your instructor’s guidance, you will paddle yourself
      around the ocean, taking in breathtaking views of La Jolla, enjoying the
      company of such marine life as harbor seals, sea lions, dolphins, fish,
      and shore birds.
    </p>
    <p>
      <strong>Note:</strong> You will get wet! Please bring a towel, extra
      clothes, and a bathing suit. Wetsuits will be provided. Space is limited,
      register early!
    </p>
  </Activity>
)

export default SupBoarding
