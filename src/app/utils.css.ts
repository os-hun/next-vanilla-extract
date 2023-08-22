import { createGlobalTheme } from '@vanilla-extract/css'

// ----------------------------------
// Variants
// ----------------------------------
export const vars = createGlobalTheme(':root', {
  maxWidth: '1100px',
  borderRadius: '12px',
  font: {
    family: `ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`
  },
  foreground: {
    rgb: '0, 0, 0',
    dark: {
      rgb: '255, 255, 255'
    }
  },
  background: {
    start: '214, 219, 220',
    end: '255, 255, 255',
    dark: {
      start: '0, 0, 0',
      end: '0, 0, 0'
    }
  },
  glow: {
    primary: `conic-gradient(
      from 180deg at 50% 50%,
      #16abff33 0deg,
      #0885ff33 55deg,
      #54d6ff33 120deg,
      #0071ff33 160deg,
      transparent 360deg
    )`,
    secondary: `radial-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    )`,
    dark: {
      primary: `radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))`,
      secondary: `linear-gradient(
          to bottom right,
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0.3)
        )`
    }
  },
  title: {
    start: '239, 245, 249',
    end: '228, 232, 233',
    border: `conic-gradient(
      #00000080,
      #00000040,
      #00000030,
      #00000020,
      #00000010,
      #00000010,
      #00000080
    )`,
    dark: {
      start: '2, 13, 46',
      end: '2, 5, 19',
      border: `conic-gradient(
          #ffffff80,
          #ffffff40,
          #ffffff30,
          #ffffff20,
          #ffffff10,
          #ffffff10,
          #ffffff80
        )`
    }
  },
  callout: {
    rgb: '238, 240, 241',
    border: '172, 175, 176',
    dark: {
      rgb: '20, 20, 20',
      border: '108, 108, 108'
    }
  },
  card: {
    rgb: '180, 185, 188',
    border: '131, 134, 135',
    dark: {
      rgb: '100, 100, 100',
      border: '200, 200, 200'
    }
  }
})
