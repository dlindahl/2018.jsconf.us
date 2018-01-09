import { array, shape } from 'prop-types'
import React from 'react'
import SchedulePage from '../components/SchedulePage'

const Schedule = ({ data: { dayOne, dayThree } }) => (
  <SchedulePage
    dayOne={dayOne.edges.map((edge) => edge.node)}
    dayThree={dayThree.edges.map((edge) => edge.node)}
  />
)

Schedule.propTypes = {
  data: shape({
    dayOne: shape({
      edges: array.isRequired
    }).isRequired,
    dayThree: shape({
      edges: array.isRequired
    }).isRequired
  }).isRequired
}

export default Schedule

export const query = graphql`
  query ScheduleQuery {
    dayOne: allDayOneJson {
      edges {
        node {
          duration
          description
          trackA {
            speaker
            title
          }
          trackB {
            speaker
            title
          }
        }
      }
    }
    dayThree: allDayThreeJson {
      edges {
        node {
          duration
          description
          trackA {
            speaker
            title
          }
          trackB {
            speaker
            title
          }
        }
      }
    }
  }
`
