import { any, array, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import TeamMember from './TeamMember'

function componentize (member) {
  return <TeamMember key={member.name} {...member}/>
}

const TeamList = ({ children, title, members }) => {
  let maxCols = 3
  if (members.length !== 3 && members.length <= 4) {
    maxCols = members.length
  }
  return (
    <ContentBlock className="TeamList" title={title}>
      <p>{children}</p>
      <ul className="TeamPageList" data-cols={maxCols}>
        {members.map(componentize)}
      </ul>
    </ContentBlock>
  )
}

TeamList.propTypes = {
  children: any,
  members: array.isRequired,
  title: string.isRequired
}

export default TeamList
