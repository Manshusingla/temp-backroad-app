import React from 'react'

const PageLink = ({href,text,itemclass}) => {
  return (
    <>
      <li>
        <a rel="noreferrer" href={href} className={itemclass}>
          {text}
        </a>
      </li>
    </>
  )
}

export default PageLink
