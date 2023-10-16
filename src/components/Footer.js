import React from 'react'
// import { pageLink} from '../data'
import {socialLink } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        {/* <ul className="footer-links">
          {pageLink.map((link)=>{
            return (
              <li key={link.id}>
                <a rel="noreferrer" href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
        */}
        <PageLinks parentClass="footer-links" itemclass="footer-link" />
        <ul className="footer-icons">
          {socialLink.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass='footer-icon'/>
        
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
