import 'typeface-oswald'
import 'typeface-quicksand'

import { createGlobalStyle } from 'styled-components'

import colors from './colors'
import typography from './typography'

export const Global = createGlobalStyle`
body {
  background: ${colors.background};
  color: ${colors.primaryText};
  font-family: ${typography.bodyText}
}

a {
  color: ${colors.link}
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${typography.headerText};
  color: ${colors.headerText};
}
`
