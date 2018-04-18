import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'

const IMAGES = [
  {
    alt: '',
    caption: 'Photo by Andrew Bui on Unsplash',
    src: '/img/homepage/pier.jpg'
  },
  {
    alt: '',
    caption: 'Photo by Adele Payman on Unsplash',
    src: '/img/homepage/vines.jpg'
  },
  {
    alt: '',
    caption: 'Photo by Robert Trombetta on Unsplash',
    src: '/img/homepage/gg.jpg'
  }
]

const WeAreBackPromo = (props) => {
  const actions = [
    <LinkButton href="/tickets/" key={0} primary>
      Buy Tickets
    </LinkButton>,
    <LinkButton href="/call-for-speakers/" key={1}>
      Learn More
    </LinkButton>
  ]
  return (
    <ContentBlock
      actions={actions}
      images={IMAGES}
      layout="111"
      title="We Are Back!"
      {...props}
    >
      The JSConf US is back for 2018! We've moved across country and are
      celebrating everything West Coast and California Dreamin'.
    </ContentBlock>
  )
}

export default WeAreBackPromo
