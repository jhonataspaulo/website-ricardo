import {styled} from '../../stitches.config';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '2rem',

  '& h1': {
    fontSize: '3rem'
  }
});

export const BtnToggleMenu = styled('div', {
  display: 'none',
  cursor: 'pointer',
  '@bp1': {
    display: 'flex'
  }
});

export const Navigation = styled('div', {
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

export const MenuMobile = styled('div', {
  display: 'none',
  '&.active': {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 10,
    left: 0,
    top: 0,
    minWidth: '100%',
    minHeight: '100vh',
    backgroundColor: 'rgba(0,0,0,0.9)',
    boxSizing: 'border-box',
    padding: '2.8rem 4rem'
  },
  '& > div': {
    justifyContent: 'end'
  },

  '& > nav': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8rem',
    minHeight: '80vh',

    '& a': {
      color: '$white',
      fontSize: '3rem',
      fontWeight: 500
    }
  }
});
