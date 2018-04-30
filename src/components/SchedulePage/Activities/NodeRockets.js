import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'NodeRocket assembly',
    caption: 'Photo by Matthew Bergman',
    source:
      'https://www.flickr.com/photos/matthewbergman/14124602567/in/album-72157644963162553/',
    src: '/img/schedule/noderockets/cjrocket.jpg'
  },
  {
    alt: 'NodeRocket launching',
    caption: 'Photo by Matthew Bergman',
    source:
      'https://www.flickr.com/photos/matthewbergman/14302040182/in/album-72157644963162553/',
    src: '/img/schedule/noderockets/launch.jpg'
  },
  {
    alt: 'NodeRocket landing with parachute',
    caption: 'Photo by Matthew Bergman',
    source:
      'https://www.flickr.com/photos/matthewbergman/14117264719/in/album-72157644963162553/',
    src: '/img/schedule/noderockets/landing.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const NodeRockets = () => (
  <Activity
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="9:00AM - 6:00PM"
    title="NodeRockets"
  >
    <p>
      3... 2... 1... BLAST OFF!!! Why stop with just Earth? It is time to take
      JavaScript to outer space!
    </p>
    <p>
      Join us for the return of NodeRockets as we combine all the power of hobby
      rockets with all the geekery of Node.js. Sign up, flight control, as we
      take to the sky, terrify anyone on the driving range, and break the
      altitude barrier WITH CODE!
    </p>
  </Activity>
)

export default NodeRockets
