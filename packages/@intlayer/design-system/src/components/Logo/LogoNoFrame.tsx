import type { FC } from 'react';
import type { LogoBaseProps } from '.';

export const LogoNoFrame: FC<LogoBaseProps> = ({ bgColor, ...props }) => (
  <svg
    width="480"
    height="448"
    viewBox="0 0 480 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_2003_149)">
      <mask
        id="path-1-outside-1_2003_149"
        maskUnits="userSpaceOnUse"
        x="4"
        y="0"
        width="472"
        height="440"
        fill="currentColor"
      >
        <rect fill={bgColor} x="4" width="472" height="440" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 1C25.1472 1 5 21.1472 5 46C5 70.8528 25.1472 91 50 91H295C319.853 91 340 70.8528 340 46C340 21.1472 319.853 1 295 1H50ZM5 221C5 196.147 25.1472 176 50 176H430C454.853 176 475 196.147 475 221C475 245.853 454.853 266 430 266H50C25.1472 266 5 245.853 5 221ZM5 394C5 369.147 25.1472 349 50 349H230C254.853 349 275 369.147 275 394C275 418.853 254.853 439 230 439H50C25.1472 439 5 418.853 5 394Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 1C25.1472 1 5 21.1472 5 46C5 70.8528 25.1472 91 50 91H295C319.853 91 340 70.8528 340 46C340 21.1472 319.853 1 295 1H50ZM5 221C5 196.147 25.1472 176 50 176H430C454.853 176 475 196.147 475 221C475 245.853 454.853 266 430 266H50C25.1472 266 5 245.853 5 221ZM5 394C5 369.147 25.1472 349 50 349H230C254.853 349 275 369.147 275 394C275 418.853 254.853 439 230 439H50C25.1472 439 5 418.853 5 394Z"
        fill="currentColor"
      />
      <path
        d="M6 46C6 21.6995 25.6995 2 50 2V0C24.5949 0 4 20.5949 4 46H6ZM50 90C25.6995 90 6 70.3005 6 46H4C4 71.4051 24.5949 92 50 92V90ZM295 90H50V92H295V90ZM339 46C339 70.3005 319.301 90 295 90V92C320.405 92 341 71.4051 341 46H339ZM295 2C319.301 2 339 21.6995 339 46H341C341 20.5949 320.405 0 295 0V2ZM50 2H295V0H50V2ZM50 175C24.5949 175 4 195.595 4 221H6C6 196.699 25.6995 177 50 177V175ZM430 175H50V177H430V175ZM476 221C476 195.595 455.405 175 430 175V177C454.301 177 474 196.699 474 221H476ZM430 267C455.405 267 476 246.405 476 221H474C474 245.301 454.301 265 430 265V267ZM50 267H430V265H50V267ZM4 221C4 246.405 24.5949 267 50 267V265C25.6995 265 6 245.301 6 221H4ZM50 348C24.5949 348 4 368.595 4 394H6C6 369.699 25.6995 350 50 350V348ZM230 348H50V350H230V348ZM276 394C276 368.595 255.405 348 230 348V350C254.301 350 274 369.699 274 394H276ZM230 440C255.405 440 276 419.405 276 394H274C274 418.3 254.301 438 230 438V440ZM50 440H230V438H50V440ZM4 394C4 419.405 24.5949 440 50 440V438C25.6995 438 6 418.3 6 394H4Z"
        fill="currentColor"
        mask="url(#path-1-outside-1_2003_149)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2003_149"
        x="0"
        y="0"
        width="480"
        height="448"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2003_149"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2003_149"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
