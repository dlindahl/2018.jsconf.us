import Link from 'gatsby-link'
import React from 'react'

import './Footer.css'

const COPYRIGHT = `Copyright &copy; ${new Date().getFullYear()} Iterative Designs`

const Footer = () => (
  <footer className="Footer">
    <section className="Footer-LinkGroups">
      <nav>
        <header className="Footer-LinkGroupHeader">Event Details</header>
        <ul className="Footer-LinkGroup">
          <li className="Footer-Link">
            <Link to="/tickets/">Attend</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/tickets/">Speakers</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/schedule/">Schedule</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/scholarships/">Opportunity Scholarship</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/team/">Our Team</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <header className="Footer-LinkGroupHeader">Get Involved</header>
        <ul className="Footer-LinkGroup">
          <li className="Footer-Link">
            <Link to="/call-for-speakers/">Call for Speakers</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/sponsors/">Become a Sponsor</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/scholarships/#want-to-contribute">
              Scholarship Contributions
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <header className="Footer-LinkGroupHeader">
          Diversity &amp; Inclusion
        </header>
        <ul className="Footer-LinkGroup">
          <li className="Footer-Link">
            <Link to="/accessibility/">Accessibility Statement</Link>
          </li>
          <li className="Footer-Link">
            <Link to="/code-of-conduct/">Code of Conduct</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <header className="Footer-LinkGroupHeader">Past Events</header>
        <ul className="Footer-LinkGroup">
          <li className="Footer-Link">
            <a href="http://lastcall.jsconf.us">Last Call</a>
          </li>
          <li className="Footer-Link">
            <a href="http://2015.jsconf.us">2015</a>
          </li>
          <li className="Footer-Link">
            <a href="http://2014.jsconf.us">2014</a>
          </li>
          <li className="Footer-Link">
            <a href="http://2013.jsconf.us">2013</a>
          </li>
          <li className="Footer-Link">
            <a href="http://2012.jsconf.us">2012</a>
          </li>
        </ul>
      </nav>
    </section>
    <aside
      className="Footer-Legal"
      dangerouslySetInnerHTML={{ __html: COPYRIGHT }}
    />
  </footer>
)

export default Footer
