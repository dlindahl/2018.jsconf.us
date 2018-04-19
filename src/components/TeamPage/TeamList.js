import { any, array, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import TeamMember from './TeamMember'

function renderItem (item) {
  return <TeamMember key={item.name} {...item}/>
}

const TeamList = ({ children, title, members }) => (
  <ContentBlock
    className="TeamList"
    layoutClassName="TeamList-Layout"
    layoutItems={members}
    renderLayoutItem={renderItem}
    title={title}
  >
    {children}
  </ContentBlock>
)

TeamList.propTypes = {
  children: any,
  members: array.isRequired,
  title: string.isRequired
}

export default TeamList
