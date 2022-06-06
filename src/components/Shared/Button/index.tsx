import {styled} from '../../../stitches.config';

type Props = {
  children: React.ReactNode;
  colorButton?: any;
};

const Container = styled('button', {
  padding: '1.8rem 4.5rem',
  display: 'flex',
  placeItems: 'center',
  gap: '1rem',
  borderRadius: '1rem',
  fontSize: '2rem',
  transition: 'all 500ms',
  cursor: 'pointer',

  variants: {
    color: {
      gradientBlue: {
        color: '$white',
        background: 'linear-gradient(90deg, #0D568B 0%, #58A8FF 98.3%)'
      },
      black: {
        color: '$white',
        background: '$black'
      }
    }
  },
  '@bp1': {
    padding: '1.5rem 6rem',
    borderRadius: '3rem'
  },

  '&:hover': {
    transform: 'scale(1.05)'
  }
});

export function Button({children, colorButton}: Props) {
  return <Container color={colorButton}>{children}</Container>;
}
