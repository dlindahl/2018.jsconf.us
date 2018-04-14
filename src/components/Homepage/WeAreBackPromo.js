import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'

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
    <ContentBlock actions={actions} title="We Are Back!" {...props}>
      The JSConf US is back for 2018! We've moved across country and are
      celebrating everything West Coast and California Dreamin'.
    </ContentBlock>
  )
}

export default WeAreBackPromo
