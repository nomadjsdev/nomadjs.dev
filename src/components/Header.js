import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import colors from '../styles/colors'

const Container = styled.div``

const HeaderLink = styled(Link)`
  text-decoration: none;
`

const HeaderText = styled.h1`
  color: ${colors.primaryText};
`

const Span = styled.span`
  color: ${colors.highlightText};
`

export const Header = () => (
  <Container>
    <HeaderLink to='/'>
      <HeaderText>
        {`< `}nomad<Span>JS</Span>dev{` />`}
      </HeaderText>
    </HeaderLink>
  </Container>
)
