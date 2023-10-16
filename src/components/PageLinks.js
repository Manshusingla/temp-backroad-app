import React from 'react'
import { pageLink} from '../data'
import PageLink from './PageLink'

const PageLinks = ({parentClass,itemclass}) => {
  return (
    <>
      <ul className={parentClass} id="nav-links">
        {pageLink.map((link) => {
          return (
            <PageLink key={link.id} {...link} itemclass={itemclass}/>
            // <li key={link.id}>
            //   <a rel="noreferrer" href={link.href} className={itemclass}>
            //     {link.text}
            //   </a>
            // </li>
          )
        })}
      </ul>

    </>
  )
}

export default PageLinks