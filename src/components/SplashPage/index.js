import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'

import './SplashPage.css'

const Homepage = (props) => (
  <DefaultLayout>
    <div className="splash">
      <div className="SplashPage-Background">
        <div className="SplashPage-BackgroungGradient"/>
        <div className="SplashPage-BackgroundImage"/>
      </div>
      <article className="SplashPage-Hero">
        <div className="SplashPage-CallToAction">
          <div className="SplashPage-CallToActionWrapper">
            <div className="SplashPage-CallToActionOverlay"/>
            <div className="SplashPage-CallToActionContent">
              <h1 className="SplashPage-CallToActionLede">JSConf US 2018</h1>
              <h2 className="SplashPage-CallToActionText">
                August 21st - August 23rd<br/>Carlsbad, California
              </h2>
            </div>
          </div>
        </div>
        <div className="SplashPage-BodyCallToAction">
          <a
            className="SplashPage-BodyCallToActionLink"
            href="http://bit.ly/JSConfUS2018sponsorship"
          >
            Want to sponsor?
          </a>
        </div>
        <footer className="SplashPage-Footer">
          <aside className="SplashPage-ComingSoon">
            Call for Proposals, Scholarship, and Ticket Information coming soon!<br/>
            <a href="http://jsconf.com/codeofconduct.html">Code of Conduct</a>
          </aside>
        </footer>
      </article>
    </div>
  </DefaultLayout>
)

export default Homepage
