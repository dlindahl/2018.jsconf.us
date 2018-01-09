import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'

const DiversityInclusion = () => (
  <GridRow feature title="Diversity &amp; Inclusion">
    <p>
      As we bring JSConf back to the US, we're committed to creating a diverse
      and inclusive environment. Part of that commitment includes our diversity
      scholarship, a program designed to make it easier for people from
      under-represented groups access to the many amazing opportunities that
      happen at <a href="http://jsconf.com">JSConf Family of events</a>.
    </p>
    <p>
      <Link to="/scholarships/">Get to know more</Link> about how to apply or
      how to contribute
    </p>
  </GridRow>
)

export default DiversityInclusion
