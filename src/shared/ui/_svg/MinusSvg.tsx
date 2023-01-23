import React from 'react'

interface MinusSvgI {
  classing?: string
}

const MinusSvg = ({ classing = '' }: MinusSvgI) => {
  return (
    <svg
      className={`${classing}`}
      viewBox="0 0 20 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={'transition-fill'}
        d="M20 0.8V1.2C19.9 1.4 19.8 1.5 19.7 1.7C19.5 1.9 19.2 2 18.9 2H8.69999C6.19999 2 3.69999 2 1.19999 2C0.599994 2 0.0999939 1.8 -0.100006 1.2V0.8C-6.10203e-06 0.6 0.0999939 0.4 0.199994 0.3C0.499994 1.78814e-07 0.799994 0 1.09999 0H8.69999C8.79999 0 11 0 11.2 0H11.3C13.8 0 16.3 0 18.8 0C19.4 0 19.8 0.2 20 0.8Z"
        fill="#222021"
      />
    </svg>
  )
}

export default MinusSvg
