import { element } from 'prop-types'
import Link from 'gatsby-link'
import React from 'react'

import './Header.css'

const Header = ({ children }) => (
  <header className="Header">
    <div className="Header-Content">
      <aside>
        <Link to="/">
          <img
            alt="JSConf US"
            className="Header-LogoImg"
            height="100"
            src="/img/header/logo.png"
            width="100"
          />
        </Link>
      </aside>
      <nav className="Header-Nav">
        <ul className="Header-LinkItems">
          <li className="Header-LinkItem">
            <a className="Header-Link" href="/call-for-speakers/">
              Call for Speakers
            </a>
          </li>
          <li className="Header-LinkItem">
            <a className="Header-Link" href="/schedule/">
              Schedule
            </a>
          </li>
          <li className="Header-LinkItem">
            <a className="Header-Link" href="/sponsors/">
              Sponsors
            </a>
          </li>
        </ul>
      </nav>
      <aside className="Header-CallToAction"/>
    </div>
    {children}
  </header>
)

Header.propTypes = {
  children: element
}

export default Header
