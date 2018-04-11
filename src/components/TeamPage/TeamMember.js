import React from 'react'
import { arrayOf, string } from 'prop-types'
import './TeamMember.css'

const TeamMember = ({ name, profileUrl, roles, twitter }) => (
  <li className="TeamMember">
    <a
      className="TeamMember-Link"
      href={`https://twitter.com/${twitter}`}
      rel="nooppener,noreferrer"
      target="_blank"
    >
      <picture className="TeamMember-Photo">
        <img
          alt={`Headshot of ${name}`}
          className="TeamMember-ProfileImg"
          src={profileUrl}
        />
      </picture>{' '}
    </a>
    <div className="TeamMember-Bio">
      <div className="TeamMember-Name">{name}</div>
      <div className="TeamMember-Roles">{roles.join(', ')}</div>
    </div>
  </li>
)

TeamMember.defaultProps = {
  profileUrl: 'http://via.placeholder.com/300x190',
  roles: []
}

TeamMember.propTypes = {
  name: string.isRequired,
  profileUrl: string.isRequired,
  roles: arrayOf(string).isRequired,
  twitter: string.isRequired
}

export default TeamMember
