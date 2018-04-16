import React from 'react'
import { string } from 'prop-types'

import './TitleBlock.css'

const TitleBlock = ({ title }) => <div className="TitleBlock">{title}</div>

TitleBlock.propTypes = {
  title: string.isRequired
}

export default TitleBlock
