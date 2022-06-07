import {styled} from '../../../stitches.config';

const Container = styled('div', {
  variants: {
    size: {
      small: {
        width: '2.5rem',
        height: '2.5rem'
      },
      default: {
        width: '3rem',
        height: '3rem'
      },
      mobile: {
        width: '4.5rem',
        height: '4.5rem'
      },
      large: {
        width: '5rem',
        height: '5rem'
      }
    }
  }
});

type Props = {
  size?: any;
  children?: React.ReactNode;
  hover?: string;
  onClick?: () => void;
};

export function IconWrapper({
  size = 'default',
  children,
  hover,
  onClick
}: Props) {
  return (
    <Container
      onClick={onClick}
      size={size}
      css={{
        '&:hover > svg > path': {
          fill: `${hover}`,
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </Container>
  );
}
