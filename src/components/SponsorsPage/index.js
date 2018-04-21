import { arrayOf, bool, oneOf, shape, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import DefaultLayout from '../../layouts/DefaultLayout'
import LinkButton from '../LinkButton'
import PhotoCell from '../GridLayout/PhotoCell'
import React from 'react'
import SponsorsListFeature from './SponsorsListFeature'
import Testimonial from './Testimonial'

const QUOTES = [
  {
    alt: 'All attendees of JSConf US 2013',
    src: '/img/sponsors/family-photo.jpg'
  },
  {
    name: 'David Resseguie',
    position: 'Director, Emerging Technology, PwC',
    quote: "I'm in my current job because of relationships I made at JSConf",
    source: 'https://twitter.com/Resseguie/status/889670817885425665'
  },
  {
    alt: 'An attendee assembling their NodeBot kit',
    source:
      'https://www.flickr.com/photos/matthewbergman/14311629824/in/album-72157644963162553/',
    src: '/img/sponsors/nodebots.jpg'
  },
  {
    name: 'Luis Montes',
    position: 'Founder, Iced Development',
    quote:
      '[It is] a huge chance to grow and learn to empathize with a diverse group of developers. Very much appreciate all the years of JSConf.',
    source: 'https://twitter.com/monteslu/status/889156002083291136'
  },
  {
    alt: 'Tom and Zahra using a Google Cardboard device',
    source:
      'https://www.flickr.com/photos/matthewbergman/23501332810/in/album-72157660142074134/',
    src: '/img/sponsors/zahra.jpg'
  },
  {
    name: 'Bryan Hughes',
    position: 'Developer Evangelist, Microsoft',
    quote:
      "I remember Raquel Velez's talk, then the Nodebots workshop she did with Rick Waldron. I'm into NodeBots, and conference speaking, because of them. Like, I literally owe my career as a technical evangelist to them.",
    source: 'https://twitter.com/nebrius/status/889512236800016384'
  },
  {
    alt: 'Blaine and Troy showing off their Sails.js t-shirts',
    source:
      'https://www.flickr.com/photos/matthewbergman/23796681325/in/album-72157660142074134/',
    src: '/img/sponsors/sails.jpg'
  }
]

// eslint-disable-next-line react/prop-types
function renderLayoutItem (itemProps) {
  if (itemProps.src) {
    return <PhotoCell key={itemProps.src} {...itemProps}/>
  }
  return <Testimonial key={itemProps.name} {...itemProps}/>
}

const SponsorsPage = ({ data }) => {
  const actions = [
    <LinkButton
      href="http://bit.ly/JSConfUS2018sponsorship"
      key={0}
      primary
      rel="noopener noreferrer"
      target="_blank"
    >
      Contact Us
    </LinkButton>
  ]
  return (
    <DefaultLayout description="Our Sponsors" title="Our Sponsors">
      <SponsorsListFeature data={data}/>
      <ContentBlock
        actions={actions}
        align="left"
        feature
        focus="Sponsorships now available!"
        layout="1/211/2"
        layoutItems={QUOTES}
        layoutStyle="wide"
        renderLayoutItem={renderLayoutItem}
        title="Be a Sponsor"
      >
        <p>
          At JSConf US 2018, the best JS programmers will gather for a two
          track, three day conference that will showcase the future of
          JavaScript and we want you there as a sponsor!
        </p>
        <p>
          Our sponsorships are are little bit different than what you may be
          accustomed to. There are no booths, no exhibit halls, and we encourage
          you to send your best technical talent. We focus the sponsorships on
          creating amazing shared experiences which have a far broader and
          longer lasting effects for you and our attendees.
        </p>
        <p>
          Whether your goal is brand exposure, recruiting, product launch, or
          something else, we have a sponsorship opportunity for you.
        </p>
      </ContentBlock>
    </DefaultLayout>
  )
}

SponsorsPage.propTypes = {
  data: arrayOf(
    shape({
      fields: shape({
        slug: string.isRequired
      }).isRequired,
      frontmatter: shape({
        level: oneOf(['community', 'gold', 'platinum', 'scholarship', 'silver'])
          .isRequired,
        logo: string,
        name: string.isRequired,
        visible: bool.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
}

export default SponsorsPage
