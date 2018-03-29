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
    <GridRow className="Schedule-Day" id="arrival" title="Monday, August 20th">
      <h2 id="welcome-reception">Welcome Reception</h2>
      <h3>6:00PM - 9:00PM</h3>
      <p>
        After a long day of travel, it is time to head to the main hotel for an
        evening welcome reception and social gathering. Meet old friends, make
        new friends, and enjoy some fine refreshments and appetizers!
      </p>
      <Campfires/>
    </GridRow>
    <GridRow className="Schedule-Day" id="day-one" title="Tuesday, August 21st">
      <h2>Conference Tracks</h2>

      <h3>What is Track A?</h3>
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
      <TimeTable items={dayOne} startTime="2018-08-21T07:30Z"/>

      <h2>Day One Closing Party</h2>
      <h3>7:00PM - 11:00PM</h3>

      <p>Details coming soon!</p>

      <Campfires/>
    </GridRow>
    <GridRow
      className="Schedule-Day"
      id="day-two"
      title="Wednesday, August 22nd"
    >
      <h2>Day of Activities</h2>

      <h2>NodeRockets</h2>
      <h3>9:00AM - 6:00PM</h3>
      <p>
        3... 2... 1... BLAST OFF!!! Why stop with just Earth, it is time to take
        JavaScript to outer space!
      </p>
      <p>
        Join us for the return of NodeRockets as we combine all the power of
        hobby rockets with all the geekery of Node.js. Sign up, flight control,
        as we take to the sky, terrify anyone on the driving range, and break
        the altitude barrier WITH CODE!
      </p>

      <h2>NodeBoats</h2>
      <h3>9:00AM - 6:00PM</h3>
      <p>
        Take the mission of spreading JavaScript to every corner of the world to
        its next logical conclusion, the water!
      </p>
      <p>
        Join a worthy crew (or cross the seas solo) to hack together a boat (or
        a boat-like floaty object) using Node.js to bring the seas under your
        control.
      </p>
      <p>
        <strong>Note:</strong> You may get wet on this ride as you will
        undoubtedly need to rescue your vessel at least once. Dress
        appropriately!
      </p>

      <h2>NodeBots</h2>
      <h3>9:00AM - 6:00PM</h3>
      <p>
        Team up (or go solo) to hack together Arduino-based robots, all using
        just JavaScript!
      </p>
      <p>
        If you have no idea what an LED is, or a resistor for that matter, have
        no fear! NodeBot experts will be on-hand to help you hack, solder, and
        3D print your way to a full fledged NodeBot!
      </p>

      <h2>NodeCopter</h2>
      <h3>9:00AM - 6:00PM</h3>
      <p>
        Team up (or go solo), hack a quadcopter using Node.js, and make a flying
        robot do your bidding!
      </p>
      <p>
        The NodeCopter event originally launched at JSConf EU and now we take it
        to the next level at JSConf US. Just watch out for the light fixtures!
      </p>

      <h2>Poolside Relaxation</h2>
      <p>
        Want to be outside, but still need access to the Internet? Come on down
        to the Omni's Edge Pool where you can get a nice cold drink, a bit of
        food, WiFi, and cool off with a dip in the pool.
      </p>
      <p>
        Have kids along for the ride? Are you a kid yourself? Head over to the
        kids pool and check out their sandy beach or take a slide down not one,
        but TWO waterslides!
      </p>
      <p>
        Even if you are registered for another event, stop by the pool for a
        bit! Who knows, you may even catch a repeat of synchronized.swimming.js.
      </p>

      <h2>Golf Tournament</h2>
      <h3>Time TBA</h3>
      <p>
        Take advantage of the La Costa's world-class Champions or Legends golf
        course.
      </p>
      <p>
        The tournament will be organized into teams of four (4) with all teams
        playing scramble format (AKA best shot of team is taken). Solo players
        will be formed into teams. Golf attire will be required: collared
        shirts, no jeans. Club rentals are available or you can bring your own.
      </p>

      <h2>Surf Lessons at La Jolla</h2>
      <h3>1:00PM - 5:00PM</h3>
      <p>What could be more Southern Californian than surfing?</p>
      <p>
        Stroll out onto the beach and prepare for some fun. Professional
        instructors will teach you essential fundamentals which guide you
        through the amazing process of learning to surf. No matter your skill
        level, you will learn the basics of board handling, positioning,
        paddling, various techniques on getting to your feet, surfing etiquette,
        ocean knowledge, and water safety.
      </p>
      <p>
        The instructors will be in the water assisting you into waves and giving
        you tips after each ride to help you successfully ride your next wave to
        the beach. The lesson will start with an instruction session on the
        beach that will last approximately 20 minutes before getting into the
        water with your instructor.
      </p>
      <p>
        <strong>Note:</strong> You will get wet! Please bring a towel, extra
        clothes, and a bathing suit. Wetsuits will be provided. Space is
        limited, register early!
      </p>

      <h2>Stand-Up Paddle Boarding Lessons at La Jolla Shores</h2>
      <h3>1:00PM - 5:00PM</h3>
      <p>What better way to play on the water than stand-up paddle boarding?</p>
      <p>
        Stand-up paddle board lessons for beginners start in the sand with
        instruction on paddling, stance, and balance. Your instructor will cover
        ocean safety, reading waves, and of course, surfing etiquette. Then it’s
        into the surf! With your instructor’s guidance, you will paddle yourself
        around the ocean, taking in breathtaking views of La Jolla, enjoying the
        company of such marine life as harbor seals, sea lions, dolphins, fish,
        and shore birds.
      </p>
      <p>
        <strong>Note:</strong> You will get wet! Please bring a towel, extra
        clothes, and a bathing suit. Wetsuits will be provided. Space is
        limited, register early!
      </p>

      <h2>Sea Cave Kayaking</h2>
      <h3>1:00PM - 5:00PM</h3>
      <p>
        Do you like to play in the open ocean waters, the cool sea spray
        whispering over you? Then join us for an exciting day of adventure and
        exploration!
      </p>
      <p>
        You will be kayaking in one of the many breathtaking San Diego County
        ocean water areas – La Jolla. If you've ever wanted to try sea kayaking
        or just want to enjoy the thrill once again, this is the experience for
        you! After donning your wetsuit, you'll be paired up into a tandem
        kayak, and head right into the water, receiving instruction as you go.
      </p>
      <p>
        <strong>Note:</strong> You will get wet! Please bring a towel, extra
        clothes, and a bathing suit. Wetsuits will be provided. Space is
        limited, register early!
      </p>

      <h2>Safari Zoo Adventure</h2>
      <h3>12:00PM - 4:00PM</h3>
      <p>
        The San Diego Safari Park is a one-of-a-kind 2,200 acre wildlife
        preserve where over 4,000 rare and endangered species can be seen in
        habitats replicating their native homelands. Take a ride on the African
        Tram – it’s the absolute best way to see the diverse collection of
        animals on the African Outpost. Then, take your time checking out the
        extensive individual animal enclosures or catch a show! There are so
        many options to choose from such as the Tiger Keeper Talk, Frequent
        Flyers Bird Show, or the crowd favorite, Shiley’s Cheetah Run!
      </p>
      <p>
        Children and Significant Other tickets will be available for purchase.
      </p>

      <h2>Downtown Shuttle</h2>
      <h3>6:00PM - 11:30PM</h3>

      <p>
        Enjoy some freetime and head over to historic download Carlsbad,
        California's coastal gateway! Downtown Carlsbad offers award-winning
        restaurants, boutique shopping, and amazing views of the Pacific Ocean.
      </p>
      <p>
        The Downtown Shuttle will loop continuously from the hotel lobby to
        Carlsbad Village. The final pick up to return back to the Omni will be
        11:30PM. You must be on a return shuttle by 11:30PM at the latest or
        find your own means of transportation back.
      </p>
      <Campfires/>
    </GridRow>
    <GridRow
      className="Schedule-Day"
      id="day-three"
      title="Thursday, August 23rd"
    >
      <TimeTable items={dayThree} startTime="2018-08-23T07:30Z"/>
      <h2>Conference Closing Party</h2>
      <h3>7:00PM - 11:00PM</h3>

      <p>Details coming soon!</p>
      <Campfires/>
    </GridRow>
    <GridRow
      className="Schedule-Day"
      id="departure"
      title="Friday, August 24th"
    >
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
