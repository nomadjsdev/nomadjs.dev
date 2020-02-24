import 'typeface-oswald'
import 'typeface-quicksand'

import { createGlobalStyle } from 'styled-components'

import colors from './colors'
import spaces from './spaces'
import typography from './typography'

export const Global = createGlobalStyle`
  body {
    background: ${colors.background};
    color: ${colors.primaryText};
    font-family: ${typography.bodyText};
  }

  p {
    font-size: 1.2em;
    line-height: 1.3em;
  }

  a {
    color: ${colors.link}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.headerText};
    color: ${colors.headerText};
  }

  blockquote {
    margin: ${spaces.standardSpacing} 0;
    font-style: italic;
    color: ${colors.highlightText};
  }

  ul {
    font-size: 1.1em;
    line-height: 1.3em;
    padding-inline-start: ${spaces.standardSpacing};
  }

  li {
    margin: 5px 0;
  }

  code {
    white-space: nowrap;
    background: ${colors.backgroundDarker};
    padding: 1px 2px;
  }
`
