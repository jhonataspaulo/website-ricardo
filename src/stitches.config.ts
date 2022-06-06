import {createStitches} from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      blue: '#6BC1FF',
      lightBlue: '#E5F9FF',
      black: '#000000',
      black400: '#242424',
      black300: '#666666',
      white: '#EEFAFF',
      green: '#16D612'
    }
  },
  media: {
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(min-width: 1024px)'
  }
});
