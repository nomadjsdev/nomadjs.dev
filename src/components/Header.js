import React from 'react'
import { Link } from 'gatsby'

export const Header = ({ siteTitle, siteDescription }) => (
  <div>
    <Link to='/'>
      <h1>{siteTitle}</h1>
    </Link>
    <p>{siteDescription}</p>
  </div>
)
