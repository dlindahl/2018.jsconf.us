import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'
import { string } from 'prop-types'

const OpportunityScholarship = ({ className }) => (
  <GridRow className={className} feature title="Opportunity Scholarship">
    <p>
      As we bring JSConf back to the US, we are committed to creating a diverse
      and inclusive environment. Part of that commitment includes our
      Opportunity Scholarship, a program designed to make it easier for people
      from under-represented groups access to the many amazing opportunities
      that happen at <a href="http://jsconf.com">JSConf Family of events</a>.
    </p>
    <p>
      <Link to="/scholarships/">Get to know more</Link> about how to apply or
      how to contribute
    </p>
  </GridRow>
)

OpportunityScholarship.propTypes = {
  className: string
}

export default OpportunityScholarship
