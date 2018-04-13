import ContentBlock from '../ContentBlock'
import LinkButton from '../LinkButton'
import React from 'react'

const OpportunityScholarship = (props) => {
  const actions = [
    <LinkButton href="/scholarships/" key={0} primary>
      How to Apply
    </LinkButton>,
    <LinkButton href="/scholarships/#want-to-contribute" key={1}>
      Contribute
    </LinkButton>
  ]
  return (
    <ContentBlock actions={actions} title="Opportunity Scholarship" {...props}>
      <p>
        Part of our commitment to creating a diverse and inclusive environment
        includes our new Opportunity Scholarship. This program is designed to
        assist underrepresented groups improve their access to the many amazing
        opportunities that happen at the{' '}
        <a href="http://jsconf.com">JSConf Family of events</a>.
      </p>
    </ContentBlock>
  )
}

export default OpportunityScholarship
