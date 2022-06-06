import {IconWrapper} from './IconWrapper';

type PhotoshopProps = {
  color: string;
  sizeIcon?: any;
};

export function Photoshop({sizeIcon, color = '#fff'}: PhotoshopProps) {
  return (
    <IconWrapper size={sizeIcon}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_38)">
          <path
            d="M24.625 21.05C23.7 20.675 22.7 20.525 21.675 20.55C21.025 20.55 20.45 20.55 19.975 20.575C19.475 20.55 19.125 20.575 18.95 20.6V29C19.3 29.025 19.625 29.05 19.925 29.05H21.25C22.225 29.05 23.2 28.9 24.125 28.6C24.925 28.375 25.625 27.9 26.175 27.275C26.7 26.65 26.95 25.8 26.95 24.7C26.975 23.925 26.775 23.15 26.375 22.475C25.9582 21.8259 25.3451 21.3267 24.625 21.05ZM49.375 0.75H10.625C4.75 0.75 0 5.5 0 11.375V48.6225C0 54.4975 4.75 59.2475 10.625 59.2475H49.375C55.25 59.2475 60 54.4975 60 48.6225V11.375C60 5.5 55.25 0.75 49.375 0.75ZM30.8975 29.875C29.9 31.275 28.5 32.325 26.875 32.925C25.175 33.55 23.3 33.775 21.25 33.775C20.65 33.775 20.25 33.775 20 33.75C19.75 33.725 19.4 33.725 18.925 33.725V41.7475C18.95 41.9225 18.825 42.075 18.65 42.1H13.8C13.6 42.1 13.5 41.9975 13.5 41.7725V16.05C13.5 15.875 13.575 15.775 13.75 15.775C14.175 15.775 14.575 15.775 15.15 15.75C15.75 15.725 16.375 15.725 17.05 15.7C17.725 15.675 18.45 15.675 19.225 15.65C20 15.625 20.75 15.625 21.5 15.625C23.55 15.625 25.25 15.875 26.65 16.4C27.9 16.825 29.05 17.525 30 18.45C30.8 19.25 31.425 20.225 31.825 21.3C32.1975 22.35 32.3975 23.425 32.3975 24.55C32.4 26.7 31.9 28.475 30.8975 29.875ZM48.625 39.6C47.925 40.6 46.9475 41.3725 45.825 41.8275C44.6 42.35 43.1 42.6225 41.2975 42.6225C40.15 42.6225 39.0225 42.525 37.9 42.3C37.025 42.1475 36.15 41.875 35.35 41.5C35.175 41.4025 35.0475 41.2275 35.0725 41.0275V36.6775C35.0725 36.605 35.1 36.5025 35.175 36.4525C35.2475 36.4025 35.325 36.4275 35.4 36.4775C36.375 37.0525 37.4 37.455 38.5 37.7025C39.4475 37.9525 40.4475 38.0775 41.45 38.0775C42.4 38.0775 43.075 37.95 43.525 37.725C43.925 37.55 44.2 37.125 44.2 36.675C44.2 36.3225 44 36 43.6 35.675C43.2 35.3525 42.3775 34.9775 41.1525 34.4975C39.8775 34.0475 38.705 33.4475 37.6025 32.7C36.8202 32.1397 36.1707 31.4142 35.7 30.575C35.3027 29.784 35.106 28.9074 35.1275 28.0225C35.1275 26.9475 35.4275 25.9225 35.98 24.9975C36.605 23.9975 37.5275 23.1975 38.6025 22.6975C39.775 22.1 41.25 21.825 43.025 21.825C44.05 21.825 45.1 21.9 46.125 22.05C46.875 22.15 47.6 22.35 48.275 22.625C48.3725 22.65 48.475 22.75 48.525 22.85C48.55 22.95 48.575 23.05 48.575 23.15V27.225C48.575 27.325 48.525 27.425 48.45 27.475C48.225 27.525 48.1 27.525 48 27.475C47.25 27.075 46.45 26.8 45.6 26.625C44.675 26.425 43.75 26.3 42.8 26.3C42.3 26.275 41.775 26.35 41.2975 26.475C40.975 26.55 40.6975 26.725 40.5225 26.975C40.3975 27.175 40.3225 27.425 40.3225 27.65C40.3225 27.875 40.4225 28.1 40.575 28.3C40.8 28.575 41.0975 28.8 41.425 28.975C41.9975 29.275 42.6 29.55 43.1975 29.8C44.55 30.25 45.85 30.875 47.05 31.625C47.875 32.1475 48.55 32.85 49.0225 33.7C49.4225 34.495 49.6225 35.375 49.5975 36.2725C49.625 37.45 49.275 38.6225 48.625 39.6Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_2_38">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
}