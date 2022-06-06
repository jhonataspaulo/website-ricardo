import {globalCss} from '../stitches.config';

export const globalStyles = globalCss({
  '*': {margin: 0, padding: 0},
  body: {
    boxSizing: 'border-box',
    fontFamily: 'Raleway'
  },
  html: {
    fontSize: '62.5%',
    fontFamily: 'system-ui'
  },
  a: {
    textDecoration: 'none'
  },
  'button, textarea': {
    border: 'none'
  }
});
