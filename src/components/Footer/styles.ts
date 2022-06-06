import {styled} from '../../stitches.config';

export const Content = styled('div', {
  color: '$white'
});

export const Profile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& h1': {
    fontWeight: 900,
    fontSize: '4rem',
    '@bp1': {
      textAlign: 'center'
    }
  },
  '& h2': {
    fontWeight: 500,
    fontSize: '3rem',
    letterSpacing: '.3rem',
    '@bp1': {
      textAlign: 'center'
    }
  },

  '@bp1': {
    flexDirection: 'column',
    gap: '4rem'
  }
});

export const WhatsAppBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  fontSize: '2rem',
  margin: '3rem 0 1rem 0',
  fontWeight: 500
});

export const PhoneNumber = styled('p', {
  fontFamily: 'system-ui',
  fontWeight: 700,
  fontSize: '3.2rem',
  textAlign: 'center',
  marginBottom: '4rem'
});

export const SocialLinks = styled('div', {
  display: 'flex',
  gap: '2rem'
});

export const Copy = styled('div', {
  textAlign: 'center',

  '& p': {
    fontWeight: 300,
    fontSize: '1.8rem',
    margin: '1.5rem 0',

    '& span': {
      fontWeight: 800
    },

    '& a': {
      fontWeight: 800,
      color: '$white',
      textDecoration: 'underline',
      textUnderlineOffset: '.3rem'
    }
  }
});