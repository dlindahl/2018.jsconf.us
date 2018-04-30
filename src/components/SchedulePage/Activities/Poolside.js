import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Edge Pool at the Omni La Costa',
    caption: 'Photo courtesy of Omni La Costa',
    source:
      'https://m.omnihotels.com/h5/property?pagePath=http%3A%2F%2Fwww.omnihotels.com%2Fhotels%2Fsan-diego-la-costa%2Fproperty-details%2Fgallery&fakeGalleryPanel=true&backUrl=%2Fhotels%2Fsan-diego-la-costa',
    src: '/img/schedule/pool/edge.jpg'
  },
  {
    alt: 'Poolside cabanas',
    caption: 'Photo courtesy of Omni La Costa',
    source:
      'https://www.omnihotels.com/hotels/san-diego-la-costa/wellness/pool',
    src: '/img/schedule/pool/cabana.jpg'
  },
  {
    alt: 'Water slide',
    caption: 'Photo courtesy of Charlene C. on Yelp',
    source:
      'https://www.yelp.com/biz_photos/omni-la-costa-resort-and-spa-carlsbad?select=Yk7W5VtcfkyIa1DJMSyxnQ',
    src: '/img/schedule/pool/slides.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const Poolside = () => (
  <Activity
    layout="1/11"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="Time TBA"
    title="Poolside Relaxation"
  >
    <p>
      Want to be outside, but still need access to the Internet? Come on down to
      the Omni's Edge Pool where you can get a nice cold drink, a bit of food,
      WiFi, and cool off with a dip in the pool.
    </p>
    <p>
      Have kids along for the ride? Are you a kid yourself? Head over to the
      kids pool and check out their sandy beach or take a slide down not one,
      but TWO waterslides!
    </p>
    <p>
      Even if you are registered for another event, stop by the pool for a bit!
      Who knows, you may even catch a repeat of synchronized.swimming.js.
    </p>
  </Activity>
)

export default Poolside
