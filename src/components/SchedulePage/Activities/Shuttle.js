import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Entry sign for the city of Carlsbad, California',
    caption: 'Photo courtesy of Hometown Realty',
    source: 'https://www.hometownnorthcounty.com/guide/carlsbad/',
    src: '/img/schedule/shuttle/sign.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const Shuttle = () => (
  <Activity
    layout="1"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="6:00PM - 11:30PM"
    title="Downtown Shuttle"
  >
    <p>
      Enjoy some free time and head over to historic downtown Carlsbad,
      California's coastal gateway! Downtown Carlsbad offers award-winning
      restaurants, boutique shopping, and amazing views of the Pacific Ocean.
    </p>
    <p>
      The Downtown Shuttle will loop continuously from the hotel lobby to
      Carlsbad Village. The final pick up to return back to the Omni will be at
      11:30PM. You must be on a return shuttle by 11:30PM at the latest, or find
      your own means of transportation back.
    </p>
  </Activity>
)

export default Shuttle
