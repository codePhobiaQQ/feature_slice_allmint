import React from 'react'

interface CloseSvgI {
  classing?: string
}

const LockSvg = ({ classing = '' }: CloseSvgI) => {
  return (
    <svg
      className={`${classing}`}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9 20C10 20 6 20 2.1 20C2 20 2 20 1.9 19.9C1.1 19.7 0.5 19 0.5 18.1C0.5 15.2 0.5 12.2 0.5 9.3C0.5 8.4 1.2 7.6 2.1 7.5C2.4 7.5 2.7 7.5 3 7.4C3 7.3 3 7.3 3 7.2C3 6.4 3 5.6 3 4.8C3 2.7 4.4 0.8 6.4 0.2C6.8 0.1 7.2 0.1 7.6 0C7.9 0 8.2 0 8.5 0C8.6 0 8.7 0 8.8 0.1C11.3 0.5 13.1 2.6 13.1 5.1C13.1 5.8 13.1 6.6 13.1 7.3C13.1 7.4 13.1 7.4 13.1 7.5C13.3 7.5 13.6 7.5 13.8 7.5C14.8 7.5 15.6 8.3 15.6 9.3C15.6 12.2 15.6 15.2 15.6 18.1C15.6 18.9 15.1 19.5 14.4 19.8C14.1 19.9 14 20 13.9 20ZM8 8.8C6.2 8.8 4.3 8.8 2.5 8.8C2 8.8 1.8 9 1.8 9.5C1.8 12.4 1.8 15.2 1.8 18.1C1.8 18.6 2 18.8 2.5 18.8C6.2 18.8 9.9 18.8 13.5 18.8C14 18.8 14.2 18.6 14.2 18.1C14.2 15.3 14.2 12.4 14.2 9.6C14.2 9.1 14 8.9 13.5 8.9C11.7 8.7 9.8 8.8 8 8.8ZM4.3 7.5C6.8 7.5 9.3 7.5 11.8 7.5C11.8 6.6 11.8 5.7 11.8 4.8C11.7 2.9 10.1 1.4 8.3 1.3C6 1.2 4.3 2.8 4.3 5C4.3 5.8 4.3 6.5 4.3 7.3C4.3 7.4 4.3 7.4 4.3 7.5Z"
        fill="#282828"
      />
    </svg>
  )
}

export default LockSvg
