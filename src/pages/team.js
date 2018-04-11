import { array, shape } from 'prop-types'
import { nodes } from '../util/array'
import React from 'react'
import TeamPage from '../components/TeamPage'

const Team = ({
  data: { mcs, nodeboats, nodebots, nodecopter, noderockets, staff }
}) => (
  <TeamPage
    mcs={nodes(mcs)}
    nodeboats={nodes(nodeboats)}
    nodebots={nodes(nodebots)}
    nodecopter={nodes(nodecopter)}
    noderockets={nodes(noderockets)}
    staff={nodes(staff)}
  />
)

Team.propTypes = {
  data: shape({
    mcs: shape({
      edges: array.isRequired
    }).isRequired,
    nodeboats: shape({
      edges: array.isRequired
    }).isRequired,
    nodebots: shape({
      edges: array.isRequired
    }).isRequired,
    nodecopter: shape({
      edges: array.isRequired
    }).isRequired,
    noderockets: shape({
      edges: array.isRequired
    }).isRequired,
    staff: shape({
      edges: array.isRequired
    }).isRequired
  }).isRequired
}

export default Team

export const query = graphql`
  query TeamQuery {
    mcs: allMcsJson {
      edges {
        node {
          name
          profileUrl
          roles
          twitter
        }
      }
    }
    nodeboats: allNodeboatsJson {
      edges {
        node {
          name
          profileUrl
          twitter
        }
      }
    }
    nodebots: allNodebotsJson {
      edges {
        node {
          name
          profileUrl
          twitter
        }
      }
    }
    nodecopter: allNodecopterJson {
      edges {
        node {
          name
          profileUrl
          twitter
        }
      }
    }
    noderockets: allNoderocketsJson {
      edges {
        node {
          name
          profileUrl
          twitter
        }
      }
    }
    staff: allStaffJson {
      edges {
        node {
          name
          profileUrl
          roles
          twitter
        }
      }
    }
  }
`
