import { array } from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import Page from '../Page'
import React from 'react'
import TeamList from './TeamList'

import './TeamPage.css'

const TeamPage = ({
  mcs,
  nodeboats,
  nodebots,
  nodecopter,
  noderockets,
  staff
}) => (
  <DefaultLayout description="Meet the folks behind the show!" title="Our Team">
    <Page className="TeamPage">
      <TeamList members={staff} title="Staff">
        The folks behind the scenes making it all happen.
      </TeamList>
      <TeamList members={mcs} title="MCs">
        Our amazing MCs will make sure everyone is having a blast and the show
        runs smoothly!
      </TeamList>
      <TeamList members={nodebots} title="NodeBots">
        NodeBots is one of the easiest ways to learn robotics with Javascript.
        This team of experts will teach you everything you need to know!
      </TeamList>
      <TeamList members={nodeboats} title="NodeBoats">
        What could be better than mixing electronics with water? Take to the
        opens seas by building your very own Javascript-powered boat.
      </TeamList>
      <TeamList members={nodecopter} title="NodeCopter">
        Want to take Javascript knowledge to the next level? Learn how to
        control a quadcopter using the power of Javascript! But please, steer
        clear of the chandaliers.
      </TeamList>
      <TeamList members={noderockets} title="NodeRockets">
        Why limit yourself to the confines of an enclosed space? Launch a
        microcontroller hundreds of feet in the air and rely on your Javascript
        skills to get it safely back down to Earth!
      </TeamList>
    </Page>
  </DefaultLayout>
)

TeamPage.propTypes = {
  mcs: array.isRequired,
  nodeboats: array.isRequired,
  nodebots: array.isRequired,
  nodecopter: array.isRequired,
  noderockets: array.isRequired,
  staff: array.isRequired
}

export default TeamPage
