import { element } from 'prop-types'
import Link from 'gatsby-link'
import LinkButton from '../LinkButton'
import React from 'react'

import './Header.css'

export default class Header extends React.Component {
  static propTypes = {
    children: element
  }
  state = {
    expanded: false
  }
  handleClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }))
  }
  render () {
    return (
      <header className="Header">
        <div className="Header-Content">
          <aside className="Header-Brand">
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
            <button
              aria-controls="navbarContent"
              aria-expanded={this.state.expanded}
              aria-label="Toggle Navigation"
              className="Header-NavbarToggler"
              onClick={this.handleClick}
            >
              Open Menu
            </button>
            <div className="Header-NavbarCollapsibleContent" id="navbarContent">
              <button
                aria-expanded={this.state.expanded}
                className="Header-NavbarCloseButton"
                onClick={this.handleClick}
              >
                Close Menu
              </button>
              <ul className="Header-LinkItems">
                <li className="Header-LinkItem">
                  <a className="Header-Link" href="/call-for-speakers/">
                    Call for Speakers
                  </a>
                </li>
                <li className="Header-LinkItem">
                  <a className="Header-Link" href="/tickets/">
                    Attend
                  </a>
                </li>
                <li className="Header-LinkItem">
                  <a className="Header-Link" href="/schedule/">
                    Schedule
                  </a>
                </li>
                <li className="Header-LinkItem">
                  <a className="Header-Link" href="/scholarship/">
                    Scholarship
                  </a>
                </li>
                <li className="Header-LinkItem">
                  <a className="Header-Link" href="/sponsors/">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <aside className="Header-CallToAction">
            <LinkButton href="https://ti.to/jsconf-us/jsconf-us-2018" invert>
              Buy Tickets
            </LinkButton>
          </aside>
        </div>
        {this.props.children}
      </header>
    )
  }
}
