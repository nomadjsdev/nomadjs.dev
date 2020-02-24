import React from 'react'
import styled from 'styled-components'

import spaces from '../styles/spaces'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: ${spaces.standardSpacing};
`

const Element = styled.p`
  margin-right: ${spaces.standardSpacing};
`

export const Footer = ({ github, instagram, twitter }) => (
  <Container>
    <Element>
      <a
        href={`https://github.com/${github}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>
    </Element>
    <Element>
      <a
        href={`https://instagram.com/${instagram}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </a>
    </Element>
    {/* <Element>
      <a
        href={`https://twitter.com/${twitter}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Twitter
      </a>
    </Element> */}
  </Container>
)
