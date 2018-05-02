import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'

const CallForSpeakers = (props) => {
  const actions = [
    <LinkButton href="/call-for-speakers/" key={1}>
      Learn More
    </LinkButton>
  ]
  return (
    <ContentBlock
      actions={actions}
      focus="Our Call for Speakers closed May 1st"
      title="Call for Speakers"
      {...props}
    >
      <p>
        JSConf has been the launchpad for many of the greatest things that we
        now take for granted on the web. Our CFP process is designed to shine
        the spotlight on the latest ideas and future leaders of the JavaScript
        world.
      </p>
    </ContentBlock>
  )
}

export default CallForSpeakers
