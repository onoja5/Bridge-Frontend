// paste svg file into this website input to have it converted to comonent: https://react-svgr.com/playground/

import { SVGProps } from 'react';
export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6'
    />
  </svg>
);

export const CloseCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.88089 1.59253C4.37287 1.59253 1.5188 4.4466 1.5188 7.95462C1.5188 11.4626 4.37287 14.3167 7.88089 14.3167C11.3889 14.3167 14.243 11.4626 14.243 7.95462C14.243 4.4466 11.3889 1.59253 7.88089 1.59253ZM10.1844 9.56624C10.2317 9.61124 10.2696 9.66525 10.2958 9.72511C10.3219 9.78497 10.3358 9.84946 10.3367 9.91478C10.3375 9.98009 10.3253 10.0449 10.3006 10.1054C10.276 10.1659 10.2396 10.2209 10.1934 10.2671C10.1472 10.3133 10.0922 10.3498 10.0317 10.3744C9.97119 10.399 9.90636 10.4112 9.84105 10.4104C9.77573 10.4096 9.71124 10.3957 9.65138 10.3695C9.59152 10.3433 9.53751 10.3055 9.49251 10.2581L7.88089 8.6468L6.26926 10.2581C6.17673 10.346 6.05353 10.3943 5.92592 10.3927C5.7983 10.391 5.67637 10.3396 5.58613 10.2494C5.49588 10.1591 5.44446 10.0372 5.44283 9.90959C5.4412 9.78197 5.48948 9.65877 5.57738 9.56624L7.1887 7.95462L5.57738 6.34299C5.48948 6.25046 5.4412 6.12726 5.44283 5.99965C5.44446 5.87203 5.49588 5.7501 5.58613 5.65986C5.67637 5.56961 5.7983 5.51819 5.92592 5.51656C6.05353 5.51493 6.17673 5.56321 6.26926 5.65111L7.88089 7.26243L9.49251 5.65111C9.58504 5.56321 9.70824 5.51493 9.83586 5.51656C9.96347 5.51819 10.0854 5.56961 10.1756 5.65986C10.2659 5.7501 10.3173 5.87203 10.3189 5.99965C10.3206 6.12726 10.2723 6.25046 10.1844 6.34299L8.57307 7.95462L10.1844 9.56624Z"
      fill="white"
    />
  </svg>
);

export const RecommendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17.657 18.657A8 8 0 0 1 6.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0 1 20 13a7.975 7.975 0 0 1-2.343 5.657Z'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9.879 16.121A3 3 0 1 0 12.015 11L11 14H9c0 .768.293 1.536.879 2.121Z'
    />
  </svg>
);

export const JobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'
    />
  </svg>
);

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='none'
    {...props}
  >
    <g fill='currentColor' clipPath='url(#a)'>
      <path d='M8.607 11.25a.75.75 0 0 0-.75.75v2.25a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25V3.75A2.25 2.25 0 0 1 3.75 1.5h1.857a2.25 2.25 0 0 1 2.25 2.25V6a.75.75 0 0 0 1.5 0V3.75A3.754 3.754 0 0 0 5.607 0H3.75A3.755 3.755 0 0 0 0 3.75v10.5A3.754 3.754 0 0 0 3.75 18h1.857a3.755 3.755 0 0 0 3.75-3.75V12a.75.75 0 0 0-.75-.75Z' />
      <path d='m17.15 7.41-3.44-3.44a.75.75 0 1 0-1.06 1.06l3.197 3.198L4.5 8.25a.75.75 0 0 0 0 1.5l11.391-.023-3.242 3.243a.75.75 0 1 0 1.06 1.06l3.44-3.44a2.25 2.25 0 0 0 .001-3.18Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h18v18H0z' />
      </clipPath>
    </defs>
  </svg>
);

export const OutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={62}
    height={62}
    fill='none'
    {...props}
  >
    <rect width={55} height={55} x={3.5} y={3.5} fill='#FEC3C3' rx={27.5} />
    <rect
      width={55}
      height={55}
      x={3.5}
      y={3.5}
      stroke='#FEE8E8'
      strokeWidth={7}
      rx={27.5}
    />
    <path
      fill='#FF3A44'
      d='M32.593 20.546a1.835 1.835 0 0 0-3.185 0L18.266 39.505c-.743 1.264.148 2.871 1.592 2.871h22.284c1.444 0 2.337-1.608 1.592-2.871l-11.14-18.959Zm-1.595 5.58c.869 0 1.55.751 1.462 1.617l-.569 5.699a.897.897 0 0 1-1.787 0l-.569-5.699a1.47 1.47 0 0 1 1.463-1.617Zm.003 9.75a1.625 1.625 0 1 1 0 3.25 1.625 1.625 0 0 1 0-3.25Z'
    />
  </svg>
);

export const MentorBadgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      d='M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z'
      stroke='#2563EB'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.21 13.8899L7 22.9999L12 19.9999L17 22.9999L15.79 13.8799'
      fill='#2563EB'
    />
    <path
      d='M8.21 13.8899L7 22.9999L12 19.9999L17 22.9999L15.79 13.8799'
      stroke='#2563EB'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const ActionSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={66}
    height={66}
    fill='none'
    {...props}
  >
    <rect width={56} height={56} x={5} y={5} fill='#D1FADF' rx={28} />
    <rect
      width={56}
      height={56}
      x={5}
      y={5}
      stroke='#ECFDF3'
      strokeWidth={10}
      rx={28}
    />
    <path
      stroke='#1B9B48'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.333}
      d='M44.667 31.927V33a11.667 11.667 0 1 1-6.919-10.663m6.919 1.33L33 35.345l-3.5-3.5'
    />
  </svg>
);

export const UptrendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      d="M9.70833 5.2749H15.375M15.375 5.2749V10.9416M15.375 5.2749L9.70833 10.9416L6.875 8.10824L2.625 12.3582"
      stroke="#34A853"
      strokeWidth="1.41667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DowntrendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      d="M9.70833 12.3582H15.375M15.375 12.3582V6.69157M15.375 12.3582L9.70833 6.69157L6.875 9.5249L2.625 5.2749"
      stroke="#EB4335"
      strokeWidth="1.41667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LightbulbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect width={20} height={20} rx={10} fill="white" />
    <path
      d="M8.83174 12.5H11.1682M9.99997 5.5V6M13.182 6.81802L12.8284 7.17157M14.5 9.99997H14M6 9.99997H5.5M7.17155 7.17157L6.81799 6.81802M8.23221 11.7678C7.2559 10.7915 7.2559 9.20856 8.23221 8.23224C9.20852 7.25593 10.7914 7.25593 11.7677 8.23224C12.7441 9.20856 12.7441 10.7915 11.7677 11.7678L11.4942 12.0413C11.1777 12.3578 11 12.787 11 13.2345V13.5C11 14.0523 10.5523 14.5 9.99997 14.5C9.44769 14.5 8.99997 14.0523 8.99997 13.5V13.2345C8.99997 12.787 8.8222 12.3578 8.50576 12.0413L8.23221 11.7678Z"
      stroke="#2563EB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.84912C6.62391 2.84912 2.25 7.22303 2.25 12.5991C2.25 17.9752 6.62391 22.3491 12 22.3491C17.3761 22.3491 21.75 17.9752 21.75 12.5991C21.75 7.22303 17.3761 2.84912 12 2.84912ZM15.75 13.3491H12.75V16.3491C12.75 16.548 12.671 16.7388 12.5303 16.8795C12.3897 17.0201 12.1989 17.0991 12 17.0991C11.8011 17.0991 11.6103 17.0201 11.4697 16.8795C11.329 16.7388 11.25 16.548 11.25 16.3491V13.3491H8.25C8.05109 13.3491 7.86032 13.2701 7.71967 13.1295C7.57902 12.9888 7.5 12.798 7.5 12.5991C7.5 12.4002 7.57902 12.2094 7.71967 12.0688C7.86032 11.9281 8.05109 11.8491 8.25 11.8491H11.25V8.84912C11.25 8.65021 11.329 8.45944 11.4697 8.31879C11.6103 8.17814 11.8011 8.09912 12 8.09912C12.1989 8.09912 12.3897 8.17814 12.5303 8.31879C12.671 8.45944 12.75 8.65021 12.75 8.84912V11.8491H15.75C15.9489 11.8491 16.1397 11.9281 16.2803 12.0688C16.421 12.2094 16.5 12.4002 16.5 12.5991C16.5 12.798 16.421 12.9888 16.2803 13.1295C16.1397 13.2701 15.9489 13.3491 15.75 13.3491Z"
      fill="#2563EB"
    />
  </svg>
);

export const FeatherIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.24 12.8392C21.3658 11.7133 21.9983 10.1863 21.9983 8.59416C21.9983 7.00197 21.3658 5.475 20.24 4.34916C19.1142 3.22331 17.5872 2.59082 15.995 2.59082C14.4028 2.59082 12.8758 3.22331 11.75 4.34916L5 11.0992V19.5992H13.5L20.24 12.8392Z"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8.59912L2 22.5991"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 15.5991H9"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
