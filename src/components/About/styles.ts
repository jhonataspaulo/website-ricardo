import {styled} from '../../stitches.config';

export const Bio = styled('div', {
  display: 'flex',
  gap: '2rem',
  '@bp1': {
    flexDirection: 'column'
  },
  '@bp2': {
    flexDirection: 'column'
  }
});

export const BoxImage = styled('div', {
  minWidth: 'min(30rem, 100%)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  '@bp1': {
    marginLeft: '2.5rem'
  },
  '@bp2': {
    marginLeft: '2.5rem'
  }
});

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
    color: '$black300'
  }
});
