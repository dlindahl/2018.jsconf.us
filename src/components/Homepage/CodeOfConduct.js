import ContentBlock from '../ContentBlock'
import Link from 'gatsby-link'
import LinkButton from '../LinkButton'
import React from 'react'

const CodeOfConduct = (props) => {
  const actions = [
    <LinkButton href="/code-of-conduct/" key={0} primary>
      Learn More
    </LinkButton>
  ]
  return (
    <ContentBlock actions={actions} title="Code of Conduct">
      <p>
        JSConf was one of the first conferences to implement and enforce a
        conference Code of Conduct. This year is no different. We expect, and
        require, all organizers, sponsors, speakers, volunteers, delegates, and
        attendees of all levels to adhere to our{' '}
        <Link to="/code-of-conduct/">Code of Conduct</Link>.
      </p>
    </ContentBlock>
  )
}

export default CodeOfConduct
