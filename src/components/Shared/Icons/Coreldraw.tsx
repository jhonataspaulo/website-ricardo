import {AppProps} from 'next/app';
import {IconWrapper} from './IconWrapper';

type CorelDrawProps = {
  color: string;
  sizeIcon?: any;
};

export function CorelDraw(
  {sizeIcon, color = '#fff'}: CorelDrawProps,
  {pageProps}: AppProps
) {
  return (
    <IconWrapper size={sizeIcon} {...pageProps}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 46 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9542 57.3443H27.2968L26.0256 63H19.2088L17.9542 57.3443ZM15.3589 22.7329C15.8455 31.2391 18.0062 41.8688 21.7111 54.2062C22.3517 54.5277 22.9601 54.5154 23.5398 54.2062C27.2437 41.873 29.4043 31.2459 29.8916 22.741C31.4948 -7.875 13.793 -7.01367 15.3589 22.7329ZM19.2253 0C19.2253 0 8.31942 4.13634 9.10452 20.0457C9.88949 35.9549 20.737 54.1976 20.737 54.1976C14.059 48.2602 4.16788 29.7636 3.97732 18.8791C3.90868 9.22851 10.4654 1.13572 19.2253 0ZM1.88589 20.2757C3.48003 36.43 19.922 54.8213 18.6094 53.615C14.9481 50.4507 2.61991 35.5522 0.303294 21.5915C-2.01332 7.631 9.70138 2.79562 9.70138 2.79562C2.90146 7.41567 1.12277 14.1767 1.88601 20.2758L1.88589 20.2757ZM26.9893 53.438C27.8839 51.5702 35.6175 35.0323 36.357 20.0457C37.142 4.13634 26.2362 0 26.2362 0C27.2529 0.0433125 29.5158 0.704813 31.6521 1.72512C33.7883 2.7453 41.3371 7.39352 41.4841 18.8791C41.3589 26.0293 37.988 36.2127 33.7967 44.0422C38.0421 37.5175 42.8059 28.5998 43.6272 20.2757C44.3905 14.1767 42.6118 7.41567 35.8118 2.79562C35.8118 2.79562 47.5264 7.631 45.2099 21.5915C42.8931 35.5522 30.5428 50.4655 26.8817 53.6297L26.9893 53.4381V53.438Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}