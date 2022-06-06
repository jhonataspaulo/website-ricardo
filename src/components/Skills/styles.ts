import {styled} from '../../stitches.config';

export const Content = styled('div', {
  '& > h1': {
    fontSize: '4rem',
    fontWeight: 900
  },
  '& > h2': {
    fontSize: '2.5rem',
    fontWeight: 500,
    marginBottom: '2rem',
    color: '$black400',
    marginTop: '1rem'
  }
});

export const SkillsBox = styled('div', {
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr',

  '@bp1': {
    display: 'flex',
    flexDirection: 'column'
  },

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  }
});

export const Skill = styled('div', {
  maxWidth: 'max(20rem, 100%)',
  backgroundColor: '$white',
  padding: '3rem',
  borderRadius: '3rem',
  '& h2': {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginTop: '2rem'
  },
  '& p': {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: '$black400',
    marginTop: '1rem'
  }
});
