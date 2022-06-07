import {IconWrapper} from './IconWrapper';

type MenuCloseProps = {
  sizeIcon?: any;
  color?: string;
  onClick?: () => void;
};

export function MenuClose({sizeIcon, color = '#fff', onClick}: MenuCloseProps) {
  return (
    <IconWrapper size={sizeIcon} onClick={onClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8688 15L28.0973 2.77144L26.2286 0.902658L14 13.1312L1.93439 1.06561L0.0656089 2.93439L12.1312 15L0.0656089 27.0656L1.93439 28.9344L14 16.8688L26.2286 29.0973L28.0973 27.2286L15.8688 15Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}
