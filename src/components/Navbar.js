import React from 'react'
import logo from '../images/logo.svg'
// import { pageLink } from '../data'
import {socialLink } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* left this comment on purpose  */}
          <PageLinks parentClass="nav-links" itemclass="nav-link" />
          <ul className="nav-icons">
            {socialLink.map((link) => {
              return (
           <SocialLink key={link.id} {...link} itemClass='nav-icon'/>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
