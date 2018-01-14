import GridRow from '../GridRow'
import Link from 'gatsby-link'
import React from 'react'
import { string } from 'prop-types'

const CodeOfConduct = ({ className }) => (
  <GridRow className={className} feature title="Code of Conduct">
    <p>
      JSConf was one of the first conferences to implement and enforce a
      conference Code of Conduct. This year is no different. We expect, and
      require, all organizers, sponsors, speakers, volunteers, delegates, and
      attendees of all levels to adhere to our{' '}
      <Link to="/code-of-conduct/">Code of Conduct</Link>
    </p>
  </GridRow>
)

CodeOfConduct.propTypes = {
  className: string
}

export default CodeOfConduct
