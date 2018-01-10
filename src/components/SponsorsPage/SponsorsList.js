import { arrayOf, shape, string } from 'prop-types'
import React from 'react'

import './SponsorsList.css'

const SponsorsList = ({ items, title }) => {
  if (!items || (items && !items.length)) {
    return null
  }
  return (
    <section className="SponsorsList">
      <h2>{title}</h2>
      <div className="SponsorsList-Items">
        {items.map((item) => {
          const { level, logo, title: name } = item.frontmatter
          return (
            <a
              aria-label={`${name} - A ${level}-level sponsor`}
              className="SponsorsList-Item"
              href={item.fields.slug}
              key={name}
              title={`${name} - A ${level}-level sponsor`}
            >
              {logo && <img alt="" src={logo}/>}
              {!logo && name}
            </a>
          )
        })}
      </div>
    </section>
  )
}

SponsorsList.propTypes = {
  items: arrayOf(
    shape({
      event: string,
      name: string
    }).isRequired
  ),
  title: string.isRequired
}

export default SponsorsList
