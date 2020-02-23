import React from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

import { Header } from './Header'
import { Footer } from './Footer'

import { Global } from '../styles/Global.styles'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import breakpoints from '../styles/breakpoints'

const AppStyles = styled.main`
  max-width: 300px;
  margin: 0 auto;

  @media (${breakpoints.forLargePhoneUp}) {
    max-width: 380px;
  }

  @media (${breakpoints.forTabletPortraitUp}) {
    max-width: 480px;
  }

  @media (${breakpoints.forTabletLandscapeUp}) {
    max-width: 580px;
  }
`

export const Layout = ({ children }) => {
  const {
    title,
    description,
    githubUsername,
    instagramUsername,
    twitterUsername
  } = useSiteMetadata()
  return (
    <React.Fragment>
      <Normalize />
      <Global />
      <AppStyles>
        <Header siteTitle={title} siteDescription={description} />
        {children}
        <Footer
          github={githubUsername}
          instagram={instagramUsername}
          twitter={twitterUsername}
        />
      </AppStyles>
    </React.Fragment>
  )
}
