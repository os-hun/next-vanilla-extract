import { style } from '@vanilla-extract/css'
import { vars } from './utils.css'

//----------------------------------
// Main
//----------------------------------
export const main = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6rem',
  minHeight: '100vh'
})

export const code = style({
  fontWeight: 700,
  fontFamily: vars.font.family
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(25%, auto))',
  maxWidth: '100%',
  width: vars.maxWidth
})

// ----------------------------------
// Description
// ----------------------------------
export const description = style({
  display: 'inherit',
  justifyContent: 'inherit',
  alignItems: 'inherit',
  fontSize: '0.85rem',
  maxWidth: vars.maxWidth,
  width: '100%',
  zIndex: 2,
  fontFamily: vars.font.family
})

export const descriptionAnchor = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem'
})

export const descriptionText = style({
  position: 'relative',
  margin: '0',
  padding: '1rem',
  backgroundColor: vars.callout.rgb,
  border: `1px solid rgba(${vars.callout.border}, 0.3)`,
  borderRadius: vars.borderRadius,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: vars.callout.dark.rgb,
      border: `1px solid rgba(${vars.callout.dark.border}, 0.3)`
    }
  }
})

// ----------------------------------
// Card
// ----------------------------------
