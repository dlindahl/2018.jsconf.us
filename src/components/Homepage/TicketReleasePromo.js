import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'

const TicketReleasePromo = (props) => {
  const actions = [
    <LinkButton href="/tickets/" key={0} primary>
      Register now
    </LinkButton>,
    <LinkButton href="/call-for-speakers/" key={1}>
      Learn More
    </LinkButton>
  ]
  return (
    <ContentBlock actions={actions} title="Get Your Ticket!" {...props}>
      <p>
        Over the last ten years, JSConf US has pushed the language outside of
        its comfort zone, the web browser, and into the forefront of{' '}
        <a href="http://nodecopter.com/">drones</a>,{' '}
        <a href="http://nodebots.io/">robots</a>, and{' '}
        <a href="http://www.youtube.com/watch?v=O83-d0t0Ldw">video games</a>.
        Which{' '}
        <a href="https://www.youtube.com/watch?v=GW0rj4sNH2w">
          idea will change the world
        </a>?
      </p>
    </ContentBlock>
  )
}

export default TicketReleasePromo
