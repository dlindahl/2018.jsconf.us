import { array, shape } from 'prop-types'
import { nodes } from '../util/array'
import React from 'react'
import SchedulePage from '../components/SchedulePage'

const Schedule = ({ data: { dayFour, dayOne, dayThree, dayTwo, dayZero } }) => (
  <SchedulePage
    dayFour={nodes(dayFour).slice(1)}
    dayOne={nodes(dayOne).slice(1)}
    dayThree={nodes(dayThree).slice(1)}
    dayTwo={nodes(dayTwo).slice(1)}
    dayZero={nodes(dayZero).slice(1)}
  />
)

Schedule.propTypes = {
  data: shape({
    dayFour: shape({
      edges: array.isRequired
    }).isRequired,
    dayOne: shape({
      edges: array.isRequired
    }).isRequired,
    dayThree: shape({
      edges: array.isRequired
    }).isRequired,
    dayZero: shape({
      edges: array.isRequired
    }).isRequired
  }).isRequired
}

export default Schedule

export const query = graphql`
  query ScheduleQuery {
    dayZero: allDayZeroJson {
      edges {
        node {
          anchor
          contentTag
          description
          duration
          endTime
          startTime
          title
        }
      }
    }
    dayFour: allDayFourJson {
      edges {
        node {
          anchor
          contentTag
          description
          duration
          endTime
          startTime
          title
        }
      }
    }
    dayOne: allDayOneJson {
      edges {
        node {
          anchor
          components {
            description
            href
            speakers {
              avatar
              name
            }
            title
          }
          contentTag
          description
          duration
          endTime
          startTime
          title
        }
      }
    }
    dayThree: allDayThreeJson {
      edges {
        node {
          anchor
          components {
            description
            speakers {
              avatar
              name
            }
            title
          }
          contentTag
          description
          duration
          endTime
          startTime
          title
        }
      }
    }
    dayTwo: allDayTwoJson {
      edges {
        node {
          anchor
          components {
            description
            title
          }
          contentTag
          description
          duration
          endTime
          focus
          startTime
          title
        }
      }
    }
  }
`
