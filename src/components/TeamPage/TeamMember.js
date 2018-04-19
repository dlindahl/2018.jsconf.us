import React from 'react'
import { arrayOf, string } from 'prop-types'
import './TeamMember.css'

const TeamMember = ({ className, company, href, name, profileUrl, roles }) => {
  const details = roles.join(', ') || company
  return (
    <li className={`TeamMember ${className}`}>
      <a
        className="TeamMember-Link"
        href={href}
        rel="nooppener,noreferrer"
        target="_blank"
      >
        <picture className="TeamMember-Photo">
          <img
            alt={`Headshot of ${name}`}
            className="TeamMember-ProfileImg"
            src={profileUrl}
          />
        </picture>
      </a>
      <div className="TeamMember-Bio">
        <div className="TeamMember-Name">{name}</div>
        <div className="TeamMember-Details">{details}</div>
      </div>
    </li>
  )
}

TeamMember.defaultProps = {
  profileUrl: 'http://via.placeholder.com/300x190',
  roles: []
}

TeamMember.propTypes = {
  className: string,
  company: string,
  href: string.isRequired,
  name: string.isRequired,
  profileUrl: string.isRequired,
  roles: arrayOf(string).isRequired
}

export default TeamMember
