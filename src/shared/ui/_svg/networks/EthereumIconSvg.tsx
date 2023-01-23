import React from 'react'

interface EthereumIconSvgI {
  classing?: string
}

const EthereumIconSvg = ({ classing = '' }: EthereumIconSvgI) => {
  return (
    <svg
      className={`${classing}`}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_205_6416)">
        <path
          d="M4.9991 0L4.93201 0.227887V6.84004L4.9991 6.90697L8.06832 5.09273L4.9991 0Z"
          fill="#343434"
        />
        <path
          d="M4.99911 0L1.92981 5.09273L4.99911 6.90697V3.69762V0Z"
          fill="#8C8C8C"
        />
        <path
          d="M4.99912 7.48811L4.9613 7.53422V9.88957L4.99912 9.99995L8.07022 5.6748L4.99912 7.48811Z"
          fill="#3C3C3B"
        />
        <path
          d="M4.99911 9.99995V7.48811L1.92981 5.6748L4.99911 9.99995Z"
          fill="#8C8C8C"
        />
        <path
          d="M4.99915 6.90699L8.06837 5.09274L4.99915 3.69763V6.90699Z"
          fill="#141414"
        />
        <path
          d="M1.92981 5.09274L4.99911 6.90699V3.69763L1.92981 5.09274Z"
          fill="#393939"
        />
      </g>
      <defs>
        <clipPath id="clip0_205_6416">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default EthereumIconSvg
