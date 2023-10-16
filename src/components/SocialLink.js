import React from 'react'

const SocialLink = ({ href, icon,itemClass }) => {
  return (
    <>
      {' '}
      <li >
        <a rel="noreferrer" href={href} target="_blank" className={itemClass}>
          <i className={icon}></i>
        </a>
      </li>
    </>
  )
}

export default SocialLink