import {styled} from '../../stitches.config';

export const Content = styled('div', {
  '& h1': {
    fontSize: '4rem',
    fontWeight: 900
  },
  '& h2': {
    fontSize: '2.5rem',
    fontWeight: 500,
    marginBottom: '2rem',
    color: '$black400',
    marginTop: '1rem'
  },
  '& p': {
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: '3rem',
    color: '$black300',
    marginBottom: '4rem'
  },
  '& div': {
    display: 'flex',
    justifyContent: 'flex-end',
    '@bp1': {
      justifyContent: 'center'
    }
  }
});
