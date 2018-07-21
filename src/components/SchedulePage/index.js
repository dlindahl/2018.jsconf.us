import { array } from 'prop-types'
import Day from './Day'
import DefaultLayout from '../../layouts/DefaultLayout'
import Golf from './Activities/Golf'
import LinkButton from '../LinkButton'
import NodeBoats from './Activities/NodeBoats'
import NodeBots from './Activities/NodeBots'
import NodeCopter from './Activities/NodeCopter'
import NodeRockets from './Activities/NodeRockets'
import Poolside from './Activities/Poolside'
import React from 'react'
import ScheduleNav from './ScheduleNav'
import './SchedulePage.css'
import SeaKayaking from './Activities/SeaKayaking'
import Shuttle from './Activities/Shuttle'
import SupBoarding from './Activities/SupBoarding'
import Surfing from './Activities/Surfing'
import TimeTable from './TimeTable'
import Zoo from './Activities/Zoo'

const CYOA_DAY_MSG = `Our "Choose Your Own Adventure" day is what sets JSConf US apart from other conferences. It provides you with an extraordinary opportunity to socialize with the brightest minds in our community while providing a brief respite from the mind-bending material delivered during our talks. Activities are provided on a first come, first serve basis and registration details will be emailed to all registered attendees.`
const CYOA_ACTIONS = [
  <LinkButton
    href="https://ti.to/jsconf-us/jsconf-us-2018-activity-registration"
    key={0}
    primary
  >
    Reserve Your Activity
  </LinkButton>
]

const SchedulePage = ({ dayFour, dayOne, dayThree, dayTwo, dayZero }) => (
  <DefaultLayout description="Schedule for JSConf US 2018" title="Schedule">
    <ScheduleNav>
      <Day title="Day of Arrival">
        <TimeTable date="2018-08-20T00:00Z" schedule={dayZero}/>
      </Day>
      <Day
        align="left"
        content={
          <div>
            <h3 className="Day-Subheading">What is Track A?</h3>
            <p>
              Track A includes a curated set of speakers that have submitted
              their proposals and have successfully made it through our
              selection process.
            </p>
            <h3 className="Day-Subheading">What is Track B?</h3>
            <p>
              The alternative track for JSConf US is driven by people like you!
              We have a very unique format in that we let anyone register to
              speak in a first-come, first-speaking format. These talks are
              generally from the full range of Node.js development and are some
              of the most exciting talks at JSConf.
            </p>
            <p>Registration opens on July 21st at 12pm ET / 9am PT!</p>
            <p>
              <center>
                <LinkButton
                  href="https://ti.to/jsconf-us/jsconf-us-2018-track-b"
                  primary
                >
                  Track B Registration
                </LinkButton>
              </center>
            </p>
          </div>
        }
        focus="Track B registrations opens July 21st"
        title="First Day of Talks"
      >
        <TimeTable date="2018-08-21T00:00Z" schedule={dayOne}/>
      </Day>
      <Day
        actions={CYOA_ACTIONS}
        content={CYOA_DAY_MSG}
        title="Day of Activities"
      >
        <NodeBoats/>
        <NodeBots/>
        <NodeCopter/>
        <NodeRockets/>
        <Golf/>
        <Poolside/>
        <Zoo/>
        <Surfing/>
        <SupBoarding/>
        <SeaKayaking/>
        <Shuttle/>
        <TimeTable date="2018-08-22T00:00Z" schedule={dayTwo}/>
      </Day>
      <Day title="Last Day of Talks">
        <TimeTable date="2018-08-23T00:00Z" schedule={dayThree}/>
      </Day>
      <Day title="Day of Departure">
        <TimeTable date="2018-08-24T00:00Z" schedule={dayFour}/>
      </Day>
    </ScheduleNav>
  </DefaultLayout>
)

SchedulePage.propTypes = {
  dayFour: array.isRequired,
  dayOne: array.isRequired,
  dayThree: array.isRequired,
  dayTwo: array.isRequired,
  dayZero: array.isRequired
}

export default SchedulePage
