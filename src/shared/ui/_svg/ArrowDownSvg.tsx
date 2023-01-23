import React from 'react'

interface ArrowDownSvgI {
  classing?: string
}

const ArrowDownSvg = ({ classing }: ArrowDownSvgI) => {
  return (
    <svg
      className={classing}
      width="7"
      height="5"
      viewBox="0 0 7 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 5L0.468912 0.499999L6.53109 0.5L3.5 5Z" fill="#858585" />
    </svg>
  )
}

export default ArrowDownSvg
