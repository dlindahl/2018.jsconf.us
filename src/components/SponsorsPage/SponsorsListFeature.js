import { array } from 'prop-types'
import GridRow from '../GridRow'
import React from 'react'
import SponsorsList from './SponsorsList'

function groupBy (items, key) {
  return items.reduce((set, item) => {
    if (item.frontmatter.visible) {
      set[item.frontmatter[key]] = set[item.frontmatter[key]] || []
      set[item.frontmatter[key]].push(item)
    }
    return set
  }, {})
}

const SponsorsListFeature = ({ data }) => {
  if (data && data.length === 0) {
    return null
  }
  const items = groupBy(data, 'level')
  return (
    <GridRow feature>
      <SponsorsList items={items.platinum} title="Platinum Sponsors"/>
      <SponsorsList items={items.gold} title="Gold Sponsors"/>
      <SponsorsList items={items.silver} title="Silver Sponsors"/>
      <SponsorsList items={items.diversity} title="Diversity Sponsors"/>
      <SponsorsList items={items.community} title="Community Sponsors"/>
    </GridRow>
  )
}

SponsorsListFeature.propTypes = {
  data: array
}

export default SponsorsListFeature
