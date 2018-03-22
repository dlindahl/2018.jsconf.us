import { bool, string } from 'prop-types'
import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'

const OpportunityScholarship = ({ className, feature }) => (
  <GridRow
    className={className}
    feature={feature}
    title="Opportunity Scholarship"
  >
    <p>
      As we get JSConf US going again, we are committed to creating a diverse
      and inclusive environment. Part of that commitment includes our new
      Opportunity Scholarship, a program designed to assist underrepresented
      groups, to improve their access to the many amazing opportunities that
      happen at the <a href="http://jsconf.com">JSConf Family of events</a>.
    </p>
    <p>
      Interested in learning more? Be sure to read all about{' '}
      <Link to="/scholarships/">how to apply</Link> and{' '}
      <Link to="/scholarships/#want-to-contribute/">how to contribute</Link>.
    </p>
  </GridRow>
)

OpportunityScholarship.propTypes = {
  className: string,
  feature: bool
}

export default OpportunityScholarship
