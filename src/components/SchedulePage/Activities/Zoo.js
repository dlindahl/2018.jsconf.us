import Activity from '../Activity'
import PhotoCell from '../../GridLayout/PhotoCell'
import React from 'react'

const IMAGES = [
  {
    alt: 'Various safari animals',
    caption: 'Photo courtesy of Visit Oceanside',
    source: 'http://visitoceanside.org/travel-tips/san-diego-wild-animal-park/',
    src: '/img/schedule/zoo/safari.jpg'
  },
  {
    alt: 'Running cheetah',
    caption: 'Photo courtesy of San Diego Zoo Safari Park',
    source: 'http://sdzsafaripark.org/safari/cheetah-safari',
    src: '/img/schedule/zoo/cheetah.jpg'
  },
  {
    alt: 'Lioness and her cubs',
    caption: 'Photo courtesy of San Diego Zoo Safari Park',
    source: 'http://sdzsafaripark.org/wildlife/lion-camp',
    src: '/img/schedule/zoo/cubs.jpg'
  }
]

function renderLayoutItem (itemProps) {
  return <PhotoCell key={itemProps.src} {...itemProps}/>
}

const Zoo = () => (
  <Activity
    layout="1/11"
    layoutItems={IMAGES}
    renderLayoutItem={renderLayoutItem}
    times="12:00PM - 4:00PM"
    title="Safari Zoo Adventure"
  >
    <p>
      The <a href="http://www.sdzsafaripark.org/" rel="noopener noreferrer" target="_blank">San Diego Safari Park</a> is a one-of-a-kind 2,200 acre wildlife preserve where over 4,000 rare and endangered species can be seen in habitats replicating their native homelands. Take a ride on the African Tram – it’s the absolute best way to see the diverse collection of animals on the African Outpost. Then, take your time checking out the extensive individual animal enclosures or catch a show! There are so many options to choose from such as the Tiger Keeper Talk, Frequent Flyers Bird Show, or the crowd favorite, Shiley’s Cheetah Run!
    </p>
    <p>
      Children and Significant Other tickets will be available for purchase.
    </p>
  </Activity>
)

export default Zoo
