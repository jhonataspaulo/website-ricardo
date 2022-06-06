import {styled} from '../../stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '2rem',

  '& h1': {
    fontSize: '3rem'
  },

  '& div': {
    display: 'none',
    '@bp1': {
      display: 'flex'
    }
  },

  '& nav': {
    display: 'flex',
    gap: '2rem',

    '& a': {
      color: '$black',
      fontWeight: 600,
      fontSize: '1.6rem',
      padding: '1rem'
    },
    '& a:hover': {
      color: '$blue'
    },

    '@bp1': {
      display: 'none'
    }
  }
});

export const Info = styled('div', {
  display: 'flex',
  minHeight: 'calc(100vh - 11.9rem)',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',

  '@bp1': {
    alignItems: 'center'
  }
});

export const Profile = styled('div', {
  marginBottom: '2rem',
  '& h1': {
    fontSize: '7rem',
    fontWeight: 900,
    lineHeight: '7rem'
  },
  '& h2': {
    fontSize: '3rem',
    fontWeight: 500,
    margin: '1rem 0 2rem 0'
  },
  '@bp1': {
    textAlign: 'center'
  }
});

export const SocialLinks = styled('div', {
  display: 'flex',
  gap: '2rem',
  marginTop: '4rem'
});
