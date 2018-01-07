import Link from 'gatsby-link'
import LinkButton from '../LinkButton'
import React from 'react'

import './Header.css'

const Header = () => (
  <header className="Header">
    <div className="Header-Background"/>
    <div className="Header-Content">
      <aside>
        <Link to="/">
          <img
            alt="JSConf US"
            height="50"
            src="http://2015.jsconf.us/img/js-sized.png"
            width="50"
          />
        </Link>
      </aside>
      <nav className="Header-Nav">
        <ul className="Header-Links">
          <li className="Header-Link">
            <a href="/call-for-speakers/">Call for Speakers</a>
          </li>
          <li className="Header-Link">
            <a href="/scholarships/">Scholarships</a>
          </li>
          <li className="Header-Link">
            <a href="/schedule/">Schedule</a>
          </li>
          <li className="Header-Link">
            <a href="/speakers/">Speakers</a>
          </li>
          <li className="Header-Link">
            <a href="/sponsors/">Sponsors</a>
          </li>
        </ul>
      </nav>
      <aside>
        <LinkButton href="https://tickets.jsconf.us">Get Tickets</LinkButton>
      </aside>
    </div>
  </header>
)

export default Header
