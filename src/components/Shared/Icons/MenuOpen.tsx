import {IconWrapper} from './IconWrapper';

type MenuOpenProps = {
  sizeIcon?: any;
  color?: string;
};

export function MenuOpen({sizeIcon, color = '#fff'}: MenuOpenProps) {
  return (
    <IconWrapper size={sizeIcon}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 37 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37 3.46433H0V0.821472H37V3.46433ZM37 11.3929H0V8.75H37V11.3929ZM0 19.3214H37V16.6786H0V19.3214Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}
