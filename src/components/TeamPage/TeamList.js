import { any, array, string } from 'prop-types'
import ContentBlock from '../ContentBlock'
import React from 'react'
import TeamMember from './TeamMember'

function renderItem (item) {
  return <TeamMember key={item.name} {...item}/>
}

const TeamList = ({ children, title, members }) => {
  let maxCols = 3
  if (members.length !== 3 && members.length <= 4) {
    maxCols = members.length
  }
  return (
    <ContentBlock
      className="TeamList"
      layout={Array(maxCols)
        .fill('1')
        .join('')}
      layoutItems={members}
      renderLayoutItem={renderItem}
      title={title}
    >
      {children}
    </ContentBlock>
  )
}

TeamList.propTypes = {
  children: any,
  members: array.isRequired,
  title: string.isRequired
}

export default TeamList
