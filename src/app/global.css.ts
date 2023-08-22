import { globalStyle } from '@vanilla-extract/css'
import { vars } from './utils.css'

// ----------------------------------
// Global styles
// ----------------------------------
globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0
})

globalStyle('html', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      colorScheme: 'dark'
    }
  }
})

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden'
})

globalStyle('body', {
  color: vars.foreground.rgb,
  background: `linear-gradient(to bottom, transparent, rgb(${vars.background.end})) rgb(${vars.background.start})`,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: vars.foreground.dark.rgb,
      background: `linear-gradient(to bottom, transparent, rgb(${vars.background.dark.end})) rgb(${vars.background.dark.start})`
    }
  }
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
})
