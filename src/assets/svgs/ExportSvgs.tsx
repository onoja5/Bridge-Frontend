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
