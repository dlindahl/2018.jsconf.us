import { array } from 'prop-types'
import Campfires from './Campfires'
import DefaultLayout from '../../layouts/DefaultLayout'
import GridRow from '../GridRow'
import React from 'react'
import TimeTable from './TimeTable'

import './SchedulePage.css'

const SchedulePage = ({ dayOne, dayThree }) => (
  <DefaultLayout description="Schedule for JSConf US 2018" title="Schedule">
    <GridRow className="Schedule-NavRow">
      <nav className="Schedule-Nav">
        <ul className="Schedule-NavItems">
          <li className="Schedule-NavItem">
            <a href="#arrival">Arrival Day</a>
          </li>
          <li>
            <a href="#day-one">Day One</a>
          </li>
          <li>
            <a href="#day-two">Day Two</a>
          </li>
          <li>
            <a href="#day-three">Day Three</a>
          </li>
          <li>
            <a href="#departure">Departure Day</a>
          </li>
        </ul>
      </nav>
    </GridRow>
    <GridRow id="arrival" title="Monday, August 20th">
      <h2>Welcome Reception</h2>
      <h3>6:00PM - 9:00PM</h3>
      <p>
        After a long day of travel, it is time to head to the main hotel for an
        evening welcome reception and social gathering. Meet old friends, make
        new friends, and enjoy some fine refreshments and appetizers!
      </p>
      <Campfires/>
    </GridRow>
    <GridRow id="day-one" title="Tuesday, August 21st">
      <h2>Conference Tracks</h2>

      <h3>What is the Track A?</h3>
      <p>
        Traditionally a two track conference format, JSConf US provides a track
        of curated set of speakers as outlined here that have submitted the
        proposal and successfully made it through the selection process.
      </p>

      <h3>What is Track B?</h3>
      <p>
        The alternative track for JSConf US is driven by people like you! We
        have a very unique format for our second track in that we let anyone
        register to speak in a first-come, first-speaking format. These talks
        are generally from the full range of Node.js development and are some of
        the most exciting talks at JSConf. Registration opens about one month
        before the event, so keep your eyes peeled!
      </p>
      <TimeTable items={dayOne} startTime="2018-08-21T07:30-0700"/>

      <h2>Day One Closing Party</h2>
      <h3>7:00PM - 11:00PM</h3>

      <p>Details coming soon!</p>

      <Campfires/>
    </GridRow>
    <GridRow id="day-two" title="Wednesday, August 22nd">
      <h2>Day of Activities</h2>

      <p>Details coming soon!</p>

      <h2>Downtown Shuttle</h2>
      <h3>6:00PM - 11:30PM</h3>

      <p>Details coming soon!</p>
      <Campfires/>
    </GridRow>
    <GridRow id="day-three" title="Thursday, August 23rd">
      <TimeTable items={dayThree} startTime="2018-08-23T07:30-0700"/>
      <h2>Conference Closing Party</h2>
      <h3>7:00PM - 11:00PM</h3>

      <p>Details coming soon!</p>
      <Campfires/>
    </GridRow>
    <GridRow id="departure" title="Friday, August 24th">
      <h2>Brunch</h2>
      <h3>10:00AM - 2:00PM</h3>

      <p>
        Come enjoy brunch food with everyone at JSConf as a final gathering. The
        internet can be a stressful place and programmers often make it worse,
        but here at Relax.js you can hang out with some of the best and
        brightest and have a wonderful conversation over pancakes. Plan the rest
        of your day, show off some Node(Rocket|Bot|Boat|Copter) moves, or just
        discuss modules; whatever your final goals, the key is finish out the
        event happily.
      </p>

      <h2>Airport Shuttle</h2>
      <h3>7:00AM - 2:00PM</h3>

      <p>
        Time to head home! Our shuttles are ready to take you back to reality by
        way of San Diego International Airport. Details for the shuttles and
        other modes of transportation to the airport are available here. We hope
        you have experienced new things, made lasting friendships, and
        thoroughly enjoyed yourself.
      </p>
    </GridRow>
  </DefaultLayout>
)

SchedulePage.propTypes = {
  dayOne: array.isRequired,
  dayThree: array.isRequired
}

export default SchedulePage
