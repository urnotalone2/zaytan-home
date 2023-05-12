import React from 'react';
import IconProps from './types/icon-types';

const ZayTanIcon: React.FC<IconProps> = ({ size = '48', ...attributes }) => {
  const width = +size * 0.9375; // width relative to height (from size prop)
  return (
    <svg
      width={width}
      viewBox="0 0 24 24"
      id="meteor-icon-kit__solid-marketplace-stall"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g clipPath="url(#clip0_525_137)">
          {' '}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.79279 0.725279C1.91545 0.295978 2.30783 0 2.75431 0H21.2457C21.6922 0 22.0846 0.295977 22.2072 0.725279L23.6358 5.72528C23.8183 6.36409 23.3387 7 22.6743 7H20V14H23C23.5523 14 24 14.4477 24 15C24 15.5523 23.5523 16 23 16H22V23C22 23.5523 21.5523 24 21 24H3C2.44772 24 2 23.5523 2 23V16H1C0.447715 16 0 15.5523 0 15C0 14.4477 0.447715 14 1 14H4V7H1.32574C0.661363 7 0.1817 6.3641 0.364219 5.72528L1.79279 0.725279ZM6 7H18V14H6V7ZM8 18C8 17.4477 7.55228 17 7 17C6.44772 17 6 17.4477 6 18V21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21V18ZM13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V18ZM17 17C17.5523 17 18 17.4477 18 18V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V18C16 17.4477 16.4477 17 17 17Z"
            fill="#F67C31"
          />{' '}
        </g>{' '}
        <defs>
          {' '}
          <clipPath id="clip0_525_137">
            {' '}
            <rect width={24} height={24} fill="white" />{' '}
          </clipPath>{' '}
        </defs>{' '}
      </g>
    </svg>
  );
};

export default ZayTanIcon;
