import {IconWrapper} from './IconWrapper';

type FacebookProps = {
  color?: string;
  sizeIcon?: any;
  colorHover?: string;
};

export function Facebook({
  sizeIcon,
  color = '#fff',
  colorHover
}: FacebookProps) {
  return (
    <IconWrapper size={sizeIcon} hover={colorHover}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.0009 0.000303765C35.9443 -0.00803066 41.7566 1.77368 46.7023 5.11999C51.6481 8.4663 55.505 13.2268 57.7852 18.7992C60.0653 24.3716 60.6661 30.5055 59.5117 36.4247C58.3572 42.3439 55.4993 47.7824 51.2996 52.0521C47.0999 56.3218 41.7471 59.2309 35.9184 60.4111C30.0898 61.5914 24.0474 60.9899 18.5556 58.6826C13.0638 56.3754 8.36951 52.4662 5.06667 47.4496C1.76383 42.433 0.000870491 36.5344 0.000864822 30.5003C-0.00240579 26.4976 0.771033 22.5334 2.27701 18.8343C3.78298 15.1351 5.99198 11.7733 8.77785 8.94104C11.5637 6.10874 14.8719 3.86138 18.5134 2.32731C22.1548 0.793238 26.0583 0.00251566 30.0009 0.000303765ZM27.8971 53.1436H36.1005V30.5003H41.8515C42.3951 30.5003 42.4781 27.3913 42.5361 26.8015C42.7291 25.4596 42.8524 24.1082 42.9054 22.7531H36.1005L36.1005 17.7484C36.1005 16.2445 37.3453 15.6084 38.8058 15.6084H42.9054V7.86543H42.4324C36.9303 7.86543 32.7312 7.33884 29.8764 10.2203C28.7892 11.2988 27.9884 13.6158 27.9137 15.7306C27.8639 16.8511 27.8017 18.1149 27.8017 19.4167C27.8017 20.1118 28.0631 22.7531 27.449 22.7531H22.1461V30.5003H27.8017L27.8971 53.1436Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}
