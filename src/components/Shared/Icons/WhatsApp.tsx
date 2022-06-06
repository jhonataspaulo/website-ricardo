import {IconWrapper} from './IconWrapper';

type WhatsAppProps = {
  sizeIcon?: any;
  color?: string;
};

export function WhatsApp({sizeIcon, color = '#fff'}: WhatsAppProps) {
  return (
    <IconWrapper size={sizeIcon}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3607 19.158C22.9657 18.9604 21.0287 18.0086 20.6681 17.876C20.3075 17.7447 20.045 17.6798 19.7812 18.0748C19.5187 18.4673 18.7643 19.3555 18.535 19.618C18.3043 19.8818 18.0749 19.9137 17.6812 19.7174C17.2874 19.5186 16.0174 19.1036 14.5126 17.762C13.342 16.7173 12.5505 15.4273 12.3212 15.0322C12.0918 14.6385 12.296 14.425 12.4935 14.2288C12.6712 14.0525 12.8873 13.7688 13.0848 13.5394C13.2823 13.3087 13.3473 13.1444 13.4786 12.8805C13.6111 12.618 13.5448 12.3887 13.4454 12.1911C13.3473 11.9936 12.5598 10.054 12.231 9.26519C11.9115 8.49758 11.5867 8.60232 11.3454 8.58906C11.1147 8.57845 10.8522 8.5758 10.5897 8.5758C10.3272 8.5758 9.90034 8.67391 9.53973 9.06898C9.1778 9.46273 8.16095 10.4159 8.16095 12.3555C8.16095 14.2938 9.57155 16.1671 9.76909 16.4309C9.96663 16.6934 12.5465 20.6733 16.4986 22.3796C17.4399 22.7852 18.1731 23.0279 18.7445 23.2082C19.6884 23.5091 20.5475 23.4667 21.2263 23.3646C21.9819 23.2519 23.5569 22.4114 23.8857 21.4913C24.2132 20.5712 24.2132 19.7824 24.1151 19.618C24.017 19.4536 23.7545 19.3555 23.3594 19.158H23.3607ZM16.1725 28.9725H16.1672C13.8198 28.973 11.5156 28.342 9.49599 27.1457L9.01871 26.8619L4.05774 28.1638L5.38217 23.3275L5.07061 22.8316C3.7583 20.7427 3.06381 18.3251 3.0674 15.8582C3.07005 8.63281 8.94845 2.75441 16.1778 2.75441C19.6778 2.75441 22.9683 4.11994 25.4422 6.59645C26.6624 7.81161 27.6295 9.25666 28.2876 10.848C28.9457 12.4394 29.2817 14.1454 29.2763 15.8675C29.2736 23.0928 23.3952 28.9725 16.1725 28.9725ZM27.3247 4.7152C25.864 3.24484 24.126 2.07899 22.2114 1.28521C20.2968 0.491429 18.2438 0.0855078 16.1712 0.0909662C7.48216 0.0909662 0.407932 7.16387 0.405281 15.8568C0.403955 18.6356 1.12914 21.3481 2.50925 23.7385L0.272705 31.9091L8.63027 29.7163C10.9422 30.9759 13.533 31.6359 16.1659 31.636H16.1725C24.8615 31.636 31.9357 24.5631 31.9384 15.8688C31.9448 13.797 31.5403 11.7445 30.7484 9.83001C29.9565 7.91553 28.7928 6.17707 27.3247 4.7152Z"
          fill={color}
        />
      </svg>
    </IconWrapper>
  );
}